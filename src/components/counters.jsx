import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 5 },
      { id: 3, value: 1 },
      { id: 4, value: 0 },
      { id: 5, value: 7 },
    ],
  };

  handleDelete = () => {
    console.log("handling delete");
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete()}
            value={counter.value}
            selected={true}
          >
            <h5>Counter {counter.id}</h5>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
