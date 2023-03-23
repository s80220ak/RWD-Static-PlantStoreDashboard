import React from "react";
import "./app.css";
import Body from "./Components/body/Body";
import Sidebar from "./Components/sidebar/Sidebar";

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Body />
    </div>
  );
};

export default App;
