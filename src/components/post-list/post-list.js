import React from "react";
import "./post-list.css";
import PostListItem from "../post-list-item/post-list-item";
const PostList = ({ posts }) => {
    const elements = posts.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="lit-group-item">
                <PostListItem {...itemProps}></PostListItem>
            </li>
        );
    });
    return (
        <div>
            <ul className="app-list list-group">{elements}</ul>
        </div>
    );
};

export default PostList;
