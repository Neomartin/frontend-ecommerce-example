import './Header.css';
export default function Header() {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <a className="main-nav__link" href="/">
              Home
            </a>
          </li>
          <li className="main-nav__item">
            <a className="main-nav__link" href="/products">
              Products
            </a>
          </li>
          <li className="main-nav__item">
            <a className="main-nav__link" href="/about">
              About
            </a>
          </li>
          <li className="main-nav__item">
            <a className="main-nav__link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="main-header__logo">
        NE<span className="main-header__logo--letter">O</span>
      </div>
      <div className="main-header__user">
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
        🛒👤Menu
      </div>
    </header>
  );
}
