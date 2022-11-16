import React from "react";
import ItemList from "../ItemList/ItemList";
import "./Container.css";

const Container = () => {
  return (
    <div className="main-container">
      <div className="container">
        <ItemList />
      </div>
    </div>
  );
};

export default Container;
