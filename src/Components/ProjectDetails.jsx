// import React from "react";
// import { useParams } from "react-router-dom";
// import projectsData from "../Data/ProjectsData";
// import NavBar from "../Components/NavBar";

// const ProjectDetails = () => {
//   const { id } = useParams();
//   const project = projectsData.find((proj) => proj.id === parseInt(id));

//   if (!project) {
//     return <div>Project not found.</div>;
//   }

//   return (
//     <>
//       {/* Add NavBar here */}
//       <NavBar />
//       <main className="project-details">
//         {/* Hero Section */}
//         <div className="hero-section">
//           <img src={project.heroImage} alt={project.title} className="hero-image" />
//           <h1>{project.title}</h1>
//           <p className="role">{project.role}</p>
//         </div>

       
//         <section className="overview">
//           <h2>Overview</h2>
//           <p><strong>Problem:</strong> {project.problem}</p>
//           <p><strong>Goal:</strong> {project.goal}</p>
//         </section>

       
//         <section className="process">
//           <h2>Process</h2>
//           {project.process.map((step, index) => (
//             <div key={index} className="process-step">
//               <h3>{step.heading}</h3>
//               <p>{step.details}</p>
//               <div className="images">
//                 {step.images.map((image, idx) => (
//                   <img key={idx} src={image} alt={`${step.heading} ${idx}`} />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </section>

//         {/* Results Section */}
//         <section className="results">
//           <h2>Results</h2>
//           <p>{project.results}</p>
//         </section>
//       </main>
//     </>
//   );
// };

// export default ProjectDetails;
