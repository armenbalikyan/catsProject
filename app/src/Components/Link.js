import React from "react";

const Link = (props) => {
    return (
        <li>
            <a href="#home" onClick={() => props.handleCategoryClick(props.category.id)}>{props.category.name}</a>
        </li>
    );
};

export default Link;
