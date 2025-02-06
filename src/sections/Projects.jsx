import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";



const Projects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
 

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div
      id="projects"
      className="container mx-auto lg:px-16  space-y-12 mb-16 px-10 md:px-4"
    >
      {/* Animated Title and Description */}
      <motion.div
        className="space-y-3 w-4/5 text-center mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-[#002d5b] playfair-display text-center">
          My Projects
        </h2>
        <p className="open-sans">
          This section highlights a collection of my projects. Each project showcases my journey as a
          developer. Click on the "Details" button to dive deeper into the story behind each project and see live demos or source code.
        </p>
      </motion.div>

      {/* Animated Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="card bg-base-100 w-96 shadow-xl "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <figure>
              <img src={project.photo} alt={project.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title ">{project.name}</h2>
              {/* <p>{project.description}</p> */}

              <div className="card-actions">
                <button
                  onClick={() => navigate(`/project-details/${project.id}`)}
                  className="bg-[#ec5b53] text-white p-3 rounded-lg hover:bg-red-600 mt-4 "
                >
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
