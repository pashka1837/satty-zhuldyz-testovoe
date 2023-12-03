// import { useState } from 'react'
import "./App.scss";
import Conditions from "./Components/Conditions/Conditions";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Conditions />
      </main>
    </>
  );
}

export default App;
