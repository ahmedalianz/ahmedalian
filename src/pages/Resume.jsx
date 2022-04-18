import { faAngleRight, faStop } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Zoom from "react-reveal/Zoom";

export default function Resume() {
  const skills = [
    { name: "HTML", image: "/images/html.webp" },
    { name: "CSS", image: "/images/css.webp" },
    { name: "JavaScript", image: "/images/js.webp" },
    { name: "SCSS", image: "/images/scss.png" },
    { name: "React", image: "/images/react.webp" },
    { name: "Redux Toolkit", image: "/images/redux.webp" },
    { name: "Next Js", image: "/images/next.webp" },
    { name: "Material UI", image: "/images/material.webp" },
    { name: "Core UI", image: "/images/coreui.png" },
    { name: "Bootstrap", image: "/images/bootstrap.png" },
    { name: "Git", image: "/images/git.webp" },
    { name: "Node Js", image: "/images/node.webp" },
    { name: "Express Js", image: "/images/express.png" },
    { name: "Mongo DB", image: "/images/mongo.png" },
    { name: "Angular", image: "/images/angular.webp" },
  ];
  const education = [
    {
      name: "National Telecommunication Institute (NTI)",
      time: "Nov 2021 - Dec 2021",
    },
    {
      name: "Shoubra Faculty of Engineering Banha University",
      time: "Sep 2012 - June 2016",
    },
  ];
  const experiences = [
    {
      title: "Front End Developer",
      company: "Websquids LLC",
      time: "Dec 2021 - Present",
    },
  ];
  return (
    <div className="container">
      <div className="section-head">
        <h2>Resume</h2>
      </div>
      <Zoom cascade>
        <div className="resume-container">
          <div className="section">
            <h2 className="title">
              <FontAwesomeIcon icon={faAngleRight} />
              <span>Skills & Technologies</span>
            </h2>
            <div className="skills-box">
              {skills.map((skill, i) => (
                <div className="skill" key={i}>
                  <img src={skill.image} alt="" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="section">
            <h2 className="title">
              <FontAwesomeIcon icon={faAngleRight} />
              <span>Experience</span>
            </h2>
            <div className="experiences-box">
              {experiences.map(({ title, company, time, desc }, i) => (
                <div className="experience" key={i}>
                  <div className="title">
                    <FontAwesomeIcon icon={faStop} className="icon" />
                    {title}
                  </div>
                  <div className="time">{company}</div>
                  <div className="time">{time}</div>
                  <ul className="desc">
                    <li>
                      Created new features and functionalities used in the
                      company's websites.
                    </li>
                    <li>
                      Collaborated with team members to design, build and
                      improve our sites and applications.
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="section">
            <h2 className="title">
              <FontAwesomeIcon icon={faAngleRight} />
              <span>Education</span>
              <div className="education-box">
                {education.map(({ name, time }, i) => (
                  <div className="education" key={i}>
                    <div className="title">
                      <FontAwesomeIcon icon={faStop} className="icon" />
                      {name}
                    </div>
                    <div className="time">{time}</div>
                  </div>
                ))}
              </div>
            </h2>
          </div>
        </div>
      </Zoom>
    </div>
  );
}
