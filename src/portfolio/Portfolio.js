//_______________________________________________________[ IMPORT REACT ]
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//_______________________________________________________[ IMPORT FONTS ]
import WebFont from "webfontloader";

//_______________________________________________________[ IMPORT COMPONENTS ]
import Footer from "./Footer.js";
import Header from "./Header.js";

import projects from "./projects.js";

//_______________________________________________________[ IMPORT STYLES ]
import reactApp from "../svg/reactApp.svg";
import viewGrid from "../svg/viewGrid.svg";
import viewList from "../svg/viewList.svg";
import "../portfolio/Portfolio.css";

//_______________________________________________________[ COMPONENT START ]
const Portfolio = () => {
  const navigate = useNavigate();
  //_______________________________________________________[ useState ]
  const [activeProject, setActiveProject] = useState("");
  const [isGrid, setIsGrid] = useState(true);
  const [isMobile, setIsMobile] = useState();
  const [description, setDescription] = useState("");

  //_______________________________________________________[ helpers ]
  const onProjectClick = (title, description) => {
    setActiveProject(title);
    setDescription(description);
  };
  const onToggleViewType = () => {
    setIsGrid(!isGrid);
  };
  const onDblClick = (title) => () => {
    navigate(`/${title.split(" ").join("")}`);
  };

  //_______________________________________________________[ useEffect ]
  useEffect(() => {
    setIsMobile(window.innerWidth < 1200);
    const onResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  useEffect(() => {
    setIsGrid(isMobile);
  }, [isMobile]);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Fira Mono", "Nunito"],
      },
    });
  }, []);
  //____________________________________________________________[ RETURN START ]
  return (
    <>
      <Header />

      <div className="page">
        <div className="my-works section">
          <div className="section-header">
            {activeProject !== "" && isGrid ? (
              <div className="project-description-big">
                <p>{description}</p>
              </div>
            ) : null}

            <h2 className="section-title">
              ./portfolio/{activeProject.split(" ").join("")}
            </h2>
            <div
              className="toggle-view-wrapper"
              style={{ display: isMobile ? "none" : "inline-block" }}
            >
              <img
                className="view-grid"
                src={viewGrid}
                onClick={onToggleViewType}
                style={{
                  display: isGrid ? "none" : "inline",
                }}
              ></img>
              <img
                className="view-list"
                src={viewList}
                onClick={onToggleViewType}
                style={{
                  display: !isGrid ? "none" : "inline",
                }}
              ></img>
            </div>
            <div className="projects-container">
              {projects.map((project) => (
                <div
                  className={`project-wrapper pW${project.key}`}
                  id={project.key}
                  key={project.key}
                  onClick={() =>
                    onProjectClick(project.title, project.description)
                  }
                  onDoubleClick={onDblClick(project.title)}
                  style={{
                    width: isGrid ? "46%" : "100%",
                    marginRight: isGrid ? "2%" : "0",
                    borderColor:
                      activeProject === project.title ? "#a5630d" : "#a5630d00",
                  }}
                >
                  <img className="project-icon" src={reactApp}></img>
                  <div className="project-meta">
                    <h2
                      className="project-title default-meta"
                      style={{
                        marginTop:
                          activeProject === project.title && !isGrid
                            ? "30px"
                            : "0",
                        borderBottom:
                          activeProject === project.title
                            ? "2px solid #a5630d"
                            : "0px",
                      }}
                    >
                      {project.title}
                    </h2>
                    <p className="project-language default-meta">
                      FileType: {project.language}
                    </p>
                    {!isGrid && activeProject === project.title ? (
                      <div className="project-description-container">
                        <p className="project-description default-meta">
                          {project.description}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
