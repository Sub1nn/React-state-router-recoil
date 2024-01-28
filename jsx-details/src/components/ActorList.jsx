import React from "react";
import BestActor from "./BestActor";
import { actorList } from "../../data";

const ActorList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {actorList.map((item) => {
        return <BestActor key={item.id} actor={item} />;
      })}
    </div>
  );
};

export default ActorList;
