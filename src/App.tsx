// import { useState } from 'react'
import "./App.scss";
import Conditions from "./Components/Conditions/Conditions";
import FAQ from "./Components/FAQ/FAQ";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Conditions />
        <FAQ />
      </main>
    </>
  );
}

export default App;
