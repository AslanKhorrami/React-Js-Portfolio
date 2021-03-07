import React, { useState, Fragment } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

function Projects(props) {
  const [deps, setDeps] = useState({});
  const [detailsModalShow, setDetailsModalShow] = useState(false);

  const ModalShow = (data) => {
    setDetailsModalShow(true);
    setDeps(data);
  };

  const detailsModalClose = () => setDetailsModalShow(false);

  return (
    <section id="portfolio">
      <div className="col-md-12">
        {props.resumeProjects && props.resumeBasicInfo ? (
          <Fragment>
            <h1
              className="section-title"
              style={{
                color: "black",
                fontFamily: "BTitrBold",
                fontSize: "300%",
              }}
            >
              <span>{props.resumeBasicInfo.section_name.projects}</span>
            </h1>
            <div className="col-md-12 mx-auto">
              <div className="row mx-auto">
                {props.resumeProjects.map((projects) => (
                  <div
                    className="col-sm-12 col-md-6 col-lg-4"
                    key={projects.title}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="portfolio-item d-block">
                      <div className="foto" onClick={() => ModalShow(projects)}>
                        <div>
                          <img
                            src={projects.images[0]}
                            alt="projectImages"
                            height="230"
                            style={{
                              marginBottom: 0,
                              paddingBottom: 0,
                              position: "relative",
                            }}
                          />
                          <span
                            className="project-date"
                            style={{ fontFamily: "BTitrBold" }}
                          >
                            {projects.startDate}
                          </span>
                          <br />
                          <p className="project-title-settings mt-3">
                            {projects.title}
                          </p>
                        </div>
                      </div>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <ProjectDetailsModal
              show={detailsModalShow}
              onHide={detailsModalClose}
              data={deps}
            />
          </Fragment>
        ) : null}
      </div>
    </section>
  );
}

export default Projects;
