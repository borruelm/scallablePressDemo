
import React from 'react';
import {render} from 'react-dom';
import MartinRouter from './MartinRouter.jsx';
import myStyle from '../style/myStyle.css'

class App extends React.Component {
  debugger;
  render () {
    return(
      <div>
        <div className='main-container'>
          <h2>React Example</h2>
          <MartinRouter />
        </div>
      </div>
    )


  }
}

render(<App/>, document.getElementById('app'));
