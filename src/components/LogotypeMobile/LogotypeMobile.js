import React, { Component } from 'react';
import './LogotypeMobile.scss';
class LogotypeMobile extends Component {

  render() {
    const {SrcLogo,Alt} = this.props
    return (
      <div className="LogotypeMobile">
        <div className="Inner-Content">
          <img src = {require(''+SrcLogo+'')} alt = {Alt} />
        </div>
      </div>
    );
  }
}

export default LogotypeMobile;
