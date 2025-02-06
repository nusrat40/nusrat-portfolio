import { motion } from "framer-motion";
import myPic from '../assets/pic.jpg';

const AboutMe = () => {
  return (
    <div id="about" className="container mx-auto md:px-20 mb-16 space-y-7">
      <motion.h2 
        className="text-4xl font-bold text-[#002d5b] playfair-display text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-center text-xl w-2/3 mx-auto open-sans"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        I'm Nusrat Jahan, a Computer Science student. Currently, I am pursuing
        my academic journey at Mawlana Bhashani Science and Technology University.
      </motion.p>

      <div className="lg:flex gap-6 space-y-4 md:space-y-0 p-4 md:p-0">
        {/* Left Text Content */}
        <motion.div
          className="open-sans space-y-3 flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            My journey into development began after I was admitted to
            university, where I discovered my love for programming. Initially, I
            was fascinated by the logic and structure behind coding, and over
            time, it became a part of my daily life. Today, I specialize in
            building dynamic and user-friendly web applications using modern
            tools like React.
          </p>
          <p>
            I love solving complex problems and translating them into elegant,
            simple solutions through code. My favorite tasks include building
            responsive and interactive user interfaces that are both functional
            and aesthetically pleasing. I’m always looking for ways to improve
            my skills and keep up with the latest trends in web development.
          </p>
          <p>
            Outside of coding, I have a deep love for music and movies. Whether
            it's listening to my favorite tunes or enjoying the latest series
            and films, these activities help me unwind and spark creativity.
          </p>
          <p>
            My goal is to continue growing as a developer and collaborate with
            like-minded individuals to build meaningful and impactful projects.
            I believe that every line of code can make a difference, and I'm
            excited to contribute to the tech community.
          </p>
        </motion.div>

        {/* Right Image Content */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="hidden lg:flex w-[400px] h-[450px] rounded-xl bg-[#ec5b53]"></div>
          <img 
            className="lg:absolute top-3 right-4 w-[400px] h-[450px] rounded-xl" 
            src={myPic} 
            alt="Profile" 
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
