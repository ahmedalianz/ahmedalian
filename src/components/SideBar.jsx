import {
  faBriefcase,
  faEnvelope,
  faFile,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function SideBar({ showMenu }) {
  return (
    <div className={`sidebar-container ${showMenu && "menu-show"}`}>
      <div className="profile">
        <img src="/images/profile.jpg" alt="" />
        <h2>Ahmed Alian</h2>
        <div className="contant-icons">
          <a
            href="https://www.facebook.com/ahmed.tiger.300/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmedalian/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/ahmedalianz"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <hr />
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">
              <span>
                <FontAwesomeIcon icon={faUser} className="icon" />
                <span>About</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/resume">
              <span>
                <FontAwesomeIcon icon={faFile} className="icon" />
                <span>Resume</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <span>
                <FontAwesomeIcon icon={faBriefcase} className="icon" />
                <span>My Projects</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <span>
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <span>Contact</span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
