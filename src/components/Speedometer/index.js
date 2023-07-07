

import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`Previous value ${prevState.count}`)
      return {count: prevState.count + 10}
    })
  }

  onDecrement = () => {
    this.setState(prevState => {
      console.log(`Previous value ${prevState.count}`)
      return {count: prevState.count - 10}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img1"
        />
        <h1 className="sub">Speed is {count}mph</h1>
        <p className="des">Min Limit is 0mph, Max Limit is 200mph</p>

        <div className="btn-cont">
          <button className="btn" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button className="btn1" onClick={this.onDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
