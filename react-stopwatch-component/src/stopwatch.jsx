import React from "react";

class Stopwatch extends React.Component{
constructor(props){
  super(props);
  this.incrementer = this.incrementer.bind(this);
  this.pause = this.pause.bind(this);
  this.reset = this.reset.bind(this);
  this.state = {count: 0, intervalId: null, isActive: true };
}



incrementer(){
  const start = setInterval(() => {
    this.setState({count: this.state.count + 1});
  }, 1000)
  this.setState({intervalId: start, isActive: false});
}

pause(){
  clearInterval(this.state.intervalId);
  this.setState({intervalId: null, isActive: true});

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
  let playStatus = 'fa-play-circle';
  let pauseStatus = 'fa-pause';
  if(this.state.isActive){
    pauseStatus = 'hidden';

  }
  if(!this.state.isActive){
    playStatus = 'hidden';
  }


  return (
    <div className="wrapper">
      <div onClick={this.reset} className="circle">
        <h1>{this.state.count}</h1>
      </div>
      <i onClick={this.incrementer} className={`far fa-2x ${playStatus}`} ></i>
      <i onClick={this.pause} className={`fas fa-2x ${pauseStatus}`}></i>
    </div>
  )
}

}





export default Stopwatch;
