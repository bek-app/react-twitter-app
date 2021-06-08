import React from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import "./app.css";
import "../search-panel/search-panel.css";

const App = () => {
    const data = [
        { label: "Going to learn React", important: true, id: '12345dfgdg' },
        { label: "Going to learn React", important: false, id: '12345dfgh' },
        { label: "Going to learn React", important: false, id: '12345dfgj' },
    ];

    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                {" "}
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </div>
    );
};
export default App;
