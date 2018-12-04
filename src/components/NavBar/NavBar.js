import React, { Component } from 'react';
import './NavBar.scss';
import {NavBarContent} from '../common/TextVars';
import Logo from './logotype_teepote.png'


class NavBar extends Component {


  render() {
    const lis = NavBarContent.map((item) => (
      <li className="Nav-Item" key={item.key}>
        <a href={item.href}>{item.label}</a>
      </li>
    ));

    return (
      <div className="NavBar">
        <ul className="Navigation">
          <li className="Logo">
            <a href="/"><img src = {Logo} alt= "logo teepote miniature" /></a>
          </li>
          {lis}
        </ul>
      </div>
    );
  }
}

export default NavBar;
