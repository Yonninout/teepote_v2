import React, { Component } from 'react';
import './IphonePresentation.scss';
// import iphoneCover from './Mockups/iphone_vide.png';
import iphoneFrame from './Mockups/iphone_switch.png';
class IphonePresentation extends Component {
  render() {
    return (
      <div className="IphonePresentation">
        <div className="Outer-Container">
          {/* <img id="computer-project-frame" src = {iphoneFrame} alt = "todo" /> */}
          <div className="Inner-Container">
            <img id="computer-frame" src = {iphoneFrame} alt="maquette macbook vide" />
          </div>
        </div>
      </div>
    );
  }
}

export default IphonePresentation;
