import React, { Component } from 'react';
import classnames from 'classnames';
import { Link, Switch, Route, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './style.css';
import Navbar from '../Navbar';
import ListNavigatorContainer from '../../containers/ListNavigatorContainer';
import BoardViewer from './BoardViewer';


// MAIN SITE SECTIONS

const site_sections = [
  {
    title: 'My account',
  },
];

const panel_sections = ['Personal', 'To-Do List', 'Portfolio'];

class App extends Component {

  render() {

    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>

{/*
        <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React - Fullstack!</h2>

        </div>
*/}
        <Navbar sections={site_sections} colorStyle="navbar-inverse" />
        <ListNavigatorContainer sections={panel_sections} />
        <Switch>
          {panel_sections.map((section) => {
            <Route exact path={section.toLowerCase()} render={() => <BoardViewer /> } />
          })}
          <Redirect exact from="/" to={`/boards/${panel_sections[0].toLowerCase()}`} />
        </Switch>
      </div>
    );
  }
}

export default App;
