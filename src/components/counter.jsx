import React, { Component } from "react";

class Counter extends Component {
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
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm m-3"
        >
          Add
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create new tags !!"} */}
        {/* {this.renderTags()} */}
      </div>
    );
  }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags !!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value <= 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value <= 0 ? "Zero" : value;
  }
}

export default Counter;
