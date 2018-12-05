import React, { Component } from 'react';
import './SectionProjects.scss';
import ComputerPresentation from './Presentation/ComputerPresentation';
import IphonePresentation from './Presentation/IphonePresentation';
import CarrouselleBar from './Presentation/CarrouselleBar';

class SectionProjects extends Component {
  render() {
    return (
      <div className="SectionProjects">
        <h1>Nos réalisations</h1>
        <ComputerPresentation />
        <IphonePresentation />
        <CarrouselleBar />
      </div>
    );
  }
}

export default SectionProjects;
