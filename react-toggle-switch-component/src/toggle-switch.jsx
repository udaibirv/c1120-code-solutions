import React from "react";

class ToggleSwitch extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isOn: false };

  }

  handleClick(){
    console.log("handle click worked")
    const isOnState = this.state.isOn;
    console.log("isOnState: ", isOnState);
    this.setState({isOn: !isOnState}, () => console.log(this.state));
  }

  render(){
    let outerOvalStatus = 'outer-oval-off'
    let innerCirlceStatus = 'inner-circle-off'
    if(this.state.isOn){
      outerOvalStatus = 'outer-oval-on'
      innerCirlceStatus = 'inner-circle-on'
    }


    return (
      <div className="wrapper">
        <div onClick={this.handleClick} className={`outer-oval ${outerOvalStatus}`}>
          <div className={`inner-circle ${innerCirlceStatus}`}> </div>
        </div>
      </div>
    )
  }



}

export default ToggleSwitch;
