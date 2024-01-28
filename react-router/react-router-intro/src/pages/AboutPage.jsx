import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <Typography variant="h4">About Page</Typography>
      <Button variant="contained" LinkComponent={Link} to="/">
        Go to Home
      </Button>
    </>
  );
};

export default AboutPage;
