import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Gallery from "../Components/Gallery";

const projects = [
  { id: 1, title: "Project 1", category: "UI/UX" },
  { id: 2, title: "Project 2", category: "Graphics" },
  { id: 3, title: "Project 3", category: "Personal" },
  { id: 4, title: "Project 4", category: "UI/UX" },
  { id: 5, title: "Project 5", category: "Graphics" },
  { id: 6, title: "Project 6", category: "Personal" },
];

const GalleryPage = () => {
  return (
    <>
      <NavBar />
      <main>
        {/* <header className="gallery-header">
          <h1>My Portfolio</h1>
          <p>Explore my work across different categories</p>
        </header> */}
        <Gallery projects={projects} />
      </main>
      <Footer />
    </>
  );
};

export default GalleryPage;
