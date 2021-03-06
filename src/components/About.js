import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import pythonIcon from "@iconify/icons-logos/python";
import reactIcon from "@iconify/icons-logos/react";
import wordpressIcon from "@iconify/icons-logos/wordpress";
import nodeJs from "@iconify-icons/fa-brands/node-js";

function About(props) {
  const [profilepic, setProfilepic] = useState("");
  const [persainName, setPersianName] = useState(false);
  const [sectionName, setSectionName] = useState("");
  const [hello, setHello] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (props.sharedBasicInfo) {
        await setProfilepic("images/" + props.sharedBasicInfo.image);

        var x = () => {
          if (props.sharedBasicInfo.name === "اصلان خرمی") {
            return true;
          } else {
            return false;
          }
        };

        setPersianName(x);
      }
      if (props.resumeBasicInfo) {
        setSectionName(props.resumeBasicInfo.section_name.about);
        setHello(props.resumeBasicInfo.description_header);
        setAbout(props.resumeBasicInfo.description);
      }
    };
    fetchData();
  }, [
    profilepic,
    persainName,
    sectionName,
    hello,
    about,
    props.resumeBasicInfo,
    props.sharedBasicInfo,
  ]);

  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: "black" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <img
                  height="250px"
                  src={profilepic}
                  alt="Avatar placeholder"
                  style={{ margin: "auto" }}
                />
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-sm-4">
                    <Icon
                      icon={pythonIcon}
                      style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                    />
                  </div>
                  <div className="col-sm-4">
                    <Icon
                      icon={reactIcon}
                      style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                      color="#68A063"
                    />
                  </div>
                  <div className="col-sm-4">
                    <Icon
                      icon={nodeJs}
                      style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                      color="#68A063"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <Icon
                      icon={wordpressIcon}
                      style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                    />
                  </div>
                </div>
              </span>
            </div>
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                    textAlign: persainName ? "right" : "left",
                    direction: persainName ? "rtl" : "ltr",
                    fontFamily: persainName ? "BNazanin" : null,
                  }}
                >
                  <br />
                  {persainName && <span className="wave">{hello} :)</span>}
                  {!persainName && <span className="wave">{hello} :) </span>}
                  <br />
                  <br />
                  {about}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
