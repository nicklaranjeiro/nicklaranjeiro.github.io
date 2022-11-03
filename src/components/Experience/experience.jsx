import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section className="experience section">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="experience_container container">
        <div className="experience_sections">
          <div className="experience_content experience_content-active">
            <div className="experience_data">
              <div>
                <h3 className="experience_title">Full Stack Developer</h3>
                <span className="experience_subtitle">Dealerpull</span>
                <div className="experience_calendar">
                  <i className="uil uil-calendar-alt"></i> Mar 2021 - Present
                </div>
              </div>
              <div>
                <span className="experience_rounder"></span>
                <span className="experience_line"></span>
              </div>
            </div>

            <div className="experience_data">
              <div></div>
              <div>
                <span className="experience_rounder"></span>
                <span className="experience_line"></span>
              </div>
              <div>
                <h3 className="experience_title">Freelance Developer</h3>
                <span className="experience_subtitle">Codementor</span>
                <div className="experience_calendar">
                  <i className="uil uil-calendar-alt"></i> Mar 2020 - Mar 2021
                </div>
              </div>
            </div>

            <div className="experience_data">
              <div>
                <h3 className="experience_title">Front End Developer Intern</h3>
                <span className="experience_subtitle">ComQi</span>
                <div className="experience_calendar">
                  <i className="uil uil-calendar-alt"></i> May 2019 - Aug 2019
                </div>
              </div>
              <div>
                <span className="experience_rounder"></span>
                <span className="experience_line"></span>
              </div>
            </div>

            <div className="experience_data">
              <div></div>
              <div>
                <span className="experience_rounder"></span>
                <span className="experience_line"></span>
              </div>
              <div>
                <h3 className="experience_title">
                  Full Stack Developer Intern
                </h3>
                <span className="experience_subtitle">PHRI</span>
                <div className="experience_calendar">
                  <i className="uil uil-calendar-alt"></i> Sep 2018 - Jan 2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
