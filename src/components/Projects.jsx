import Portfolio from "../assets/Portfolio.png";
import ai_trip_photo from "../assets/AiTripPlanner.png";
import URL_SHORTENER from "../assets/Url_shortener.png";
import Cards from "./Cards";

const Projects = () => {
  const projectJson = [
    {
      title: "Portfolio",
      desc: "Welcome to my portfolio, where creativity meets precision and passion drives results. Here, you'll find about me and curated selection of my work across various projects.",
      image: Portfolio,
      github: "https://github.com/Dibyendupanja?tab=repositories",
    },

    {
      title: "AITripPlanner ",
      desc: "AITripPlanner is a smart travel planner to create personalized trips, and live route planning for a better travel experience.",
      image: ai_trip_photo,
      github: "https://github.com/Dibyendupanja/AITrip_Planner.git",
    },
    {
      title: "URL_SHORTENER",
      desc: "A full-featured URL shortening service that allows users to generate short links for long URLs with link analytics.",
      image:URL_SHORTENER,
      github: "https://github.com/Dibyendupanja/URL_SHORTENER-.git",
    },
  
  ];

  return (
    <section id="projects" className="relative bg-gray-700 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson.map((items) => {
            return <Cards item={items} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
