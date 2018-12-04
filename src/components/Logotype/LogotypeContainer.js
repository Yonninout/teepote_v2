import React, { Component } from 'react';
import './LogotypeContainer.scss';
import Logotype from './Logotype'
import Footer from './Footer'

class LogotypeContainer extends Component {

  render() {
    const {SrcLogo, Alt, Text,Title} = this.props
    return (
      <div className="LogotypeContainer">
        <Logotype SrcLogo={SrcLogo} Alt={Alt}/>
        <Footer Title = {Title} Text = {Text}/>
      </div>
    );
  }
}

export default LogotypeContainer;
