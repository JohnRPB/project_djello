import React from 'react';
import {Link} from 'react-router-dom';

const FeatureTest = (props) => {

  console.log("------------------- START this.props -------------------");
  console.log(props);
  console.log("-------------------- END this.props --------------------");

  return (
    <div>
      <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Link to='about'><button>Test React Router</button></Link>
      <br />
      <br />
      <button onClick={props.actions.expressTest}>Test if Express is working</button>
      <br />
      <br />
      <button onClick={props.actions.dbTest}>Test if Express and Sequelize are working</button>

      <br />
      <br />
      <button onClick={props.actions.getBoards}>Test if Sequelize fetch Boards is working</button>
      <div style={{ padding: '30px' }}>{props.results}</div>
    </div>
  );
}

export default FeatureTest;


