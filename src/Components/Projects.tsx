import React from "react";
import Barberland from "./../assets/barberland.png";
import Myportfolio from "./../assets/Images/Project2.png";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <div className="mt-20 bg-zinc-100 p-10">
      <div>
        <Fade direction="left">
          <h1 className="text-center font-bold text-3xl">
            <span className="border-b-2 border-[#4267B2] px-5 py-3">
              MY PROJECTS
            </span>
          </h1>
        </Fade>
        <Fade direction="right">
          <p className=" text-center mt-5 p-5 md:text-center font-medium text-[#555] ">
            {" "}
            Discover my personal and client projects, each with its Design.
          </p>
        </Fade>
      </div>
      <div className="md:flex justify-center items-center">
        <div>
          <Fade direction="left">
            <img src={Barberland} alt="website" />
          </Fade>
        </div>
        <div className="text-center">
          <Fade direction="left">
            <h1 className="font-bold text-2xl">Barberland Website</h1>
            <p className="text-[#555] p-5">
              Barberland is a successful open-source project that I created
              which has been featured on some of the biggest tech sites like
              EliteHost, Hostinger, etc. and used by hundreds of clients around
              Port Elizabeth.
            </p>
          </Fade>
          <Fade direction="up">
            <button className="bg-[#4267B2] py-2 px-4 rounded-md font-semibold text-white">
              Visit Site
            </button>
          </Fade>
        </div>
      </div>

      <div className="md:flex justify-center items-center">
        <div>
          <Fade direction="left">
            <img src={Myportfolio} alt="website" />
          </Fade>
        </div>
        <div className="text-center">
          <Fade direction="left">
            <h1 className="font-bold text-2xl">MF.Tech Website</h1>
            <p className="text-[#555] p-5">
              MF.tech is a successful open-source project that I created
              which has been featured on some of the biggest tech sites like
              EliteHost, Hostinger, etc. and used by hundreds of clients who need my services.
            </p>
          </Fade>
          <Fade direction="up">
            <a href="https://www.mulaudzifhumulani.co.za/" target="blank">
            <button className="bg-[#4267B2] py-2 px-4 rounded-md font-semibold text-white">
              Visit Site
            </button>

            </a>
           
          </Fade>
        </div>
      </div>
      
    </div>
  );
};

export default Projects;
