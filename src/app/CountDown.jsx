import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';

export const myCountDown =(time )=>{
    ReactDOM.render(
      (<Countdown date= { Date.now() + time } />),
      document.getElementById('myTimeContainer')
    );

}

class CountDown extends React.Component {

  constructor(props){
    super(props);
    this.state = {time: 0,
      unit:'' };

    this.handleUnitChange = this.handleUnitChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }


  handleUnitChange(event){
    const DAY = 86400;
    const HOUR = 3600;
    const MIN = 60;
    const THOUSAND = 1000;

    this.setState({ [event.target.name]: event.target.value });

    let EnteredTime = this.state.time;
    let SelectedUnit = event.target.value;
    switch (SelectedUnit) {
      case 'day':
        myCountDown((EnteredTime * DAY) * THOUSAND);
        break;
      case 'hour':
          myCountDown((EnteredTime * HOUR) * THOUSAND);
          break;
      case 'min':
          myCountDown((EnteredTime * MIN) * THOUSAND);
          break;
      default:
        myCountDown(EnteredTime * THOUSAND);
        break;
    }
  }


  render(){
    return(
      <div>
        <h3>This is my count down app {this.state.toCountdown}</h3>
        <form>
          Enter a time:
          <input type="number" onChange={this.handleChange} name="time"/>
          Select a unit:
          <select onChange={this.handleUnitChange } name="unit" >
            <option value='day'>Days</option>
            <option value='hour'>Hours</option>
            <option value='min'>Minutes</option>
            <option value='sec'>Seconds</option>
          </select>
          <br />
        </form>
        <br />
        You enter : <span>{this.state.time}</span> <span>{this.state.unit} </span>
        <br /><br />
        <div id="myTimeContainer">
          <label>waiting for data to start ...</label>
        </div>
        <br />
      </div>
    );
  }
};
export default CountDown;
