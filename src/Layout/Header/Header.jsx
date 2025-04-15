import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import {
  faArrowRightToBracket,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import userAvatar from '@/assets/images/user-avatar.png';
import { Link, NavLink } from 'react-router';
import { useUser } from '../../context/UserContext';

export default function Header() {

  const { user, logout } = useUser();

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
        <Link
          to="/login"
          className="header-user__link header-user__link--border sm-hide"
        >
          Signup
        </Link>
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
              {user?.role === 'admin' && (
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
              )}

              <li className="header-user__option">
                <a href="/profile">Profile</a>
              </li>
              <li className="header-user__option">
                <a href="/orders">Orders</a>
              </li>
              {user ? (
                <li className="header-user__option">
                  <button onClick={() => logout()}>Logout</button>
                </li>
              ) : (
                <li className="header-user__option">
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
