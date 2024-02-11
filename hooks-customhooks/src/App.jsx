import React, { useEffect, useState } from "react";

// const App = () => {
//   const [jpsData, setJpsData] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => response.json())
//       .then((data) => {
//         setJpsData(data);
//       });
//   }, []);

//   return (
//     <div>
//       <Data jpsData={jpsData} />
//     </div>
//   );
// };

// const Data = ({ jpsData }) => {
//   return (
//     <>
//       {jpsData.map((item) => {
//         return <p key={item.id}>{JSON.stringify(item)}</p>;
//       })}
//     </>
//   );
// };

// ? Using custom hook below as useTodos

const useTodos = () => {
  const [jpsData, setJpsData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setJpsData(data);
      });
  }, []);

  return jpsData;
};

const App = () => {
  const jpsData = useTodos();

  return (
    <div>
      <Data jpsData={jpsData} />
    </div>
  );
};

const Data = ({ jpsData }) => {
  return (
    <>
      {jpsData.map((item) => {
        return <p key={item.id}>{JSON.stringify(item)}</p>;
      })}
    </>
  );
};

export default App;
