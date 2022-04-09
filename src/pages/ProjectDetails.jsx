import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Slider from "react-slick";

export default function ProjectDetails({ projects }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  let settings = {
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    let project = projects.find((project) => project.id === parseInt(id));
    if (project) {
      setProject(project);
    } else {
      navigate("/projects");
    }
  }, [id, projects]);
  return (
    <div className="container">
      {project && (
        <>
          <div className="section-head">
            <h2>{project.name}</h2>
          </div>
          <div className="swiper">
            <Slider {...settings}>
              {project.images.map((image) => (
                <div className="img-container">
                  <img src={image} alt="" />
                </div>
              ))}
            </Slider>
          </div>
          <h2>About The Project</h2>
          <div className="project-desc">{project.desc}</div>
          <div className="project-link">
            <a href={project.link}>View This Project</a>
          </div>
        </>
      )}
    </div>
  );
}
