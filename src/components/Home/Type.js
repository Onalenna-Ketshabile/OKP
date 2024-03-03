import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "IT Intern at Atos" ,
          "A Network Support Engineer at Cell C",
          "Cybersecurity Honors Student",
          "Aspiring Cybersecurity Professional",
          "Full-Stack Developer (Freelancer)",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
