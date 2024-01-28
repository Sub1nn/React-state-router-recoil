import React from "react";
import "./App.css";
import NavigationBar from "./component/NavigationBar";
import SignupForm from "./component/SignupForm";

const App = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <NavigationBar />
      <SignupForm />
      {/* <Hello /> */}
    </div>
  );
};

export default App;
