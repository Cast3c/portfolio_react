import React from 'react';
import perfilImage from '../assets/cast3cProfile.png';
import cvPdf from '../assets/pdf/CV Ricardo Castellar P.pdf'; // Asegúrate de tener la imagen en esta ruta
import "./../index.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Puedes usar también module.scss si prefieres

const handleDownload = () => {
        const cv = document.createElement('a');
        cv.href = cvPdf;
        cv.download = 'Ricardo Castellar P.pdf';
        document.body.appendChild(cv);
        cv.click();
        document.body.removeChild(cv);
    }

const Home = () => {
    return(
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__data">
                    <span className="home__greeting">Hello, I'm</span>
                    <h1 className="home__name">Ricardo Castellar</h1>
                    <span className="home__greeting">(A.K.A. Cast3c)</span>
                    <h3 className="home__education">Frontend Developer</h3>

                    <div className="home__buttons">
                        <a onClick={handleDownload} className="button button--ghost">Download CV</a>
                        <a href="#about" className="button">About me</a>
                    </div>
                </div>
                <div className="home__handle">
                    <img src={perfilImage} alt="" className="home__img" />
                </div>
                <div className="home__social">
                    <a href="" className="home__social-link" target="_blank">
                        <i className='btn-github'><GitHubIcon /></i>
                    </a>
                    <a href="www.linkedin.com/in/ricardo-castellar" className="home__social-link" target="_blank">
                        <i className='btn-linkedIn'><LinkedInIcon /></i>
                    </a>
                </div>
                {/* <a href="" className="home__scroll">
                    <i className='bx bxs-mouse home__scroll-icon'></i>
                    <span className="home__scroll-name">Scroll Down</span>
                </a> */}
            </div>
        </section>
    )
}

export default Home;

            