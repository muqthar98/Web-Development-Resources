import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  backgroundColor: "turquoise",
  padding: "2rem",
  textAlign: "center"
};

customStyle.color = "yellow";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
