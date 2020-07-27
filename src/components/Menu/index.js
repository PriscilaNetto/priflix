import React from "react";
import Logo from "../../assets/img/Logo.png";
import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">Logo</a>
      <a className="ButtonLink" href="/">
        Novo Vídeo
      </a>
      <img className="Logo" src={Logo} alt="priflix logo" />
    </nav>
  );
}

export default Menu;
