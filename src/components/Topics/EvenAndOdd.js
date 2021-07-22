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
    let array = userInput;
    let odds = [];
    let evens = []
  
    for(let i = 0; i < array.length; i++) {
      if(array[i] % 2 === 0) {
        evens.push(userInput[i])
      } else {
        odds.push(userInput[i])
      }
    }
    this.setState({evenArray: evens, oddArray: odds})
  }

  render(){
    return(
     <div className="puzzleBox evenAndOddPB">
       <h4>Evens and Odds</h4>
       <input className="inputLine" onChange={ (element) => this.handleChange(element.target.value)}/>
       <button className="confirmationButton" onClick={ () => {this.assignEvenAndOdds(this.state.userInput)}}>SPLIT</button>
       <span className="resultsBox">EVENS: {JSON.stringify(this.state.evenArray)} </span>
       <span className="resultsBox">ODDS: {JSON.stringify(this.state.oddArray)} </span>
     </div>
    )
  }
}

export default EvenAndOdd