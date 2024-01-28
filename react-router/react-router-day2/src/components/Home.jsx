import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Typography variant="h4">Home</Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => navigate("/contact")}>
          Go to Contacts
        </Button>
        <Button variant="contained" onClick={() => navigate("/about")}>
          Go to About
        </Button>
      </Stack>
    </>
  );
};

export default Home;
