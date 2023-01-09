import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="apc">App Component </h1>
      <User data={{ name: "shan khan ", age: 23 }} />
      <User  data={{ name: "rab nawaz ", age: 4 }}/>
      <User  data={{ name: "shah nawaz ", age: 56 }}/>
    </div>
  );
}

export default App;