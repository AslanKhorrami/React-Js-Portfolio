import React, { useState, useEffect } from "react";

function Footer(props) {
  const [networks, setNetworks] = useState();

  useEffect(() => {
    const fetchNetworks = async () => {
      if (props.sharedBasicInfo) {
        setNetworks(
          props.sharedBasicInfo.social.map(function (network) {
            return (
              <span key={network.name} className="m-4">
                <a href={network.url} target="_blank" rel="noopener noreferrer">
                  <i className={network.class}></i>
                </a>
              </span>
            );
          })
        );
      }
      if (!props.sharedBasicInfo) {
        return null;
      }
    };
    fetchNetworks();
  }, [props.sharedBasicInfo]);

  return (
    <footer>
      <div className="col-md-12">
        <div className="social-links">{networks}</div>

        <div className="copyright py-4 text-center">
          <div className="container">
            <small>
              Copyright &copy;{" "}
              {props.sharedBasicInfo ? props.sharedBasicInfo.copyrigth : "???"}
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
