import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI/ML Developer",
          "Software Developer",
          "MS CS Student @ NYU",
          "Degenerate Gamer",
          "Myself. Always.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 5,
      }}
    />
  );
}

export default Type;
