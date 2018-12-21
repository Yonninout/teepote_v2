import React, { Component } from 'react';
import './LeftMenu.scss';
import logoYellow from './logotype.teepote_yellow.png'

class LeftMenu extends Component {
  render() {


    return (
      <div className={"LeftMenu"+ this.props.classSup}>
        <div><img src = {logoYellow} alt='logo teepote blanc' /></div>
        {/* <div className="sub">www.teepote.com</div> */}
        <div>Accueil</div>
        <div>Nos activités</div>
        <div>contact</div>
      </div>
    );
  }
}

export default LeftMenu;
