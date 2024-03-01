import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement(
    "div",
    {class:"title"},
    React.createElement(
        "h1",
        {},
        React.createElement("h2",{},React.createElement("h3",{},"Hello from react"))
    )
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);