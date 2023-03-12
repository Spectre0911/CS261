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

const BugAssignForm = ({ handleClose, bugId }) => {
  // Check if the device width is greater than or equal to 600px 
  const isNonMobile = useMediaQuery("(min-width:600px)");
  // Get the theme object for colour palette
  const { palette } = useTheme();

  // Define the validation schema for the form
  const reportBugSchema = yup.object().shape({
    memberName: yup.string(),
    
  });

// Define the initial values for the form
  const initialValuesRegister = {
    memberName: "",
  };

  // Define the function to handle the form submission
  const handleFormSubmit = async (values, onSubmitProps) => {
    console.log(member);
    try {
      // Send a POST request to the server with the form data
      const body = { values };
      const response = await fetch("http://localhost:5000/addbug", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error(err.message);
    }
    handleClose();
  };



// Define the options for the select component
  const memberOptions = [
    { value: "1", label: "Josh" },
    { value: "2", label: "Morgan" },
    { value: "3", label: "Hannah" },
  ];

  // Set the state for the select component
  const [member, setMember] = useState([]);

  // Handle changes to selected member
  const handleMemberChange = (e) => {
    setMember(e);
  };




  return (
    // render the form using Formik
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
                <p
                  style={{
                    gridColumn: "span 1",
                    margin: "auto",
                    paddingRight: "20px",
                  }}
                >
                  Assign to:
                </p>
                <Select
                  id="priority"
                  options={memberOptions}
                  multi={false}
                  onChange={handleMemberChange}
                  onBlur={handleBlur}
                  className="defineDependenciesBox"
                  sx={{ gridColumn: "span 3", width: "70%" }}
                  value={member}
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
              {"Assign Task"}
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

export default BugAssignForm;
