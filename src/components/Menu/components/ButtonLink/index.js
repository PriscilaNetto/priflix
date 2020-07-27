import React from "react";

function ButtonLink(props) {
  //props é um objeto => {className - o valor que será passado e o href: "/"}
  console.log(props);
  return (
    <a href={props.href} className={props.className}>
      Novo Vídeo
    </a>
  );
}

export default ButtonLink;
