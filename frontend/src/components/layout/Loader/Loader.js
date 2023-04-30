import React from "react";
import "./Loader.css";
import loader from './Loader.gif'
const Loader = () => {
  return (
    <div className="loading">
      <img src={loader} alt="loader" />
    </div>
  );
};

export default Loader;
