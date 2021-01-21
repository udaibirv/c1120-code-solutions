import React from "react";

class Stopwatch extends React.Component{
constructor(props){
  super(props);
  this.incrementer = this.incrementer.bind(this);
  this.pause = this.pause.bind(this);
  this.reset = this.reset.bind(this);
  this.state = {count: 0, intervalId: null };
}



incrementer(){
  const start = setInterval(() => {
    this.setState({count: this.state.count + 1});
  }, 1000)
  this.setState({intervalId: start});
}

pause(){
  clearInterval(this.state.intervalId);
  this.setState({intervalId: null});

}

reset(){
  if(this.state.count > 0 && this.state.intervalId === null){
    const start = setInterval(() => {
      this.setState({ count: 0 });
    }, 1000)
    this.setState({intervalId: start});
  }
}

render(){
  return (
    <div className="wrapper">
      <div onClick={this.reset} className="circle"> {this.state.count} </div>
      <i onClick={this.incrementer} className="far fa-play-circle"></i>
      <i onClick={this.pause}className="fas fa-pause"></i>
    </div>
  )
}

}





export default Stopwatch;
