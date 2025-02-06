import myPic from "../assets/myPic.png";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import resume from '../assets/nusrat_jahan.pdf';
import { motion } from "framer-motion";


const Home = () => {
  return (
    <div id="home">
      <div className="hero bg-[#fefafa] min-h-screen mb-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <img src={myPic} className="max-w-sm rounded-full bg-[#fefafa]" /> */}
          <motion.img
            src={myPic}
            className="max-w-sm rounded-full bg-[#fefafa]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          />
          <div className="space-y-4">
          <div className="badge badge-outline p-3 bg-gradient-to-br from-red-300 from-0% via-red-100 via- to-blue-400 to- font-semibold">Front-end Developer</div>
            <h1 className="text-5xl font-bold text-[#002d5b] playfair-display ">
              <Typewriter
                words={["Nusrat Jahan Natasa"]}
                loop={1}
                cursor={false} // No cursor for the button text
                typeSpeed={100}
              />
            </h1>
            <p className=" text-xl open-sans ">
              Hi! I'm Nusrat, a passionate front-end developer building
              user-friendly interfaces with modern web technologies.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/nusrat40"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/nusrat-jahan-natasa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={25} />
              </a>
              <a
                href="https://www.facebook.com/nusratjahan.natasa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={25} />
              </a>
             
            </div>
            <a  href={resume} 
              download="nusrat_jahan.pdf">
            <button className=" bg-[#ec5b53] text-white p-3 rounded-lg hover:bg-red-600 mt-4">
              Download Resume
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;
