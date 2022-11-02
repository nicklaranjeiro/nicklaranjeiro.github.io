import React from "react";
const Social = () => {
  return (
    <div className="home_social">
      <a
        href="https://www.linkedin.com/in/nicholas-laranjeiro"
        className="home_social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/nicklaranjeiro"
        className="home_social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.codementor.io/@nicklaranjeiro"
        className="home_social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-arrow"></i>
      </a>
    </div>
  );
};

export default Social;
