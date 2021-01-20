import React from "react";

class Stopwatch extends React.Component{
constructor(props){
  super(props);
  this.handleClick = this.handleClick.bind(this);
  this.state = {isPlay: false};
}

handleClick(){
  console.log('Click worked');
  console.log("state is: ", isPlayState);
  const isPlayState = this.state.isPlay;
  this.setState({isPlay: !isPlayState});
}

}





export default Stopwatch;
