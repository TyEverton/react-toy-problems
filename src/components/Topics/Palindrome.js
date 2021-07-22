import React, { Component } from "react"

class Palindrome extends Component {
  constructor() {
    super()

    this.state = {
      userInput: " ",
      palinDrome: " "
    }
  }

  isPalindrome(userInput) {

  }



  render() {
    return(
      <div className="puzzleBox palindromePB">
        <h4>PALINDROME</h4>
        <input className="inputLine" onChange={ (element) => this.handleChange(element.target.value)}/>
        <button className="confirmationButton">CHECK</button>
        <span className="resultsBox">PALINDROME: {this.state.palindrome}</span>
      </div>
    )
  }
}

export default Palindrome