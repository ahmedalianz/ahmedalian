import Project from "components/Project";
import SearchButton from "components/SearchButton";
import Zoom from "react-reveal/Zoom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects({ projects }) {
  const buttons = ["All", "React", "Angular", "MERN", "Landing Page"];
  const [viewdProjects, setViewdProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("All");
  const filterHandler = (button) => {
    if (button === "All") {
      setViewdProjects(projects);
      setActiveFilter("All");
    } else {
      const filteredProjects = projects.filter((project) =>
        project.filter.includes(button)
      );
      setViewdProjects(filteredProjects);
      setActiveFilter(button);
    }
  };
  return (
    <div className="container">
      <div className="section-head">
        <h2>My Projects</h2>
      </div>
      <div className="filter-head">
        {buttons.map((button, i) => (
          <SearchButton
            key={i}
            button={button}
            searchBy={filterHandler}
            activeFilter={activeFilter}
          />
        ))}
      </div>
      <Zoom top>
        <motion.div layout className="projects">
          {viewdProjects.map((project, i) => (
            <Project key={i} project={project} />
          ))}
        </motion.div>
      </Zoom>
    </div>
  );
}
