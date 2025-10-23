import CyG from './../assets/img/CyG transportes.png';
import SanityKing from './../assets/img/Sanity King.png';
import AppTender from './../assets/img/appTender.png';
import TaskAppi from './../assets/img/taskAppi.png'
import './../index.css';

const Work = () => {

    return (
      <section className="work section" id="work">
        <span className="section__subtitle">My portfolio</span>
        <h2 className="section__title">Recent Works</h2>

        {/* <div className="work__filters">
          <span className="work__item active-work" data-filter="all">
            All
          </span>
          <span className="work__item" data-filter=".web">
            Web
          </span>
          <span className="work__item" data-filter=".movil">
            Responsive
          </span>
          <span className="work__item" data-filter=".design">
            Design
          </span>
        </div> */}

        <div className="work__container container grid">
          <div className="work__card mix web">
            <img
              src={CyG}
              alt="CyG transportes website"
              className="work__img"
            />

            <h3 className="work__title">CyG transportes</h3>

            <a href="https://cygtransportes.com/" className="work__button">
              Demo <i className="bx bx-right-arrow-alt work-icon"></i>
            </a>
          </div>

          <div className="work__card mix web">
            <img 
                src={SanityKing} 
                alt="sanityKing website" 
                className="work__img" 
            />

            <h3 className="work__title">Sanity King</h3>

            <a href="https://sanityking.com/" className="work__button">
              Demo <i className="bx bx-right-arrow-alt work-icon"></i>
            </a>
          </div>

          <div className="work__card mix movil">
            <img 
                src={AppTender} 
                alt="appTender project" 
                className="work__img" 
            />

            <h3 className="work__title">App</h3>

            <a href="https://cast3c.github.io/appTender/" className="work__button">
              Demo <i className="bx bx-right-arrow-alt work-icon"></i>
            </a>
          </div>

          <div className="work__card mix design">
            <img 
                src={TaskAppi} 
                alt="taskAppi project" 
                className="work__img" 
            />
            <h3 className="work__title">App</h3>

            <a href="https://taskappi.fly.dev/" className="work__button">
              Demo <i className="bx bx-right-arrow-alt work-icon"></i>
            </a>
          </div>

          {/* <!-- <div class="work__card mix movil">
                        <img src="./assets/img/work5.jpg" alt="" class="work__img" />

                        <h3 class="work__title">App movil</h3>
                        
                        <a href="" class="work__button">
                            Demo <i class='bx bx-right-arrow-alt work-icon' ></i>
                        </a>
                    </div> --> */}
        </div>
      </section>
    );
}

export default Work