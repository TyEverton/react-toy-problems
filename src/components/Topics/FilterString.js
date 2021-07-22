import React, { Component } from "react"


class FilterString extends Component {
  constructor() {
    super()

    this.state = {
      names: ["Ty", "John", "Traysen", "Zach", "Taygen"],
      userInput: " ",
      filteredNames: []
    }
  }

  filteredNames(userInput) {

  }


  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>FILTER STRING</h4>
        <span className="puzzleText">NAMES: {JSON.stringify(this.state.names, null, 10)}</span>
        <input className="inputLine" onChange={ (element) => this.handleChange(element.target.value)}/>
        <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput)}>FILTER</button>
        <span className="resultsBox filterStringPB">FILTERED NAMES: {JSON.stringify(this.state.filteredNames, null, 10)}</span>
      </div>
    )
  }
}

export default FilterString