// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerator = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevSate => ({speed: prevSate.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speed-meter-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="meter-heading">Speed is {speed}mph</h1>
        <p className="description">Min limit is 0mph, max limit is 200mph</p>
        <div className="button-container">
          <button
            className="accelerator"
            type="button"
            onClick={this.onAccelerator}
          >
            Accelerate
          </button>
          <button className="apply-break" type="button" onClick={this.onBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
