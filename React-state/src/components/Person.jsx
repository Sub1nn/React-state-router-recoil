import React, { useState } from "react";
import Button from "@mui/material/Button";

const Person = () => {
  // Initial values for name, age, and hobby

  const [person, setPerson] = useState({
    name: "Subin Khatiwada",
    email: "subinkhatiwada@gmail.com",
    hobby: "Coding",
  });

  // Function to handle changes in the input fields
  //   const handleButtonChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };

  const handleButtonClick = () => {
    setPerson({
      name: "Sahil Khatiwada",
      email: "sahilkhatiada@gmail.com",
      hobby: "Reading",
    });
  };

  return (
    <div>
      <h2
        style={{
          color: "#121212",

          textShadow:
            "2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
        }}
      >
        Student Form
      </h2>
      {
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              border: "none",
              borderRadius: "5px",
              background: "light dark",
              width: "30%",
              boxShadow: " 3px 3px 08px 3px rgba(0, 0, 0, 0.5)",
            }}
          >
            <label>Name</label>
            <input
              type="text"
              placeholder="Put your name"
              value={person.name}
              style={{
                margin: "5px",
                background: "pink",
                borderRadius: "5px",
                border: "2px solid blue",
              }}
            />
            <label>Age</label>
            <input
              type="text"
              placeholder="Put your age"
              value={person.email}
              style={{
                margin: "5px",
                background: "pink",
                border: "2px solid blue",
                borderRadius: "5px",
              }}
            />
            <label>Hobby</label>
            <input
              type="text"
              value={person.hobby}
              placeholder="Put your hobby"
              style={{
                margin: "5px",
                background: "pink",
                borderRadius: "5px",
                border: "2px solid blue",
              }}
            />
          </form>
          <Button
            variant="contained"
            onClick={handleButtonClick}
            style={{ margin: "10px" }}
          >
            Click me
          </Button>
        </div>
      }
    </div>
  );
};

export default Person;
