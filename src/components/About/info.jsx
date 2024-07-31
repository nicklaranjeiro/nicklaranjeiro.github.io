import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i className="bx bx-award about_icon"></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">5 + Years Experience</span>
      </div>
      <div className="about_box">
        <i className="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">11 + Projects</span>
      </div>
      <div className="about_box">
        <i className="bx bx-chalkboard about_icon"></i>
        <h3 className="about_title">Mentored</h3>
        <span className="about_subtitle">120 + People</span>
      </div>
    </div>
  );
};

export default Info;
