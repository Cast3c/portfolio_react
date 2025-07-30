import castecSide from '../assets/img/cast3cSide.png'
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import "./../index.css"; // Puedes usar también module.scss si prefieres

const About = () => {
    return (
      <section className="about section" id="about">
        <h1 className="section__title">About me</h1>
        <div className="about__container container grid">
          <img src={castecSide} alt="" className="about__img" />
          <div className="about__data">
            <div className="about__info">
              <div className="about__box">
                <i className="about__icon"><WorkspacePremiumRoundedIcon /></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">3 Years Working</span>
              </div>
              <div className="about__box">
                <i className="about__icon"><BusinessCenterIcon /></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">+4 projects</span>
              </div>
              <div className="about__box">
                <i className="about__icon"><SupportAgentIcon /></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24/7</span>
              </div>
            </div>
            <p className="about__description">
              Frontend developer, I create web pages with UX / UI user
              interface, I have 3 years of experience. Many clients are happy
              with the projects i have delivered.
            </p>
            <a href="#contact" className="button">
              Contact me
            </a>
          </div>
        </div>
      </section>
    );
};

export default About;