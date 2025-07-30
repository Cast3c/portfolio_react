const Footer = () => {
    return (
        <footer className="footer">
           <div className="footer__container container">
            <h1 className="footer__title">Ricardo</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#work" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#testimonial" className="footer__link">Testimonial</a>
                </li>
            </ul>
            <ul className="footer__social">
                <a href="https://www.facebook.com/profile.php?id=100066979742618" target="_blank" className="footer__social-link">
                    <i className='bx bxl-facebook' ></i>
                </a>
                <a href="https://www.instagram.com/cast3c/" target="_blank" className="footer__social-link">
                    <i className='bx bxl-instagram' ></i>
                </a>
                <a href="https://soundcloud.com/cast3c" target="_blank" className="footer__social-link">
                    <i className='bx bxl-soundcloud' ></i>
                </a>
            </ul>

            <span className="footer__copy">
                &#169; TecDevelop(cast3c). All rights reserved.
            </span>
           </div> 
        </footer>
    )
}

export default Footer; 