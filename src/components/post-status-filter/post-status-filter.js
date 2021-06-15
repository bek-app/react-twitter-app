import React, { Component } from "react";
import "./post-status-filter.scss";

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            { name: "all", label: "Все" },
            { name: "like", label: "Понравилось" },
        ];
    }

    render() {
        const buttons = this.buttons.map(({ name, label }) => {
            const { filter, onFilterSelect } = this.props;
            const active = filter === name;
            const clazz = active ? "btn-info" : "btn-outline-secondary";
            return (
                <button
                    onClick={() => onFilterSelect(name)}
                    key={name}
                    type="button"
                    className={`btn ${clazz}`}
                >
                    {label}{" "}
                </button>
            );
        });
        return <div className="btn-group">{buttons}</div>;
    }
}
