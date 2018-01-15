import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
} from 'react-router-dom'

const ListNavigator = ({sections, onChange }) => {
  console.log("sections: ", sections);
  
  return (
    <div className="main-select">
      <label> Select Board: </label> {' '}
      <select onChange={onChange}>
      {sections.map((section) => {
        return (
          <option> {section} </option>
        );
      })}
      </select>
    </div>
  );
}


export default ListNavigator;
