import React, { Component } from "react"


class FilterObject extends Component {
  constructor() {
    super()

    this.state = {
      employees: [
        {
          name: "John Douglas",
          title: "Senior Software Engineer",
          age: 39
        },
        {
          name: "Sebastian Romero",
          title: "Software Engineer",
          age: 35
        },
        {
          name: "Ty Everton",
          title: "Jr Front-End Developer",
          age: 28
        }
      ],

      userInput: "",
      filteredEmployees: []
    }
  }

  handleChange(value) {
    this.setState({userInput: value})
  }

  filterEmployees(prop) {
    
  }

    render() {
      return (
        <div className="puzzleBox filterObjectPb">
          <h4>FILTER OBJECT</h4>,
          <span className="puzzleText">ORIGINAL: {JSON.stringify(this.state.employees, null, 10)}</span>,
          <input className="inputLine"/>,
          <button className="confirmationButton">FILTER</button>,
          <span className="resultsBox filterObjectRB">FILTERED: {JSON.stringify(this.state.filteredEmployees, null, 10)}</span>,
        </div>
      )
    }
}

export default FilterObject