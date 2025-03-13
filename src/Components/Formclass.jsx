import React, { Component } from 'react'

export default class Formclass extends Component {
    constructor(){
        super();

        this.state={
            Name:"",
            Email:"",
            Password:""
        };
    }
    handleSubmitForm =(e) => {
        e.preventDefault();
        console.log(this.state.Name);
        console.log(this.state.Email);
        console.log(this.state.Password);
        e.target.reset();
    };
  render() {
    return (
      <div>
        <h1>FormClass....</h1>
        <form onSubmit={this.handleSubmitForm}>
            <input type="text" placeholder='Enter the Name:' value={this.state.Name} onChange={(e)=>this.setState({Name:e.target.value})}/>
            <br /><br />
            <input type="Email" placeholder='Enter the Email:' value={this.state.Email} onChange={(e)=>this.setState({Email:e.target.value})}/>
            <br /><br />
            <input type="Password" placeholder='Enter the Password:' value={this.state.Password} onChange={(e)=>this.setState({Password:e.target.value})}/>
            <br /><br />
            <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}
