import { useState } from "react";
import "./App.css";

// const h1Style = {
//   color: "red",
// };

function App() {
  // return (
  //   <div>
  //     <h1
  //       style={{
  //         color: "red",
  //         fontFamily: "monospace",
  //         textAlign: "center",
  //       }}
  //     >
  //       MERN STACK
  //     </h1>
  //     <ul
  //       style={{
  //         display: "flex",
  //         justifyContent: "flex-start",
  //         alignItems: "center",
  //         listStyle: "none",
  //         fontSize: "2rem",
  //         border: "1px solid black",
  //         boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  //       }}
  //     >
  //       <li>Home</li>
  //       <li>About</li>
  //       <li>Contact</li>
  //       <li>Blog</li>
  //     </ul>
  //   </div>
  // );

  // the count stored as const still being updated as in each render react creates a new count variable and stores somewhere in the memory. It preserves the count value throughout the render. React does not directly update the count or does not mutate its direct value.

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count : {count}</p>
      <button
        onClick={() => {
          setCount((count) => count + 1);
          setCount((count) => count + 1);
          console.log(count);
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
