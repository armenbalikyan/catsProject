import React from "react";
import Link from "./Link";

const LinkList = ({ categories }) => {
  return (
    <div className="container">
        <ul>
        {categories &&
        categories.map((categorie) => {
            console.log(categorie)
            return (
                <Link name={categorie} />
            )
        })}
        </ul>
    </div>
  );
};

export default LinkList;
