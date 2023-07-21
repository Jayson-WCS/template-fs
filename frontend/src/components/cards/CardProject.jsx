import snakeGame from "../../assets/snakeGame.png";
import omnifood from "../../assets/omnifood.png";
import travelAgency from "../../assets/travelAgency.png";
import doruido from "../../assets/doruido.png";
import flipperHome from "../../assets/flipperHome.png";
import hackathonAlibi from "../../assets/hackathonAlibi.png";

export default function CardProject() {
  const projects = ["Omnifood", "Travel Agency", "Snake", "Doruido", "Hackathon Alibi", "Flipper"];
  const projectImages = [omnifood, travelAgency, snakeGame, doruido, hackathonAlibi, flipperHome];
  const projectsTags = [
    ["html", "css", "javascript"],
    ["html", "css", "javascript"],
    ["html", "css", "javascript"],
    ["react", "sass", "node", "mysql"],
    ["react", "sass"],
    ["html", "css", "javascript"],
  ];

  const projectsURL = [
    "https://jayson-wcs.github.io/projet-omnifood/#",
    "https://jayson-wcs.github.io/projet-travel-agency/#",
    "https://jayson-wcs.github.io/projet-snake/"
  ];

  const projectsDescription = [
    "Welcome to Omnifood ! This is a landing page for our premium food delivery service, where we prioritize quality, convenience, and healthy eating.",
    "Welcome to Travel Agency ! This is a landing page for a travel booking planner agency.",
    "Welcome to the Snake Game ! This is a JavaScript implementation of the classic Snake game, where you control a snake to eat food and grow longer without hitting the walls or yourself.",
    "Welcome to Doruido ! This is a personal project based on a passion of mine, Japanimation. It will provide a platform to get cultural news about animes, mangas and Japanese art scene.",
    "Welcome to the Alibi Hackathon! First participation in the Wild Code School Hackathon, this mini project was carried out in teams of 5 in 24 hours. Landing page for an atypical travel agency... Who knows, you might just find what you're looking for!",
    "Welcome to Flipper ! Project based on the visual and interactive reproduction of a social network (Twitter). Group work at Wild Code School."
  ];

  const badgeType = (tag) => {
    switch (tag) {
      case "html":
      case "javascript":
        return "badge-accent";
      case "css":
      case "react":
        return "badge-primary";
      case "sass":
        return "badge-secondary text-black";
      case "node":
        return "bg-green-500 text-black";
      case "mysql":
        return "badge-base-100";
      default:
        return "badge-neutral";
    }
  };

  return (
    <div className="flex flex-wrap gap-9 justify-center content-center">
      {projects.map((project, i) => (
        <div
          key={i}
          data-theme="forest"
          className="card max-w-lg w-full sm:w-full md:w-1/2 lg:w-1/2 shadow-xl"
        >
          <figure>
            <img className="object-contain" src={projectImages[i]} alt={project} />
          </figure>
          <div className="card-body">
            <h2 className="card-title mb-5 text-2xl">{project}</h2>
            <p className="leading-7 w-fit">{projectsDescription[i]}</p>
            <div className="card-actions mt-5">
              {projectsTags[i].map((tag, i) => (
                <div data-theme="cmyk"
                  key={i}
                  className={`badge ${badgeType(tag)} px-5 py-3 font-bold text-lg mb-3`}
                >
                  {tag}
                </div>
              ))}
            </div>
            {projectsURL[i] ? (
              <a data-theme="cmyk" href={projectsURL[i]} target="_blank" rel="noreferrer" className="btn font-bold text-xl">
                Visit
              </a>
            ) : (
              <div className="bg-base-100 px-5 py-3 font-bold text-xl text-center h-100">Coming Soon</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
