import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const ProjectDetail = () => {
  const data = useLoaderData();
  const navigate =useNavigate();

  const { id } = useParams();

  const project = data.find((item) => item.id == id);

  const { name, photo, description, liveLink, githubLink, features } = project;

  return (
    <div className="bg-[#fefafa]  shadow-xl shadow-red-100 m-10 rounded-xl">
      <div className=" p-8 rounded-lg flex flex-col md:flex-row md:gap-4 ">
        <div className="space-y-2">
          <img
            className="rounded-xl h-[300px] md:w-[700px] md:h-[400px] shadow-xl "
            src={photo}
            alt=""
          />
          <h2 className="text-3xl font-bold">{name}</h2>
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="space-y-4 flex flex-col justify-center ">
          <div className="flex gap-2">
            <h2 className="font-bold">Live Link: </h2>
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
            <h2 className="font-bold">Github Link: </h2>
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
                <li key={index} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
         
          <button onClick={()=> navigate('/')} className=" bg-[#ec5b53] text-white p-3 rounded-lg hover:bg-red-600 mt-4">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
