import React from "react";

const Link = (props) => {
  return (
    <li>
      <a href="#home">{props.name}</a>
    </li>
  );
};

export default Link;
