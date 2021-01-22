import React from "react";

class ValidatedInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {password: ''};
    this.handleChange = this.handleChange.bind(this);
    this.check = this.check.bind(this);
  }

  handleChange(event){
    this.setState({password: event.target.value});
  }

  check(){
    let message = null;

    if(this.state.password.length < 8){
      message = 'Your Password is too short'
    }
    if (this.state.password.length === 0) {
      message = 'A password is required'
    }
    return message;

  }

  render(){
    let message = this.check();
    return (
      <form>
        <div>
          <label>Password</label>
        </div>
        <input type="password" className="password" value={this.state.value} onChange={this.handleChange} />
        <p>{message}</p>
          <i className={`fas ${message ? 'fa-times red' : 'fa-check green'}`}></i>

  </form>
    )
  }
}












export default ValidatedInput;
