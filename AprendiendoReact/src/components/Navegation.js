import React from "react";
import { NavLink } from "react-router-dom";
const Navegation = () => {
  return (
    <nav id="menu">
      <ul>
        <li>
          <NavLink to="/home" activeClassName="active">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/Formulario" activeClassName="active">
            Formulario
          </NavLink>
        </li>
        <li>
          <NavLink to="/pg1" activeClassName="active">
            pagina1
          </NavLink>
        </li>
        <li>
          <NavLink to="/pg2" activeClassName="active">
            pagina2
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navegation;
