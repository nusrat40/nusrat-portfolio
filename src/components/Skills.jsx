import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const [Skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#002d5b] playfair-display text-center mb-12">
        Skills
      </h2>

      <Marquee pauseOnHover={true} speed={100} className="space-x-10">
                

                {
                    Skills.map(skill => 
                        <div key={skill.id} className="ml-20 space-y-2">
                            <img src={skill.image} className="w-50px]" alt="" />
                            <p className="font-semibold">{skill.name}</p>

                        
                        </div>
                    )
                }
            </Marquee>

    </div>
  );
};

export default Skills;
