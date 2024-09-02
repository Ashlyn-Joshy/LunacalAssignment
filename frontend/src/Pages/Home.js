import React from "react";

//components
import Intro from "../components/Intro";

const Home = () => {
  return (
    <div className="flex flex-row bg-slate-800 text-white p-10">
      <div className="hidden md:block w-1/2"></div>
      <div className="w-full md:w-1/2">
        <Intro />
      </div>
    </div>
  );
};

export default Home;
