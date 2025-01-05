import React from "react";
import Skills from "../components/Skills";
import Education from "../components/Education";

const Resume = () => {
  return (
    <div id="resume" className="container mx-auto md:px-20 bg-[#fefafa] space-y-12 mb-16 p-8">
      <h2 className="text-4xl font-bold text-[#002d5b] playfair-display text-center mb-12">
        A Summary of My Resume
      </h2>

      <Skills></Skills>

      <Education></Education>

    </div>
  );
};

export default Resume;
