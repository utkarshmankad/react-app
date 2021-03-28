import React, { Component } from "react";

class Counter extends Component {
    state = {
        //count: 0,
        value: this.props.value,
        imageUrl: "https://picsum.photos/200",
        tags: ["tag1", "tag2", "tag3", "tag4"],
    };

    styles = {
        fontSize: 15,
        fontWeight: "bold",
    };

    render() {
        //console.log("props",this.props);
        return (
            <div>
                {/* <img src={this.state.imageUrl} alt=""/> */}
                {this.props.children}
                <span style={this.styles} className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => {
                        this.handleAdd({ id: 1 });
                    }}
                    className="btn btn-secondary btn-sm m-3"
                >
                    Add
                </button>
                <button onClick={this.handleDelete()} className="btn btn-danger btn-sm m-2">Delete</button>
                {this.state.tags.length === 0 && "Please create new tags !!"}
                {/* {this.renderTags()} */}
            </div>
        );
    }

    handleAdd = product => {
        //binding events to state
        // console.log("add", this);
        console.log(product);
        this.setState({ value: this.state.value + 1 });
    };

    handleDelete = () => {
        
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags !!</p>;
        return (
            <ul>
                {this.state.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value <= 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value <= 0 ? "Zero" : value;
    }
}

export default Counter;
