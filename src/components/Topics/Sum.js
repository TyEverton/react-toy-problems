import React, { Component } from "react"


class Sum extends Component {
  constructor() {
    super()

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

    handleChange(value) {
      this.setState({userInput: value})
    }

    sum(){

    }



  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>SUM</h4>
        <input className="inputLine" type="number" onChange={ (element) => this.handleChange(element.target.value)}/>
        <input className="inputLine" type="number" onChange={ (element) => this.handleChange(element.target.value)}/>
        <button className="confirmationButton" onClick={this.add(this.state.number1, this.state.number2)}>ADD</button>
        <span className="resultsBox">SUM: {this.state.sum}</span>
      </div>
    )
  }
}

export default Sum
