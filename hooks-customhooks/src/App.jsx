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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setJpsData(data);
        setLoading(false);
      });
  }, []);

  return { jpsData, loading };
};

const App = () => {
  const { jpsData, loading } = useTodos();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {jpsData.map((item) => {
        return <Data key={item.id} item={item} />;
      })}
    </>
  );
};

const Data = ({ item }) => {
  return (
    <>
      <p>{JSON.stringify(item)}</p>
    </>
  );
};

export default App;
