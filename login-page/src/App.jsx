import "./App.css";
import React from "react";
import Form from "./components/Form";

let userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form registered={userIsRegistered} />
    </div>
  );
}

export default App;
