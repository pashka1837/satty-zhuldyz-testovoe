// import { useState } from 'react'
import "./App.scss";
import Conditions from "./Components/Conditions/Conditions";
import FAQ from "./Components/FAQ/FAQ";
import Hero from "./Components/Hero/Hero";
import Legal from "./Components/Legal/Legal";
import Navbar from "./Components/Navbar/Navbar";
import Notation from "./Components/Notation/Notation";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Conditions />
        <FAQ />
        <Notation />
        <Legal />
      </main>
    </>
  );
}

export default App;
