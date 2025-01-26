import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHeader from "./Components/MainHeader";
import GalleryPage from "./Pages/GalleryPage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainHeader />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  </Router>
);

export default App;
