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
    // const test = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

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

        {/* check for message and render icon based off that  */}
          { /* <i className="fas fa-times"></i>
          <i className="fas fa-check"></i>  */}

  </form>
    )
  }
}












export default ValidatedInput;
