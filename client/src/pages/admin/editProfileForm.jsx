import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { FaBell } from "react-icons/fa";
import { AiFillCamera } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import { IconButton, Tooltip } from "@mui/material";
import { Scrollbars } from "react-custom-scrollbars";
import { BsBriefcaseFill } from "react-icons/bs";
import { AiFillWarning } from "react-icons/ai";
import Select from "react-select";
import { GetUser } from "../services/GetUser";
import { AdminSkills } from "../services/AdminSkills";
import { AllSkills } from "../services/AllSkills";
import { useSelector } from "react-redux";
import { UpdateUser } from "../services/UpdateUser";
import { GetImagePath } from "../services/GetImagePath";
import { EditImagePath } from "../services/EditImagePath";
import {
  Box,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";

import "./index.css";
import Dropzone from "react-dropzone";
import * as yup from "yup";

const EditProfileForm = ({ handleClose }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { palette } = useTheme();
  const [userInfo, setUserInfo] = useState([]);
  const [userEmail, setUserEmail] = useState(
    useSelector((state) => state.email)
  );
  const [options, setSkillOptions] = useState([
    // Need to fetch options
    { value: "Python", label: "Python", experience: "0" },
    { value: "Front-End", label: "Front-End", experience: "0" },
    { value: "Backend", label: "Backend", experience: "0" },
  ]);

  const [skills, setSkills] = useState([]);
  const [skillExperience, setSkillExperience] = useState([]);
  const [initialValuesRegister, setInitialValueRegister] = useState({
    name: "",
    email: "",
    bio: "",
    gitHubToken: "",
    gitHubName: "",
    newPassword: "",
  });

  const reportBugSchema = yup.object().shape({
    name: yup.string().required("required"),
    email: yup.string().required("required"),
    bio: yup.string().required("required"),
    gitHubToken: yup.string().required("required"),
    gitHubName: yup.string().required("required"),
    newPassword: yup.string(),
  });

  const [imagePath, setImagePath] = useState("");

  const [image, setImage] = useState("");
  const login = useSelector((state) => state.email);

  useEffect(() => {
    GetImagePath({
      email: userEmail.email,
    }).then((data) => {
      console.log(data);
      setImagePath(data);
      if (data == "") {
        setImagePath("jane.jpg");
      }
      console.log(imagePath);
    });
    GetUser({
      email: userEmail,
    }).then((data) => {
      setInitialValueRegister({
        name: data.name || "",
        email: data.email || "",
        bio: data.bio || "",
        gitHubToken: data.githubtoken || "",
        gitHubName: data.githubuname,
        newPassword: "",
      });
      console.log(initialValuesRegister);
    });
    AdminSkills({ email: userEmail }).then((data) => {
      setSkills(data);
    });

    AllSkills({ email: userEmail }).then((data) => {
      setSkillOptions(data);
    });
  }, []);

  const uploadImage = (e) => {
    console.log(e.target.files[0].name);
    if (e.target.files[0].name != "") {
      setImagePath(e.target.files[0].name);
      setImage(e.target.files[0]);
      console.log(imagePath);
    }
  };

  useEffect(() => {
    console.log(image);
    if (image) {
      let form = new FormData();
      form.append("file", image);
      fetch("http://localhost:5000/upload", {
        method: "POST",
        body: form,
      });
      var values = {};
      values.email = userEmail;
      values.path = image.name;
      console.log("values", values);
      fetch("http://localhost:5000/api/editImagePath", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      console.log(imagePath);
    }
  }, [image]);

  const handleFormSubmit = async (values, onSubmitProps) => {
    console.log("SUBMITTING");
    console.log(skills);
    console.log(values);
    try {
      UpdateUser({ userEmail, skills: skills, values });
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSkillChange = (e) => {
    setSkills(e);
  };
  const handleExperienceChange = (e, key) => {
    var tempSkills = [...skills];
    tempSkills[key]["experience"] = e.target.value;
    setSkillExperience(tempSkills);
  };

  return (
    <Formik
      onSubmit={(e) => {
        handleFormSubmit(e);
      }}
      initialValues={initialValuesRegister}
      validationSchema={reportBugSchema}
      enableReinitialize={true}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            {
              <>
                <div
                  style={{
                    gridColumn: "span 4",
                    alignContent: "center",
                    margin: "auto",
                  }}
                >
                  <img
                    className="editProfilePic"
                    src={`http://localhost:5000/assets/${imagePath}`}
                    style={{
                      margin: "auto",
                      borderRadius: "200px",
                      height: "200px",
                      width: "200px",
                    }}
                  ></img>

                  <label
                    htmlFor="file"
                    className="uploadImageLabel"
                    style={{ gridColumn: "span 4", margin: "auto" }}
                  >
                    <input
                      id="file"
                      type="file"
                      multiple
                      style={{
                        position: "fixed",
                        top: "-100em",
                        color: "#5873ca",
                      }}
                      onChange={uploadImage}
                    />
                    <Tooltip title="Upload Files">
                      <IconButton component="span">
                        <AiFillCamera className="uploadImageButton" />
                      </IconButton>
                    </Tooltip>
                  </label>
                </div>

                <TextField
                  label="Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  name="name"
                  error={Boolean(touched.name) && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={Boolean(touched.email) && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  sx={{ gridColumn: "span 2" }}
                />

                <TextField
                  label="Github Token"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.gitHubToken}
                  name="gitHubToken"
                  error={
                    Boolean(touched.gitHubToken) && Boolean(errors.gitHubToken)
                  }
                  helperText={touched.gitHubToken && errors.gitHubToken}
                  sx={{ gridColumn: "span 2" }}
                />

                <TextField
                  label="Github name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.gitHubName}
                  name="gitHubName"
                  error={
                    Boolean(touched.gitHubName) && Boolean(errors.gitHubName)
                  }
                  helperText={touched.gitHubName && errors.gitHubName}
                  sx={{ gridColumn: "span 2" }}
                />

                <TextField
                  label="New Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.newPassword}
                  type="password"
                  name="newPassword"
                  error={
                    Boolean(touched.newPassword) && Boolean(errors.newPassword)
                  }
                  helperText={touched.newPassword && errors.newPassword}
                  sx={{ gridColumn: "span 4" }}
                />

                <p style={{ gridColumn: "span 1", margin: "auto" }}>Skills:</p>
                <Select
                  defaultValue={skills}
                  label="skills"
                  isMulti
                  name="skills"
                  options={options}
                  className="editProfileSkills"
                  classNamePrefix="select"
                  onChange={handleSkillChange}
                  style={{ gridColumn: "span 3", width: "80%" }}
                />
                {skills.length > 0 && (
                  <div
                    className="metricTitle2"
                    style={{
                      gridColumn: "span 4",
                      marginBottom: "20px",
                      marginTop: "-20px",
                    }}
                  >
                    Experience of each skill
                  </div>
                )}

                {skills.length > 0 && (
                  <div
                    style={{
                      marginTop: "-50px",
                      gridColumn: "span 4",
                      width: "100%",
                    }}
                  >
                    <Scrollbars
                      style={{
                        gridColumn: "span 4",
                        width: "100%",
                        height: "90px",
                      }}
                    >
                      <div
                        className="skillIExperienceInputBox"
                        style={{ width: "450px" }}
                      >
                        {skills.map((skill, key) => {
                          return (
                            <div
                              style={{
                                gridColumn: "span 4",
                                marginLeft: "50px",
                                alignItems: "center",
                                paddingBottom: "20px",
                              }}
                            >
                              <p
                                style={{
                                  gridColumn: "span 2",
                                  display: "inline-block",
                                  marginTop: "10px",
                                }}
                              >
                                {skill.value}
                              </p>
                              <TextField
                                className="skillInputField"
                                label="Years of Experience"
                                onBlur={handleBlur}
                                onChange={(e) => handleExperienceChange(e, key)}
                                value={skill.experience}
                                name={key}
                                // error={Boolean(touched.experience) && Boolean(errors.experience)}
                                // helperText={touched.experience && errors.experience}
                                sx={{
                                  gridColumn: "span 2",
                                  display: "inline-block",
                                  right: "100px",
                                  width: "40%",
                                  position: "absolute",
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </Scrollbars>
                  </div>
                )}

                <TextField
                  label="Bio"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.bio}
                  name="bio"
                  error={Boolean(touched.bio) && Boolean(errors.bio)}
                  multiline
                  rows={4}
                  helperText={touched.bio && errors.bio}
                  sx={{ gridColumn: "span 4" }}
                />
              </>
            }
          </Box>

          {/* BUTTONS */}
          <Box>
            <Button
              className="bugAddButton"
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
              }}
            >
              {"Save"}
            </Button>

            <Button
              className="bugCancelButton"
              fullWidth
              onClick={handleClose}
              sx={{
                m: "2rem 0",
                p: "1rem",
              }}
            >
              {"Cancel"}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default EditProfileForm;
