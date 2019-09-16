import React from "react";

const Jumbotron = ({ children }) => (
  <div className="jumbotron jumbotron-fluid">
    <div
      style={{
        height: 150,
        clear: "both",
        padding: 10,
        paddingBottom: 20,
        textAlign: "Center"
      }}
    >
      {children}
    </div>
  </div>
);

export default Jumbotron;