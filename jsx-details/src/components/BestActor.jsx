import React from "react";

const BestActor = (props) => {
  const { img, actorName, bestProject } = props.actor;
  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        margin: "1rem",
        padding: "5px",
      }}
    >
      <img
        src={img}
        alt={actorName}
        style={{ width: "380px", height: "500px" }}
      />
      <h3>Name:{actorName}</h3>
      <h6>Best Project:{bestProject}</h6>
    </div>
  );
};

export default BestActor;
