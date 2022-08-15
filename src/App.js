import React from "react";
import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Apply from "./components/Apply/Apply";
import Box from "./components/Box/Box";
import Guide from "./components/Guide/Guide";
import Home from "./components/Home/Home";
import Kit from "./components/Kit/Kit";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <Register />
        <Kit />
        <Box />
        <Apply />
        <Guide />
      </main>
      <About />
    </div>
  );
}

export default App;
