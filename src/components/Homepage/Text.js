import React from 'react'
import '../../pages/style.css';
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Co-Founder ArkTech Organisation.",
          "Majoring Computer Science",
          "Manipal University Jaipur",
          "Eat Sleep Design Repeat",
          "Building Community for Elite People",
          "Majoring Computer Science",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  )
}

export default Text