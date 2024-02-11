// @ts-nocheck
import React, { useEffect, useState } from "react";
import axios from "axios";

// ? data fetching hooks

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

// ? Using custom hook below as useTodos => data fetching hooks

// const useTodos = () => {
//   const [jpsData, setJpsData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => response.json())
//       .then((data) => {
//         setJpsData(data);
//         setLoading(false);
//       });
//   }, []);

//   return { jpsData, loading };
// };

// const App = () => {
//   const { jpsData, loading } = useTodos();

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <>
//       {jpsData.map((item) => {
//         return <Data key={item.id} item={item} />;
//       })}
//     </>
//   );
// };

// const Data = ({ item }) => {
//   return (
//     <>
//       <p>{JSON.stringify(item)}</p>
//     </>
//   );
// };

// ? Auto Refreshing hook => polling the backend every after 10 seconds

const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const useTodos = (n) => {
  const [jpsData, setJpsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const value = setInterval(() => {
      const randomNumber = getRandomNumber();
      axios
        .get(`https://jsonplaceholder.typicode.com/todos/${randomNumber}`)
        .then((res) => setJpsData([res.data]));
      setLoading(false);
    }, n * 1000);

    const randomNumber = getRandomNumber();
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${randomNumber}`)
      .then((res) => setJpsData([res.data]));
    setLoading(false);

    return () => clearInterval(value); // (cleanup logic) this will clear the previous clock and reset the loading state after the update is complete and whenever the dependency is updated
  }, [n]);

  return { jpsData, loading };
};

const App = () => {
  const { jpsData, loading } = useTodos(5);

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
