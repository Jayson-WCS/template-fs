import { useState, useEffect } from "react";
import axios from "axios";
import snakeGame from "../../assets/snakeGame.png";
import omnifood from "../../assets/omnifood.png";
import travelAgency from "../../assets/travelAgency.png";
import doruido from "../../assets/doruido.png";
import flipperHome from "../../assets/flipperHome.png";
import hackathonAlibi from "../../assets/hackathonAlibi.png";

export default function CardProject() {
  const projectImages = [omnifood, travelAgency, snakeGame, doruido, hackathonAlibi, flipperHome];
  const [projects, setProjects] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3309/projects")
      .then((response) => {
        setProjects(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

    useEffect(() => {
    axios
      .get("http://localhost:3309/tags")
      .then((response) => {
        setTags(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tags:", error);
      });
  }, []);

  return (
    <div className="flex flex-wrap gap-9 justify-center content-center">
      {projects.map((project, i) => (
        <div
          key={i}
          data-theme="forest"
          className="card max-w-lg w-full sm:w-full md:w-1/2 lg:w-1/2 shadow-xl"
        >
          <figure>
            <img className="object-contain" src={projectImages[i]} alt={project.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title mb-5 text-2xl">{project.title}</h2>
            <p className="leading-7 w-fit">{project.description}</p>
            <div className="card-actions mt-5">
              {tags.map((tag, i) => (
                <div
                  key={i}
                  className={`badge ${(tag.name)} px-5 py-3 font-bold text-lg mb-3`}
                >
                  {tag.name}
                </div>
              ))}
            </div>
            {project.projectURL ? (
              <a
                href={project.projectURL}
                target="_blank"
                rel="noreferrer"
                className="btn font-bold text-xl"
              >
                Visit
              </a>
            ) : (
              <div className="bg-base-100 px-5 py-3 font-bold text-xl text-center h-100">
                Coming Soon
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
