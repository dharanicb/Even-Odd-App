// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onClickButton = () => {
    const RandomNumber = Math.ceil(Math.random() * 100)
    this.setState({count: RandomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="card-container">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p className="count-value">
            Count is {count % 2 === 0 ? 'Even' : 'Odd'}
          </p>
          <button type="button" onClick={this.onClickButton}>
            Increment
          </button>
          <p className="description">
            Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
