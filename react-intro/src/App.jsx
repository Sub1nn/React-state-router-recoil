import "./App.css";

// const h1Style = {
//   color: "red",
// };

function App() {
  return (
    <div>
      <h1
        style={{
          color: "red",
          fontFamily: "monospace",
          textAlign: "center",
        }}
      >
        MERN STACK
      </h1>
      <ul
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          listStyle: "none",
          fontSize: "2rem",
          border: "1px solid black",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
      </ul>
    </div>
  );
}

export default App;
