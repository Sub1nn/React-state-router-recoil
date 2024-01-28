import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Typography variant="h4">Contact</Typography>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default Contact;
