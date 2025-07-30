import "./../index.css";



const Skills = () => {
    return (
      <section className="skills section" id="skills">
        <span className="section__subtitle">My abilities</span>
        <h2 className="section__title">My Experience</h2>

        <div className="skills__container container grid">
          <div className="skills__content">
            <h3 className="skills__title">
              -Languages-/-Frameworks-/-Technologies-
            </h3>

            <div className="skills__box">
              <div className="skills__group">
                <div className="skills__data">
                  <i className="bx bxl-html5 skill-icon"></i>
                  <div>
                    <h3 className="skills__name">HTML</h3>
                    {/* <span className="skills__level">Intermediate</span> */}
                  </div>
                </div>

                <div className="skills__data">
                  <i className="bx bxl-bootstrap skill-icon"></i>
                  <div>
                    <h3 className="skills__name">BOOTSTRAP</h3>
                    {/* <span className="skills__level">Intermediate</span> */}
                  </div>
                </div>

                <div className="skills__data">
                  <i className="bx bxl-react skill-icon"></i>
                  <div>
                    <h3 className="skills__name">REACT</h3>
                    {/* <span className="skills__level">Basic</span> */}
                  </div>
                </div>

                <div className="skills__data">
                  <i className="bx bxs-data skill-icon"></i>
                  <div>
                    <h3 className="skills__name">MySQL</h3>
                    {/* <span className="skills__level">Intermediate</span> */}
                  </div>
                </div>
              </div>

              <div className="skills__group">
                <div className="skills__data">
                  <i className="bx bxl-css3 skill-icon"></i>
                  <div>
                    <h3 className="skills__name">CSS</h3>
                    {/* <span className="skills__level">Intermediate</span> */}
                  </div>
                </div>

                <div className="skills__data">
                  <i className="bx bxl-javascript skill-icon"></i>
                  <div>
                    <h3 className="skills__name">JAVASCRIPT</h3>
                    {/* <span className="skills__level">Intermediate</span> */}
                  </div>
                </div>

                <div className="skills__data">
                  <i className="bx bxl-php skill-icon"></i>
                  <div>
                    <h3 className="skills__name">PHP</h3>
                    {/* <span className="skills__level">Intermediate</span> */}
                  </div>
                </div>

                <div className="skills__data">
                  <i className="bx bxl-git skill-icon"></i>
                  <div>
                    <h3 className="skills__name">GIT</h3>
                    {/* <span className="skills__level">Intermediate</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Skills;