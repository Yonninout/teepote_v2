import React, { Component } from 'react';
import './Phone.scss';
import iphone from './iphone_1.png'

class Phone extends Component {
  render() {
    return (
      <div className="Phone">
        <img src={iphone} alt='iphone de présentation' />
      </div>
    );
  }
}

export default Phone;
