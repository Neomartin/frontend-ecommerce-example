import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faPhone,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-section__wrapper">
        <section className="footer__section footer-company">
          <div className="main__logo">
            NE<span className="main__logo--letter">O</span>
          </div>
          <p className="footer-company__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            placeat repudiandae doloribus voluptatem ratione dolorum nostrum
            asperiores expedita eaque est.
          </p>
          <ul className="footer__list">
            <li className="footer-contact-info__item">
              <FontAwesomeIcon
                className="footer-contact-info__icon"
                icon={faEnvelope}
              />
              <a href="mailto:neomartinr@gmail.com" className="footer__link">
                neomartinr@gmail.com
              </a>
            </li>
            <li className="footer-contact-info__item">
              <FontAwesomeIcon
                className="footer-contact-info__icon"
                icon={faPhone}
              />
              <a href="tel:+123456789" className="footer__link">
                +54 260 4239195
              </a>
            </li>
            <li className="footer-contact-info__item">
              <FontAwesomeIcon
                className="footer-contact-info__icon"
                icon={faLocationDot}
              />
              <span className="">Godoy Cruz 1353</span>
            </li>
          </ul>
        </section>
        
        <section className="footer__section footer-social">
          <h3 className="footer-section__title">Social Media</h3>
          <div className="footer__input-wrapper">
            <input
              type="text"
              className="footer__input"
              placeholder="Ingrese su correo"
            />
            <FontAwesomeIcon
              className="footer-input__icon"
              icon={faPaperPlane}
            />
          </div>
          <div className="footer__social-wrapper">
            <a href="/" className="footer__social-link">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="/" className="footer__social-link">
              <FontAwesomeIcon icon={faX} />
            </a>
            <a href="/" className="footer__social-link">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </section>
        <section className="footer__section footer-links">
          <h3 className="footer-section__title">Menu</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="/" className="footer__link">
                Home
              </a>
            </li>
            <li className="footer__item">
              <a href="/products" className="footer__link">
                Products
              </a>
            </li>
            <li className="footer__item">
              <a href="/contact" className="footer__link">
                Contact
              </a>
            </li>
            <li className="footer__item">
              <a href="/about" className="footer__link">
                About Us
              </a>
            </li>

            <li className="footer__item">
              <a href="/register" className="footer__link">
                Register
              </a>
            </li>
          </ul>
        </section>
        
      </div>
      <div className="footer-section__copyright">
        <p>&copy; 2025. All rights reserved by NEO</p>
      </div>
    </footer>
  );
}
