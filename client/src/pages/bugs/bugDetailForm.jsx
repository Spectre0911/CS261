import React, { Component, useState } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { FaBell } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Select from "react-select";
import { Formik, Form, Field } from "formik";
import {
  Box,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";

import "./index.css";
import Bug from "./bug";
import Dropzone from "react-dropzone";
import * as yup from "yup";

const BugDetailForm = ({ handleClose, bugId, data }) => {
  // useMediaQuery is a hook from Material-UI that returns a boolean value indicating whether the screen size matches the specified media query.
  // This hook is used to determine whether the device is a mobile or a desktop screen.
  const isNonMobile = useMediaQuery("(min-width:600px)");
  // useTheme is a hook from Material-UI that returns the theme object. Here we're destructuring the palette object from the theme.
  const { palette } = useTheme();

   // This schema defines the validation rules for the form fields using the Yup validation library.
  const reportBugSchema = yup.object().shape({
    bugName: yup.string().required("required"),
    bugDate: yup.string().required("required"),
    bugDescription: yup.string().required("required"),
    bugLocation: yup.string().required("required"),
  });

  // This object defines the initial values for the form fields.
  const initialValuesRegister = {
    bugName: data.bugName,
    bugDate: data.bugReportDate,
    bugDescription: data.bugDescription,
    bugLocation: data.bugLocation
  };

  
// This function is called when the form is submitted
  const handleFormSubmit = async (values, onSubmitProps) => {
    console.log(values);
    console.log(priority);
    console.log(severity);
    try {
      const body = { values };
      const response = await fetch("http://localhost:5000/addbug", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  // These options are used to populate the dropdown for selecting bug priority.
  const priorityOptions = [
    { value: "1", label: "High" },
    { value: "2", label: "Med" },
    { value: "3", label: "Low" },
  ];

  // This function maps the string value of priority to an object with the corresponding value and label.
  const translatePriority = (priority) =>{
    if (priority=="High"){
      return { value: "1", label: "High" }
    }else if (priority=="Med"){
      return { value: "2", label: "Med" }
    }else if (priority=="Low"){
      return{ value: "3", label: "Low" }
    }
  }

  // This state variable holds the current priority value for the bug report.
  const [priority, setPriority] = useState(translatePriority(data.bugPriority));

  // This function is called when the priority dropdown value changes.
  const handlePriorityChange = (e) => {
    setPriority(e);
  };


  // These options are used to populate the dropdown for selecting bug severity.
  const severityOptions = [
    { value: "1", label: "High" },
    { value: "2", label: "Med" },
    { value: "3", label: "Low" },
  ];

  const [severity, setSeverity] = useState(translatePriority(data.bugSeverity));

  // This function is called when the severity dropdown value changes.
  const handleSeverityChange = (e) => {
    setSeverity(e);
  };

  const [teamMembers, setTeamMembers] = useState([{ value: "1", label: "jc@gmail.com" }]);

  // This function is called when the team members dropdown value changes.
  const handleTeamMemberChange = (e) => {
    setTeamMembers(e);
  };

  const teamMembersOptions = [
    { value: "1", label: "jc@gmail.com" },
    { value: "2", label: "mk@gmail.com" },
    { value: "3", label: "sh@gmail.com" },
  ];

  const [feature, setFeature] = useState([{ value: "1", label: "login page" }]);
  const featureOptions =[
    { value: "1", label: "login page" },
    { value: "2", label: "logout page" },
  ]

  const handleFeatureChange = (e) => {
    setFeature(e);
  };


  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesRegister}
      validationSchema={reportBugSchema}
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
                <TextField
                  label="Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.bugName}
                  name="bugName"
                  error={Boolean(touched.bugName) && Boolean(errors.bugName)}
                  helperText={touched.bugName && errors.bugName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  label="Date"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.bugDate}
                  name="bugDate"
                  type="date"
                  error={Boolean(touched.bugDate) && Boolean(errors.bugDate)}
                  helperText={touched.bugDate && errors.bugDate}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  label="Description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.bugDescription}
                  name="bugDescription"
                  error={
                    Boolean(touched.bugDescription) &&
                    Boolean(errors.bugDescription)
                  }
                  helperText={touched.bugDescription && errors.bugDescription}
                  sx={{ gridColumn: "span 4" }}
                />

                <TextField
                  label="Location"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.bugLocation}
                  name="bugLocation"
                  error={
                    Boolean(touched.bugLocation) &&
                    Boolean(errors.bugLocation)
                  }
                  helperText={touched.bugLocation && errors.bugLocation}
                  sx={{ gridColumn: "span 4" }}
                />

<p
                style={{
                  gridColumn: "span 1",
                  margin: "auto",
                  paddingRight: "2px",
                }}
                >
                  Team Members:
                </p>
                <Select
                  id="teamMembers"
                  name="teamMembers"
                  options={teamMembersOptions}
                  onChange={handleTeamMemberChange}
                  onBlur={handleBlur}
                  className="defineDependenciesBox"
                  sx={{ gridColumn: "span 3", width: "70%" }}
                  value={teamMembers}
                />

                <p
                style={{
                  gridColumn: "span 1",
                  margin: "auto",
                  paddingRight: "2px",
                }}
                >
                  Feature:
                </p>
                <Select
                  id="feature"
                  name="feature"
                  options={featureOptions}
                  onChange={handleFeatureChange}
                  onBlur={handleBlur}
                  className="defineDependenciesBox"
                  sx={{ gridColumn: "span 3", width: "70%" }}
                  value={feature}
                />

                <p
                  style={{
                    gridColumn: "span 1",
                    margin: "auto",
                    paddingRight: "20px",
                  }}
                >
                  Priority:
                </p>
                <Select
                  id="priority"
                  options={priorityOptions}
                  multi={false}
                  onChange={handlePriorityChange}
                  onBlur={handleBlur}
                  className="defineDependenciesBox"
                  sx={{ gridColumn: "span 3", width: "70%" }}
                  value={priority}
                />

                <p
                  style={{
                    gridColumn: "span 1",
                    margin: "auto",
                    paddingRight: "20px",
                  }}
                >
                  Severity:
                </p>
                <Select
                  id="priority"
                  options={severityOptions}
                  multi={false}
                  onChange={handleSeverityChange}
                  onBlur={handleBlur}
                  className="defineDependenciesBox"
                  sx={{ gridColumn: "span 3", width: "70%" }}
                  value={severity}
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
              fullwidth
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

export default BugDetailForm;
