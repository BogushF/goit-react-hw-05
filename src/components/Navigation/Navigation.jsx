import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigation.module.css";

const getLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <div className={s.header}>
      <nav>
        <ul className={s.list}>
          <li>
            <NavLink to="/" className={getLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={getLinkClass}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
