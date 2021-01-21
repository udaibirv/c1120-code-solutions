import React from "react";
import ReactDOM from "react-dom";

class NewsLetterForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    console.log("State ", {Email:this.state.value});
    event.preventDefault();
  }

  render(){
    return (
    <form onSubmit={this.handleSubmit}>
      <label for="email">Email</label>
        <input type="email" value={this.state.value} onChange={this.handleChange} />
        <button type="submit">Sign Up</button>
    </form>
    );
  }

}

ReactDOM.render(
  <NewsLetterForm />,
  document.querySelector('#root')
);
