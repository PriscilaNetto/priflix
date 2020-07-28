import React from "react";
import { FooterBase } from "./styles";
import Logo from "../../assets/img/Logo.png";

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className="Logo" src={Logo} alt="priflix logo" />
      </a>
      <p>
        Orgulhosamente criado por Priscila Netto durante a{" "}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>{" "}
      </p>

      <p>
        <a href="https://br.linkedin.com/in/priscila-netto">Linkedin |</a>{" "}
        <a href="https://github.com/PriscilaNetto">GitHub</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
