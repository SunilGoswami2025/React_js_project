import React, { Component } from 'react'


export default class Counterclass extends Component {
    constructor(){
        super()

        this.state = {
            count:0,
        };
    }
    handleclick = ()=>{
        this.setState({count:this.state.count + 1})
    }
    handleclick1 = ()=>{
        this.setState({count:this.state.count-1})
    }
  render() {
    return (
        // rcc-React Class Component 
        // this.state -this.state stores the component's data
        // syntax -this.state.propertyname
        

        // State: A Component’s Memory
      <div>
        <h1>Counter Class</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleclick}>Increment</button>
        <button onClick={this.handleclick1}>Decrement</button>
      </div>
    )
  }
}
