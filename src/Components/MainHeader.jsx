import React from "react";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="main-header">
      <div className="main-header-content">
        <h1 className="main-title">Kiana Amini</h1>
        <p className="main-subtitle">Graphic Designer & Visual Storyteller</p>
        <p className="main-description">
          Welcome to my art gallery of creative projects
        </p>
        <button className="enter-button" onClick={() => navigate("/gallery")}>
          Enter Gallery
        </button>
      </div>
    </header>
  );
};

export default MainHeader; 