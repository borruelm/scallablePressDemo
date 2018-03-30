import React from 'react';
import seedrandom from 'seedrandom';

export const randNumb =() =>{
  //implementing flip
  var faceUp = flipFunc();
  var message = '';
  if(faceUp === true){
    message = 'Coin face is up ';
  }else{
    message = 'Coin face is down ';
  }
  //using seedrandom as random retriver
  const rng = seedrandom('hello.');
  //setting 1'000,000 as max
  let myRnd =rng() * 1000000;
  message += 'and randomness is : ' + myRnd;
  return message;
};

export const flipFunc =() => {
  let randRet = Math.random() >= 0.5;
  return randRet;
}

class FlipCoin extends React.Component {
  constructor(props){
    super(props);
    this.state = { resVal : ' waiting for click to start' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    var resValRes = randNumb();
    this.setState({resVal : resValRes});
  }

  render(){
    return(
      <div>
        <h3>This is the coin flip function implementation</h3>
        <button onClick={this.handleChange}>Start</button>
        <div id="flipCoinArea">
          Result : <label>{this.state.resVal}</label>
        </div>
      </div>
    );
  }
};
export default FlipCoin;
