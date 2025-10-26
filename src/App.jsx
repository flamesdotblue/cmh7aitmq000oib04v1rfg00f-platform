import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/40 to-white text-slate-800">
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}
