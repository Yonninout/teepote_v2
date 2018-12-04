import React, { Component } from 'react';
import './NavBar.scss';
import Navigation from './vars';



class NavBar extends Component {


  render() {
    const lis = Navigation.map((item) => (
      <li className="Nav-Item" key={item.key}>
        <a href={item.href}>{item.label}</a>
      </li>
    ));

    return (
      <div className="NavBar">
        <ul className="Navigation">
          <li className="Logo">LOGO</li>
          {lis}
        </ul>
      </div>
    );
  }
}

export default NavBar;
