import React from "react";
import "./post-list.css";
import PostListItem from "../post-list-item/post-list-item";
const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
    const elements = posts.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="lit-group-item">
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                />
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
