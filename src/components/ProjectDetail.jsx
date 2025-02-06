import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectDetail = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const { id } = useParams();

  const project = data.find((item) => item.id == id);

  const { name, photo, description, liveLink, githubLink, features } = project;

  return (
    <motion.div
      className="bg-[#fefafa] shadow-xl shadow-red-100 m-10 rounded-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="p-8 rounded-lg flex flex-col md:flex-row md:gap-4">
        {/* Image with Motion Effect */}
        <motion.div
          className="space-y-2"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            className="rounded-xl h-[300px] md:w-[700px] md:h-[400px] shadow-xl"
            src={photo}
            alt={name}
            whileHover={{ scale: 1.05 }}
          />
          <motion.h2
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {name}
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Project Details */}
        <motion.div
          className="space-y-4 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex gap-2">
            <h2 className="font-bold">Live Link:</h2>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {liveLink}
            </a>
          </div>
          <div className="flex gap-2">
            <h2 className="font-bold">Github Link:</h2>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {githubLink}
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-bold mt-5">Features:</h2>
            <ul className="list-disc list-inside mt-2 space-y-2">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * index }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Animated Button */}
          <motion.button
            onClick={() => navigate("/")}
            className="bg-[#ec5b53] text-white p-3 rounded-lg hover:bg-red-600 mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Home
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
