import React from "react";
import NavBar from "../Components/NavBar";
import MainHeader from "../Components/MainHeader";
import Gallery from "../Components/Gallery";

const Home = () => {
  return (
    <>
  
      <NavBar />
      <MainHeader />

      <section className="gallery-section">
        <Gallery />
      </section>
    </>
  );
};

export default Home; 
