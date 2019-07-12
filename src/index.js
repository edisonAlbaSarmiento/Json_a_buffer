import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const obj = {
    sections: [
      {
        title: "Cuidado personal"
      }
    ]
  };

  const buf = Buffer.from(JSON.stringify(obj));
  console.log("Rrsults", buf);
  return (
    <div className="App">
      <h1>Example JSON a Buffer</h1>
      <h2>Open console!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
