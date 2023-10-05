import Svg from "../Svg/Svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <a className="home-icon" href="/">
          <Svg />
        </a>
        <ul className="end-points">
          <li>
            <a name="/documentation" href="/documentation">
              Docs
            </a>
          </li>
          <li>
            <a name="/about" href="/about">
              About
            </a>
          </li>
          <li>
            <a href="/support-us">Support Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
