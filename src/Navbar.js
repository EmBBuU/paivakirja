import { NavLink } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <div>
      <nav>
        <ul className="Navlinks">
          <li>
            <NavLink exact to="/">
              Etusivu
            </NavLink>
          </li>
          <li>
            <NavLink to="/teht12">Tehtävät 1 & 2</NavLink>
          </li>
          <li>
            <NavLink to="/teht3">Tehtävä 3</NavLink>
          </li>
          <li>
            <NavLink to="/teht4">Tehtävä 4</NavLink>
          </li>
          <li>
            <NavLink to="/teht5">Tehtävä 5</NavLink>
          </li>
          <li>
            <NavLink to="/teht6">Tehtävä 6</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
