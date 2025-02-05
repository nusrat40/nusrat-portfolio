import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div>
      <motion.div
          className="open-sans space-y-3 flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >

<h2 className="text-2xl font-bold text-[#002d5b] playfair-display  mb-8">
        My Education
      </h2>

      <div className="open-sans space-y-6">
        <div className="">
          <h3 className="text-xl font-medium mb-2">
            BSc in Computer Science and Engineering
          </h3>
          <p className="text-[#ec5b53]">2019-present</p>
          <p className="text-gray-600">
          Mawlana Bhashani Science & Technology University,Tangail
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">
            Higher Secondary Certificate
          </h3>
          <p className="text-[#ec5b53]">2017-2018</p>
          <p className="text-gray-600">
          Holy Cross College,Dhaka
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">
          Secondary School Certificate
          </h3>
          <p className="text-[#ec5b53]">2016-2017</p>
          <p className="text-gray-600">
          Bheramara Govt. Pilot Girls' High School,Kushtia
          </p>
        </div>
      </div>

        </motion.div>
   
    </div>
  );
};

export default Education;
