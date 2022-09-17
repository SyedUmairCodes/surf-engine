import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";
import { Routes } from "./components/Routes/Routes";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
