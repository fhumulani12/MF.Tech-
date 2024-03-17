import React from "react";
import { Fade } from "react-awesome-reveal";
import Lottie from "react-lottie";
import space from "./../assets/space.json";
import { FaLinkedin } from "react-icons/fa";
import scrolldown from "./../assets/Animation - 1710549008709.json";
import Hero from "./../assets/Global.json"

const Homehero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Lottie animation for background */}
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-90 mt-64">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: Hero,
          }}
          isClickToPauseDisabled={true}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-20 ml-4 mr-8 ">
        <div className="md:flex flex-col items-center justify-center">
          <Fade direction="right">
            <h1 className="font-semibold text-[#4267B2] text-2xl md:text-3xl md:justify-center md:text-center font-abc">
              Hi! I'M Mulaudzi Fhumulani A Junior Software developer,
              <br /> Data analyst and UI/UX design.
            </h1>
          </Fade>
          <Fade direction="left">
            <p className="font-normal mt-2 md:text-1xl text-black">
              I am a solution-orientated software developer, I am currently
              seeking graduate programme, internship or junior role.
            </p>
          </Fade>

          <div className="flex gap-10 md:gap-60 mt-5">
            <Fade direction="left">
              <a
                href="https://www.linkedin.com/in/fhumulani-mulaudzi-696888260/"
                target="_blank"
              >
                <button className="bg-[#4267B2] gap-1  text-white rounded-lg px-6 py-3 md:px-3 font-semibold transition duration-300 ease-in-out hover:bg-transparent hover:border border-black flex hover:text-black">
                  <FaLinkedin className="pb" size={21} />
                  Linkedin
                </button>
              </a>
            </Fade>
            <Fade direction="right">
              <a
                href=" https://drive.google.com/file/d/1_pyN9WIEin5RAisqBVKBR9lchf1Qb1B5/view?usp=drive_link "
                target="_blank"
              >
                <button className="border rounded-lg font-semibold border-black px-2 py-3  transition duration-300 ease-in-out hover:bg-[#4267B2] hover:border-none hover:text-white ">
                  Download CV
                </button>
              </a>
            </Fade>
          </div>
          <div className="flex flex-col items-center">
            <Fade direction="left">
              <div className="w-64 ml-7 md:ml-15 md:w-96 ">
                {/* Adjusted margin-top */}
                {/* Ensure correct size adjustment */}
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: space,
                  }}
                />
              </div>
            </Fade>
            <div className="w-5 hidden md:block mb-2 ml-7 md:ml-15 md:w-10">
              {/* Ensure correct size adjustment */}
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: scrolldown,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homehero;