import React, { Component } from 'react';
import './Logotype.scss';
class Logotype extends Component {

  render() {
    const {SrcLogo,Alt} = this.props
    return (
      <div className="Logotype">
        <div className="Inner-Content">
          <img src = {require(''+SrcLogo+'')} alt = {Alt} />
        </div>
      </div>
    );
  }
}

export default Logotype;
