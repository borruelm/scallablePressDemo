import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MartinComponent from './MartinComponent.jsx';
import CountDown from './CountDown.jsx';
import FlipCoin from './FlipCoin.jsx';

const MartinRouter = () => (
  <Router>
    <div>
      <div className="mainMenu">
        <ul>
          <li>
            <Link to="/">Welcome</Link>
          </li>
          <li>
            <Link to="/CountDown">Count Down</Link>
          </li>
          <li>
            <Link to="/FlipCoin">Flip coin</Link>
          </li>
        </ul>
      </div>
      <br /><br />
      <hr />
      <Route exact path="/" component={Welcome} />
      <Route path="/CountDown" component={CountDownModule} />
      <Route path="/FlipCoin" component={FlipCoinModule} />
    </div>
  </Router>
);

const Welcome = () =>(
  <div>
    <MartinComponent />
    <br />
  </div>
);

const CountDownModule = () => (
  <div>
    <CountDown />
    <br />
  </div>
);

const FlipCoinModule = () => (
  <div>
    <FlipCoin />
    <br />
  </div>
);


export default MartinRouter;
