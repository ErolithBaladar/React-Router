//import { useState } from 'react'
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import "./Blue.jsx";
import "./Red.jsx";
import "./Home.jsx";

function App() {
  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
        <a href="/Red"> Red </a>
          <a href="/Blue"> Blue </a>
          <a href="/Home"> Home </a>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/Blue" element={<h1>Blue</h1>} />
            <Route path="/Red" element={<h1>Red</h1>} />
            <Route path="/Home" element={<h1>Home</h1>} />
          </Routes>
          <Link to="/Blue" relative="path"></Link>
          <Link to="/Red" relative="path"></Link>
          <Link to="/Home" relative="path"></Link>
        </div>
      </div>
    </>
  );
}



export default App;
