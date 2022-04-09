import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Project({ project }) {
  return (
    <motion.div layout className="project">
      <img src={project.image} alt={project.name} />
      <div className="controls">
        <Link to={`/projects/${project.id}`}>
          <button>View</button>
        </Link>
        <a href={project.link} target="_blank" rel="noreferrer">
          <button>Visit</button>
        </a>
      </div>
    </motion.div>
  );
}
