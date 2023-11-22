//_______________________________________________________[ IMPORT REACT ]
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//_______________________________________________________[ IMPORT FONTS ]
import WebFont from "webfontloader";

//_______________________________________________________[ IMPORT COMPONENTS ]
import projects from "./projects.js";

//_______________________________________________________[ IMPORT STYLES ]
import reactApp from "../../svg/reactApp.svg";
import viewGrid from "../../svg/viewGrid.svg";
import viewList from "../../svg/viewList.svg";

//_______________________________________________________[ COMPONENT START ]
const MyWork = () => {
  const navigate = useNavigate();
  //_______________________________________________________[ useState ]
  const [activeProject, setActiveProject] = useState("");
  const [isGrid, setIsGrid] = useState(true);
  const [isMobile, setIsMobile] = useState();
  const [description, setDescription] = useState("");

  //_______________________________________________________[ helpers ]
  const onProjectClick = (title, description) => () => {
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
    WebFont.load({
      google: {
        families: ["Fira Mono", "Nunito"],
      },
    });
  }, []);
  useEffect(() => {
    setIsGrid(isMobile);
  }, [isMobile]);
  //____________________________________________________________[ RETURN START ]
  return (
    <>
      <div className={`page ${isMobile ? "mobile" : "desktop"}`}>
        <div className={`my-works section ${isGrid ? "grid" : "list"}`}>
          <div className="section-header">
            {activeProject !== "" && isGrid ? (
              <div className="project-description-big">
                <p>{description}</p>
              </div>
            ) : null}

            <h2 className="section-title">
              ./portfolio/{activeProject.split(" ").join("")}
            </h2>
            <div className="toggle-view-wrapper">
              <img
                className="view-grid"
                src={viewGrid}
                onClick={onToggleViewType}
              ></img>
              <img
                className="view-list"
                src={viewList}
                onClick={onToggleViewType}
              ></img>
            </div>
            <div className="projects-container">
              {projects.map((project) => (
                <div
                  className={`project-wrapper ${
                    project.title === activeProject ? "active" : ""
                  }`}
                  key={project.key}
                  onClick={onProjectClick(project.title, project.description)}
                  onDoubleClick={onDblClick(project.title)}
                >
                  <img className="project-icon" src={reactApp}></img>
                  <div className="project-meta">
                    <h2 className="project-title default-meta">
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
      </div>
    </>
  );
};

export default MyWork;
