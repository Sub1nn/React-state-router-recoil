import React from "react";

const GlowingHeading = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "white",
          textShadow: "0 0 10px #ff4500, 0 0 20px #ff4500, 0 0 30px #ff4500",
          background: "linear-gradient(to right, #ff0000, #ff4500, #ff0000)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        Best Actors and their best Project
      </h1>
    </div>
  );
};

export default GlowingHeading;
