import { Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const SignupForm = () => {
  const [user, setUser] = useState({
    firstName: "Subin",
    lastName: "Khatiwada",
    email: "subinkhatiwada@gmail.com",
  });

  const handleButtonClick = () => {
    setUser({
      firstName: "Sahil",
      lastName: "Khatiwada",
      email: "sahilkhatiada@gmail.com",
    });
  };

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("First name is required"),
        lastName: Yup.string()
          .max(40, "Must be 40 characters or less")
          .required("Last name is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, getFieldProps, touched, errors }) => (
        <form
          onSubmit={handleSubmit}
          style={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "200px",
            maxWidth: "600px",
            width: "100%",
            backgroundColor: "#d4e7ff",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        >
          <Typography
            variant="h5"
            fontSize="30px"
            fontFamily="Roboto"
            fontWeight="bold"
            style={{
              textShadow:
                "2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
            }}
          >
            Register User
          </Typography>

          <TextField
            id="outlined-basic"
            label={user.firstName}
            variant="outlined"
            style={{ width: "100%", backgroundColor: "#a6c8ff" }}
            {...getFieldProps("firstName")}
          />
          {touched.firstName && errors.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <TextField
            id="outlined-basic"
            label={user.lastName}
            variant="outlined"
            style={{ width: "100%", backgroundColor: "#a6c8ff" }}
            {...getFieldProps("lastName")}
          />
          {touched.lastName && errors.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <TextField
            id="outlined-basic"
            label={user.email}
            variant="outlined"
            style={{ width: "100%", backgroundColor: "#a6c8ff" }}
            {...getFieldProps("email")}
          />
          {touched.email && errors.email ? <div>{errors.email}</div> : null}

          <Button
            onClick={handleButtonClick}
            variant="contained"
            sx={{ background: "white", color: "black", width: "100%" }}
          >
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default SignupForm;
