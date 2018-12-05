import React, { Component } from 'react';
import './ComputerPresentation.scss';
import computer from './Mockups/macbook_1.png';
// import {computerFrame} from './Mockups/couverture_2.png';

class ComputerPresentation extends Component {
  render() {
    return (
      <div className="ComputerPresentation">
        <div className="Outer-Container">
          <img id="computer-frame" src = {computer} alt="maquette macbook vide" />
          {/* <div className="Inner-Container"> */}
            {/* <img id="computer-project-frame" src = {computerFrame} alt = {computerFrameAlt} /> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default ComputerPresentation;
