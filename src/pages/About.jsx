import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Bounce from "react-reveal/Bounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RubberBand from "react-reveal/RubberBand";
import Zoom from "react-reveal/Zoom";

export default function About() {
  return (
    <div className="container">
      <div className="section-head">
        <h2>About</h2>
        <Zoom top cascade>
          <h3>Front End Web Developer ( React Focused )</h3>
          <p style={{ fontStyle: "oblique" }}>
            Determined, Dynamic and creative software engineer Lives in Egypt,
            eager to use JavaScript & it's Frameworks skills to deliver
            programming excellence robust reusable and clean code .
          </p>
        </Zoom>
      </div>
      <Bounce bottom cascade>
        <div className="section-icons">
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
        <div className="cv">
          <RubberBand>
            <a href="./cv.pdf" download>
              Download CV
            </a>
          </RubberBand>
        </div>
      </Bounce>
    </div>
  );
}
