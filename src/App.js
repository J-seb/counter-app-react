import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import "./App.css";

class App extends Component {
  state = {
    arrayOfCounters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 100 },
      { id: 4, value: 0 },
    ],
  };

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleDelete(counterId) {
    const newArrayOfCounters = this.state.arrayOfCounters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({
      arrayOfCounters: newArrayOfCounters,
    });
  }

  handleIncrement(counter) {
    const newArray = [...this.state.arrayOfCounters];
    const index = newArray.findIndex((c) => c.id === counter.id);
    newArray[index].value += 1;

    this.setState({
      arrayOfCounters: newArray,
    });
  }

  handleDecrement(counter) {
    const newArray = [...this.state.arrayOfCounters];
    const index = newArray.findIndex((c) => c.id === counter.id);

    newArray[index].value = !newArray[index].value
      ? 0
      : (newArray[index].value -= 1);

    this.setState({
      arrayOfCounters: newArray,
    });
  }

  handleReset() {
    const newArray = this.state.arrayOfCounters.map((counter) => {
      counter.value = 0;
      return counter;
    });

    this.setState({ arrayOfCounters: newArray });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalOfCounters={
            this.state.arrayOfCounters.filter((c) => c.value > 0).length
          }
        />
        <div className="container">
          <Counters
            counters={this.state.arrayOfCounters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
