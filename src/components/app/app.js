import React, { Component } from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

import "../search-panel/search-panel.css";
import styled from "styled-components";
const AppBlock = styled.div`
    margin: 0 auto;
    width: 800px;
    padding: 0 15px;
`;
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    label: "Going to learn React",
                    important: true,
                    like: true,
                    id: 1,
                },
                {
                    label: "That is so good",
                    important: false,
                    like: false,
                    id: 2,
                },
                {
                    label: "I need a break ...",
                    important: false,
                    like: true,
                    id: 3,
                },
                {
                    label: "I need a break ...",
                    important: true,
                    like: false,
                    id: 3,
                },
            ],
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.AddItem = this.AddItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.maxId = 4;
    }
    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex((item) => item.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr,
            };
        });
    }
    AddItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++,
        };
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            };
        });
    }
    onToggleImportant(id) {
        this.setState(({ data }) => {
            const index = data.findIndex((item) => item.id === id);
            const old = data[index];
            const newItem = { ...old, important: !old.important };
            const newArr = [
                ...data.slice(0, index),
                newItem,
                ...data.slice(index + 1),
            ];
            return {
                data: newArr,
            };
        });
    }
    onToggleLiked(id) {
        this.setState(({ data }) => {
            const index = data.findIndex((item) => item.id === id);
            const old = data[index];
            const newItem = { ...old, like: !old.like };
            const newArr = [
                ...data.slice(0, index),
                newItem,
                ...data.slice(index + 1),
            ];
            return {
                data: newArr,
            };
        });
    }
    render() {
        const { data } = this.state;
        const liked = data.filter((item) => item.like).length;
        const allPosts = data.length;

        return (
            <AppBlock>
                <AppHeader liked={liked} allPosts={allPosts} />
                <div className="search-panel d-flex">
                    {" "}
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm onAdd={this.AddItem} />
            </AppBlock>
        );
    }
}
