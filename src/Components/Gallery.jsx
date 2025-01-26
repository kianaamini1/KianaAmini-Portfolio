import React from "react";

const Gallery = ({ projects }) => {
  return (
    <div className="gallery-container">
      {projects.map((project) => (
        <div key={project.id} className="gallery-item">
          <div className="project-box">{project.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
