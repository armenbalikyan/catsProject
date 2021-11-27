import React from "react";
import CategoriesLinkList from "./CategoriesLinkList";
import {logDOM} from "@testing-library/react";
import CatsLinkList from "./CatsLinkList";

const Content = ({categories, cats,handleCategoryClick}) => {
    return (
        <div id='globalContainer'>
            <CategoriesLinkList categories={categories} handleCategoryClick={handleCategoryClick}/>
            <div>
                <div className="imageContainer">
                    <CatsLinkList cats={cats}/>
                </div>
                <button>Load More</button>
            </div>
        </div>
    );
};

export default Content;
