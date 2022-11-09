import constant from "../../constant.json";
import "./work.css";

function Work() {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My most recent work</span>
      <div className="work_container container grid">
        {constant.projects.map((project, index) =>
          index % 2 === 0 ? (
            <div className="project" key={index}>
              <div className="left">
                <img src={project.image} className="img" alt="project_img" />
              </div>
              <div className="right">
                <a href={project.link} className="heading">
                  {project.title}
                </a>
                <p className="desc">{project.desc}</p>
                <div className="skill_container">
                  {project.skills.map((skill, index) => (
                    <p key={index}>{skill}</p>
                  ))}
                </div>
                <div>
                  <a href={project.github} target="__blank" className="link">
                    <i className="uil uil-github-alt"></i>
                  </a>
                  <a href={project.link} target="__blank" className="link">
                    <i className="uil uil-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="project even" key={index}>
                <div className="left">
                  <a href={project.link} className="heading">
                    {project.title}
                  </a>
                  <p className="desc">{project.desc}</p>
                  <div className="skill_container">
                    {project.skills.map((skill, index) => (
                      <p key={index}>{skill}</p>
                    ))}
                  </div>
                  <div>
                    <a href={project.github} target="__blank" className="link">
                      <i className="uil uil-github-alt"></i>
                    </a>
                    <a href={project.link} target="__blank" className="link">
                      <i className="uil uil-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
                <div className="right">
                  <img src={project.image} className="img" alt="project_img" />
                </div>
              </div>
              <div className="project pMobile" key={index + "mobile"}>
                <div className="left">
                  <img src={project.image} className="img" alt="project_img" />
                </div>
                <div className="right">
                  <a href={project.link} className="heading">
                    {project.title}
                  </a>
                  <p className="desc">{project.desc}</p>
                  <div className="skill_container">
                    {project.skills.map((skill, index) => (
                      <p key={index}>{skill}</p>
                    ))}
                  </div>
                  <div>
                    <a href={project.github} target="__blank" className="link">
                      <i className="uil uil-github-alt"></i>
                    </a>
                    <a href={project.link} target="__blank" className="link">
                      <i className="uil uil-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )
        )}
      </div>
    </section>
  );
}

export default Work;
