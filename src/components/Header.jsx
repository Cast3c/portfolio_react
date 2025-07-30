import { useState, useEffect } from "react";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import "./../index.css"; // Puedes usar también module.scss si prefieres

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  

  // Detecta el scroll para cambiar fondo
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scroll-header" : ""}`}>
      <nav className="nav container">
        <a href="#" className="nav__logo">Castec</a>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className='navBtn'><HomeRoundedIcon /></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className='navBtn'><PersonRoundedIcon /></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className='navBtn'><BusinessCenterRoundedIcon /></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className='navBtn'><MessageRoundedIcon /></i>
              </a>
            </li>
          </ul>
        </div>
        <i className='change-theme' id="theme-btn"><BedtimeOutlinedIcon /></i>
      </nav>
    </header>
  );
};

export default Header;
