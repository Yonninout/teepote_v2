import React, { Component } from 'react';
import './FooterMobile.scss';

class FooterMobile extends Component {

  render() {
    return (
      <div className="FooterMobile">
          <h1>{this.props.Title}</h1>
      </div>
    );
  }
}

export default FooterMobile;
