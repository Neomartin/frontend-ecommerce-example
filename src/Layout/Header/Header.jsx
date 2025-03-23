import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import {
  faArrowRightToBracket,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import userAvatar from '@/assets/images/user-avatar.png';
import { NavLink } from 'react-router';

export default function Header() {
  return (
    <header className="main-header">
      <input className="main-header__checkbox" type="checkbox" id="burger" />
      <label htmlFor="burger" className="main-header__burger">
        <div className="main-header__burger-line"></div>
      </label>
      <nav className="main-nav">
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <NavLink className="main-nav__link" to="/">
              Home
            </NavLink>
          </li>
          <li className="main-nav__item">
            <NavLink className="main-nav__link" to="/products">
              Products
            </NavLink>
          </li>
          <li className="main-nav__item">
            <NavLink className="main-nav__link" to="/about">
              About
            </NavLink>
          </li>
          <li className="main-nav__item">
            <NavLink className="main-nav__link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="main-nav__item">
            <NavLink className="main-nav__link" to="/contact">
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="main__logo">
        NE<span className="main__logo--letter">O</span>
      </div>
      <div className="header-user">
        <a
          href="/signup"
          className="header-user__link header-user__link--border sm-hide"
        >
          Signup
        </a>
        <a href="/login" className="header-user__link" title="Login">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
        </a>
        <div className="header-user__link">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div className="header-user__menu">
          <img
            className="header-user__image"
            src={userAvatar}
            alt="User profile picture"
          />
          <div className="header-user__options-container">
            <ul className="header-user__options">
              <li className="header-user__option header-user__option-title">
                Admin
                <ul className="header-user__options">
                  <li className="header-user__option header-user__option">
                    <a href="/admin-products">Products</a>
                  </li>
                  <li className="header-user__option header-user__option">
                    <a href="/admin-users">Users</a>
                  </li>
                </ul>
              </li>
              <li className="header-user__option">
                <a href="/profile">Profile</a>
              </li>
              <li className="header-user__option">
                <a href="/orders">Orders</a>
              </li>
              <li className="header-user__option">
                <a href="/logout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
