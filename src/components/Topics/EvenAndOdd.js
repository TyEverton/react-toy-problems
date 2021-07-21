import React, { Component } from "react"

class EvenAndOdd extends Component {
  constructor() {
      super()

      this.state = {
        evenArray: [],
        oddArray: [],
        userInput: ''

      }
    }

  handleChange(value) {
    this.setState({userInput: value})
  }

  assignEvenAndOdds(userInput) {
  }

  render(){
    return(
     <div className="puzzleBox evenAndOddPB">
       <h4>Evens and Odds</h4>
       <input className="inputLine" onChange={ (element) => this.handleChange(element.target.value)}/>
       <button className="confirmationButton" onClick={ () => {this.assignEvenAndOdds(this.state.userInput)}}>SPLIT</button>
       <span className="resultsBox">EVENS: {JSON.stringify(this.state.evenArray)} </span>
       <span className="resultsBox">ODDS: {JSON.stringify(this.state.oddsArray)} </span>
     </div>
    )
  }
}

export default EvenAndOdd