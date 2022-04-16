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

export default function SideBar({ showMenu, setShow }) {
  return (
    <div
      className={`sidebar-container ${showMenu && "menu-show"}`}
      onMouseDown={() => setShow(false)}
      style={{ touchAction: "pan-y" }}
    >
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
            <Link to="/" onClick={() => setShow(false)}>
              <span>
                <FontAwesomeIcon icon={faUser} className="icon" />
                <span>About</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/resume" onClick={() => setShow(false)}>
              <span>
                <FontAwesomeIcon icon={faFile} className="icon" />
                <span>Resume</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setShow(false)}>
              <span>
                <FontAwesomeIcon icon={faBriefcase} className="icon" />
                <span>My Projects</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setShow(false)}>
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
