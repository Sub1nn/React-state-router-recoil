import React, { useState } from "react";

const ActorList = () => {
  const [actorList, setActorList] = useState([
    {
      id: 1,
      name: "Rajesh Hamal",
    },
    {
      id: 2,
      name: "Bipin Karki",
    },
    {
      id: 3,
      name: "Anamol KC",
    },
    {
      id: 4,
      name: "Dilip Rayamajhi",
    },
    {
      id: 5,
      name: "Pradip Khadka",
    },
  ]);

  const removeActor = (id) => {
    const newActorList = actorList.filter((item) => {
      return item.id !== id;
    });
    setActorList(newActorList);
  };

  const clearActor = () => {
    setActorList([]);
  };

  return (
    <div>
      <h1>Actor List</h1>
      {actorList.map((item) => {
        const { id, name } = item;
        // if you do not use the above destructing you can do return <h3 key= {item.id}>{item.name}</h3>
        return (
          <div
            key={id}
            style={{ display: "flex", padding: "5px", alignItems: "center" }}
          >
            <h3>{name}</h3>
            <button onClick={() => removeActor(id)}>remove</button>
          </div>
        );
      })}
      <button onClick={clearActor}>Clear all</button>
    </div>
  );
};

export default ActorList;
