import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Typography variant="h4">Contact Page</Typography>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/");
        }}
      >
        Go to home
      </Button>
    </div>
  );
};

export default ContactPage;
