import { Button, Stack, Typography } from "@mui/material";
import React from "react";

import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h4">Home</Typography>

      <Stack direction="row" gap="2rem">
        <Button
          color="success"
          variant="contained"
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact Page
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => {
            navigate("/about");
          }}
        >
          About Page
        </Button>
      </Stack>
    </>
  );
};

export default HomePage;
