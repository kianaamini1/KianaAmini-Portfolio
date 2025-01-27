import React, { useState } from "react";
import { Link } from "react-router-dom";
import projectsData from "../Data/ProjectsData"; 

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("Graphics"); 

  const filteredProjects = projectsData.filter(
    (project) => project.category === activeCategory
  );

  return (
    
    <div>
      <div className="filter-buttons">
        <button
          className={activeCategory === "Graphics" ? "active" : ""}
          onClick={() => setActiveCategory("Graphics")}
        >
          Graphics
        </button>
        <button
          className={activeCategory === "UI/UX" ? "active" : ""}
          onClick={() => setActiveCategory("UI/UX")}
        >
          UX/UI
        </button>
        <button
          className={activeCategory === "Personal" ? "active" : ""}
          onClick={() => setActiveCategory("Personal")}
        >
          Personal
        </button>
      </div>

    
      <div className="gallery-container">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`} 
            className="gallery-item"
          >
            <img src={project.heroImage} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

