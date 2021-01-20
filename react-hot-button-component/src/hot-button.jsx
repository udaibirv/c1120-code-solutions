import React from "react";
class HotButton extends React.Component{
  constructor(props){
    super(props);
    this.state = ({count: 0});
    this.incrementer = this.incrementer.bind(this);

  }
  incrementer(){
    this.setState({count: this.state.count + 1});
  }


render(){
  if(this.state.count < 3){
    return <button onClick={this.incrementer}>Hot Button</button>
  }
  if(this.state.count < 6){
    return <button onClick={this.incrementer} className="dark-purple">Hot Button</button>
  }
  if(this.state.count < 9 ){
    return <button onClick={this.incrementer}className="violet">Hot Button</button>
  }
  if(this.state.count < 12){
    return <button onClick={this.incrementer}className="salmon">Hot Button</button>
  }
  if(this.state.count < 15){
    return <button onClick={this.incrementer}className="orange">Hot Button</button>
  }
  if(this.state.count < 18){
    return <button onClick={this.incrementer}className="yellow">Hot Button</button>
  }
  if(this.state.count < 21){
  return <button onClick={this.incrementer}className="grey">Hot Button</button>
  }
}



}

export default HotButton;
