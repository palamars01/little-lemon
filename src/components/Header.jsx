import { useState } from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

export function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <header className="header">
      <div className="header__layout">
        <img src={Logo} alt="" className="logo" />
        <nav className="header__nav">
          <ul>
            <li>
              <Link
                to="/"
                className={isHovered ? "active" : ""}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseOut}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/booking"
                className={isHovered ? "active" : ""}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseOut}
              >
                Booking
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={isHovered ? "active" : ""}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseOut}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
