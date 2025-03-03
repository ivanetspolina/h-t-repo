import { NavLink } from "react-router-dom";
import "../css/main.css";
import "../scss/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="navigation">
        <nav>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            to="/"
          >
            <span>Головна</span>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            to="/contact"
          >
            <span>Контакти</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            to="/gallery"
          >
            <span>Фото</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
