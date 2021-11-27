import React from "react";
import {logDOM} from "@testing-library/react";
export var id;
const Link = (props) => {
  return (
    <li>
      <a href="#home" onClick={()=>props.handleCategoryClick(props.category.id)}>{props.category.name}</a>
    </li>
  );
};

export default Link;
