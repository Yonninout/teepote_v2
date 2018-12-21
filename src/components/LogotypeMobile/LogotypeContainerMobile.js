import React, { Component } from 'react';
import './LogotypeContainerMobile.scss';
import LogotypeMobile from './LogotypeMobile'
import FooterMobile from './FooterMobile'

class LogotypeContainerMobile extends Component {

  render() {
    const {SrcLogo, Alt, Text,Title} = this.props
    return (
      <div className="LogotypeContainerMobile" id= {this.props.id}>
        <LogotypeMobile SrcLogo={SrcLogo} Alt={Alt}/>
        <FooterMobile Title = {Title} Text = {Text}/>
      </div>
    );
  }
}

export default LogotypeContainerMobile;
