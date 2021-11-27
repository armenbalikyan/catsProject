import React from "react";
import CategoriesLinkList from "./CategoriesLinkList";
import CatsLinkList from "./CatsLinkList";

const Content = ({categories, cats, handleCategoryClick, handleLoadMoreClick}) => {
    return (
        <div id='globalContainer'>
            <CategoriesLinkList categories={categories} handleCategoryClick={handleCategoryClick}/>
            <div>
                <div className="imageContainer">
                    <CatsLinkList cats={cats}/>
                </div>
                <button id="loadMoreButton" onClick={() => handleLoadMoreClick()}>Load More</button>
            </div>
        </div>
    );
};

export default Content;
