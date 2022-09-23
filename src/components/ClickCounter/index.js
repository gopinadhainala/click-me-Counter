// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increaseByOne = () => {
    this.setState(previous => ({count: previous.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <br />
          <span className="clicks">{count} </span>
          times
        </h1>
        <p className="paraText">Click the button to increase the count!</p>
        <button
          type="button"
          className="buttonStyle"
          onClick={this.increaseByOne}
        >
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
