import React from "react";
import { Fade } from "react-awesome-reveal";
import Lottie from "react-lottie";
import Aboutspace from './../assets/About.json'
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";




const About = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="">
      <div className="mt-44">
        <Fade direction="right">
        <h1 className="text-center font-bold text-3xl">
          <span className="border-b-2 border-[#4267B2] px-5 py-3">
            ABOUT ME
          </span>
        </h1>
        </Fade>
        <Fade direction="left">
        <p className="text-center mt-5 p-5 md:text-center font-medium text-[#555]">
        Explore my profile for details on my tech skills, expertise.
        </p>
        </Fade>
      </div>
   
     
      <div className="md:flex md:mt-20 ">
  <div className=" md:mt-20  ml-10 md:ml-20 md:flex-grow">
    <Fade direction="left">
    <div>
      <h1 className="font-bold text-2xl">Get To know Me!</h1>
      <p className="mt-10 mr-5">
        I'm A Solution-Oriented{" "}
        <span className="font-semibold text-gray-700">
          Junior Software Developer,
        </span>{" "}
        A Lifelong Learner, <br/>And Dedicated To Trying New Things. I Enjoy
        Development<br/> Because Of The Satisfaction I Get From{" "}
        <span className="font-semibold text-gray-700">
          Overcoming Challenges<br/>
        </span>
        . I Am Motivated By The Opportunity That Software Provides To<br/>
        Positively Impact The Lives Of Individuals And The World As A Whole.
      </p>
      <p className="mt-10 mr-5">
        I'm open to{" "}
        <span className="font-semibold text-gray-700">
          Job opportunities
        </span>{" "}
        where I can contribute, learn and grow. <br/>If you have a good
        opportunity that matches my skills and experience <br/>then don't
        hesitate to{" "}
        <span className="font-semibold text-gray-700">contact </span> me.
      </p>
    </div>
    </Fade>
    <Fade direction="left">
    <Link to="Contact" smooth={true} duration={900} offset={-50} className='hover:text-[#4267B2] rounded-md '>
    <button className="bg-[#4267B2] mt-5 py-3 px-4 text-white font-bold rounded-md">

Contact Me
</button>
                </Link>
    
    </Fade>
  </div> 
  <div className="mt-20  ml-10 md:mr-10 :flex-grow">
    <h1 className="font-bold text-2xl">My Skills</h1>
    <div className="flex flex-wrap ">
      <Fade direction="right">
    <div className="mt-10 bg-gray-300 text-center py-2 max-w-20 pr-2 rounded-md ">
            <h1 className="font-semibold text-zinc-700 pl-2">HTML</h1>
          </div>
          <div className="mt-10 bg-gray-300 text-center py-2 max-w-20 rounded-md ml-3 pr-2 pl-2">
            <h1 className="font-semibold text-zinc-700">CSS</h1>
          </div>

          <div className="mt-10 bg-gray-300 text-center py-2 max-w-22 pr-2 pl-2 rounded-md ml-3  ">
            <h1 className="font-semibold text-zinc-700">JavaScript</h1>
          </div>

          <div className="mt-10 bg-gray-300 text-center py-2 max-w-20 pr-2 pl-2 rounded-md ml-3 whitespace-nowrap  ">
            <h1 className="font-semibold text-zinc-700">Shopify</h1>
          </div>

          <div className="mt-10 bg-gray-300 text-center py-2 max-w-20 pr-2 pl-3 rounded-md ml-3">
            <h1 className="font-semibold text-zinc-700">React</h1>
          </div>

          <div className="mt-10 bg-gray-300 text-center py-2 max-w-20 pr-2 pl-2 rounded-md ml-3">
            <h1 className="font-semibold text-zinc-700">Node.js</h1>
          </div>
         
          <div className="mt-10 bg-gray-300 text-center py-2 max-w-22 pr-2 pl-2 rounded-md ml-3  ">
            <h1 className="font-semibold text-zinc-700">TailwindCSS</h1>
          </div>
         

          </Fade>
        </div>
        
        <Fade direction="right">
        <div className="flex  md:mr-10 ">
          <div className="mt-10 bg-gray-300 text-center py-2 max-w-22 rounded-md pr-2">
            <h1 className="font-semibold text-zinc-700 pl-2">WordPress</h1>
          </div>
          <div className="mt-10 bg-gray-300 text-center py-2 max-w-20 rounded-md ml-3 pr-2 pl-2">
            <h1 className="font-semibold text-zinc-700">GitHub</h1>
          </div>

          <div className="mt-10 bg-gray-300 text-center py-2 max-w-22 pr-2 pl-2 rounded-md ml-2 ">
            <h1 className="font-semibold text-zinc-700">Figma</h1>
          </div>
        
       
          

         

          
        </div>
        </Fade>
        <Fade direction="right">
        <div className="flex  md:mr-10 ">
          <div className="mt-10 bg-gray-300 text-center py-2 max-w-22 rounded-md pr-2">
            <h1 className="font-semibold text-zinc-700 pl-2">TypeScript</h1>
          </div>
          <div className="mt-10 bg-gray-300 text-center py-2 max-w-22 rounded-md ml-3 pr-2 pl-2">
            <h1 className="font-semibold text-zinc-700">Mysql</h1>
          </div>
          </div>
          </Fade>
          
    </div>
  
  </div>

</div>












  );
};

export default About;
