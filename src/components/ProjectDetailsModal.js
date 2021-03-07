import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

function ProjectDetailsModal(props) {
  const [technologies, setTechnologies] = useState();
  const [images, setImages] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [url, setUrl] = useState();

  useEffect(() => {
    const fetchModal = () => {
      if (props.data) {
        setTechnologies(props.data.technologies);
        setImages(props.data.images);
        setTitle(props.data.title);
        setDescription(props.data.description);
        setUrl(props.data.url);
      }
    };
    fetchModal();
  }, [images, props.data, technologies]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-inside"
    >
      <span onClick={props.onHide} className="modal-close">
        <i className="fas fa-times fa-3x close-icon"></i>
      </span>
      <div className="col-md-12">
        <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
          <div className="slider-tab">
            <span
              className="iconify slider-iconfiy"
              data-icon="emojione:red-circle"
              data-inline="false"
              style={{ marginLeft: "5px" }}
            ></span>{" "}
            &nbsp;{" "}
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:yellow-circle"
              data-inline="false"
            ></span>{" "}
            &nbsp;{" "}
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:green-circle"
              data-inline="false"
            ></span>
          </div>
          <AwesomeSlider
            cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
            animation="scaleOutAnimation"
            className="slider-image"
          >
            {images
              ? images.map((elem, i) => <div key={i} data-src={elem} />)
              : null}
          </AwesomeSlider>
        </div>
        <div className="col-md-10 mx-auto">
          <h3 style={{ padding: "5px 5px 0 5px" }}>
            {title}
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-href"
              >
                <i
                  className="fas fa-external-link-alt"
                  style={{ marginLeft: "10px" }}
                ></i>
              </a>
            ) : null}
          </h3>
          <p className="modal-description">{description}</p>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto">
              {technologies
                ? technologies.map((icons, i) => (
                    <li className="list-inline-item mx-3" key={i}>
                      <span>
                        <div className="text-center">
                          <i
                            className={icons.class}
                            style={{ fontSize: "300%" }}
                          >
                            <p
                              className="text-center"
                              style={{ fontSize: "30%" }}
                            >
                              {icons.name}
                            </p>
                          </i>
                        </div>
                      </span>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ProjectDetailsModal;
