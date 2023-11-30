import { Component } from 'react'
import './App.css'

class ClassCounter extends Component {
  state = {
    counter: 0,
  };
  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  };
  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    })
  };
  render() {
    return (
      <div className='component-container'>
        <h1>class counter component.</h1>
        <h3>Current value of counter: {this.state.counter}</h3>
        <button type='button' className='btn' onClick={this.handleIncrement}>Increase(+1)</button>
        <button type='button' className='btn' onClick={this.handleDecrement}>Increase(-1)</button>
      </div>
    );
  };
}

export default ClassCounter
