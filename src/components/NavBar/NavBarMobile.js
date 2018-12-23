import React, { Component } from 'react';
// import './NavBarMobile.scss';
import './NavBarMobile.scss';
import {NavBarContent} from '../common/TextVars';
import Logo from './logotype_teepote.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import LeftMenu from './LeftMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faBars, faTimes);

class NavBarMobile extends Component {

  render() {
    const {show,remove,menu,classMenu} = this.props;
    return (
        <div className="NavBarMobile">
          {menu ? <LeftMenu classSup={classMenu}/> : ''}
          <ul className="Navigation">
            <li className="MenuIcon">
              <div id="menu" onClick={show}>
                <FontAwesomeIcon icon="bars" />
              </div>
            </li>
            <li className="Logo">
              <a href="/"><img src = {Logo} alt= "logo teepote miniature" /></a>
            </li>
            <li className="MenuIcon">
              <div id="exitMenu" onClick={remove}>
                {menu ? <FontAwesomeIcon icon="times" /> : null}
              </div>
            </li>
          </ul>
        </div>
    )
  }
}

export default NavBarMobile;
