import React from "react";
import { Link, useParams } from "react-router-dom";
import projectsData from "../Data/ProjectsData";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const project = projectsData.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <div className="project-details-container">
      {/* Back to Gallery Button */}
      <Link to="/gallery" className="back-button">
        ← Back to Gallery
      </Link>

     
      <div className="project-hero">
        <div className="hero-text">
         <div className="title-description-container">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-description">{project.description}</p>
            <p>
            <strong>Created:</strong> {project.date}
          </p>
            </div>
        </div>
        <img
          src={project.heroImage}
          alt={project.title}
          className="project-image"
        />
      </div>

 
      <div className="additional-photos-container">
        <div className="additional-photos">
          {project.additionalImages &&
            project.additionalImages.map((image, index) => (
              <div key={index} className="additional-photo">
                <img src={image} alt={`Additional ${index + 1}`} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
