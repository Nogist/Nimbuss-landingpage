import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home, About, Contact, Gallery, Service, Project, Blog } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/service" element={<Service />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
}

export default App;
