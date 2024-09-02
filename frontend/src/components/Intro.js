import React, { useState } from "react";

//components
import AboutMe from "./AboutMe";
import Experiences from "./Experiences";
import Recommended from "./Recommended";

const Intro = () => {
  const [displayItem, setDisplayItem] = useState("About Me");
  return (
    <div className="bg-slate-700">
      <nav className="bg-black rounded py-5">
        <ul className="flex flex-row justify-around">
          <li onClick={() => setDisplayItem("About Me")}>About Me</li>
          <li onClick={() => setDisplayItem("Experiences")}>Experiences</li>
          <li onClick={() => setDisplayItem("Recommended")}>Recommended</li>
        </ul>
      </nav>

      <div className="p-10">
        {displayItem === "About Me" && <AboutMe />}
        {displayItem === "Experiences" && <Experiences />}
        {displayItem === "Recommended" && <Recommended />}
      </div>
    </div>
  );
};

export default Intro;
