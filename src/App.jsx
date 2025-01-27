import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHeader from "./Components/MainHeader";
import GalleryPage from "./Pages/GalleryPage";
import ProjectDetailsPage from "./Pages/ProjectDetails-Page";
import projectsData from "./Data/ProjectsData";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainHeader />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route
        path="/project/:id"
        element={<ProjectDetailsPage projects={projectsData} />}
      />
    </Routes>
  </Router>
);

export default App;


