import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Blog from "./components/blog/Blog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Blog />
  </React.StrictMode>
);
