import React from "react";
import { Fade } from "react-awesome-reveal";
import Lottie from 'react-lottie';
import space from './../assets/space.json';
import { FaLinkedin } from "react-icons/fa";


const Homehero = () => {
  return (
    <div className="mt-20 ml-4 mr-8 ">
      <div className="md:flex flex-col items-center justify-center">
        <Fade direction="right">
          <h1 className="font-semibold text-[#4267B2] text-2xl md:text-3xl md:justify-center md:text-center font-abc">
            Hi! I'M Mulaudzi Fhumulani A Junior Software developer,<br/> Data analyst and UI/UX design.
          </h1>
        </Fade>
        <Fade direction="left">
          <p className="font-normal mt-2 md:text-1xl text-black">
            I am a solution-orientated software developer, I am currently seeking
            graduate programme, intership or junior role.
          </p>
        </Fade>
      
        <div className="flex gap-10 md:gap-60 mt-10">
          <Fade direction="left">
        
        <a href="https://www.linkedin.com/in/fhumulani-mulaudzi-696888260/"   target="_blank" >  
        <button className="bg-[#4267B2] gap-1  text-white rounded-lg px-6 py-3 md:px-3 font-semibold transition duration-300 ease-in-out hover:bg-transparent hover:border border-black flex hover:text-black">
              
        <FaLinkedin className="pb" size={21} />
              Linkedin
            </button>
        
           </a>
          </Fade>
          <Fade direction="right">
            <a href=" https://drive.google.com/file/d/1C2KlviEi6YCmtSI1WxhcFudLnIY5nr6Q/view?usp=sharing "  target="_blank"   >
            <button className="border rounded-lg font-semibold border-black px-2 py-3  transition duration-300 ease-in-out hover:bg-[#4267B2] hover:border-none hover:text-white ">
              Download CV
            </button>
            </a>
           
          </Fade>
        </div>
        <Fade direction="left">
        <div className="w-64  ml-7 md:ml-15 md:w-96">
          {/* Ensure correct size adjustment */}
          <Lottie options={{ loop: true, autoplay: true, animationData: space }} />
        </div>
        </Fade>

      </div>
    </div>
  );
};

export default Homehero;