import React from "react";
import "./app-header.css";
const AppHeader = ({ allPosts, liked }) => {
    return (
        <div className="d-flex app-header ">
            <h1>Meirambek Zhussipov</h1>
            <h2>
                {allPosts} записей, из них понравилось {liked}
            </h2>
        </div>
    );
};
export default AppHeader;
