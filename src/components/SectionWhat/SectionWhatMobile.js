import React, { Component } from 'react';
import './SectionWhatMobile.scss';
import {WhatTitle, WhatContent, WhatLegend} from '../common/TextVars'
import LogotypeContainerMobile from '../LogotypeMobile/LogotypeContainerMobile'
import {LogotypeContent} from '../common/TextVars.js'

class SectionWhatMobile extends Component {
  elements = LogotypeContent.map(array =>
    // console.log(array.src);
    // console.log(array.text);
    <LogotypeContainerMobile
      id      = {"logotype_" + array.key}
      SrcLogo = {array.src}
      Alt     = {array.alt}
      Text    = {array.text}
      key     = {array.key}
      Title   = {array.title}
    />
  )

  render() {
    return (
      <div className="SectionWhatMobile" onClick={this.props.onClick}>
        <h1>Nos activités</h1>
        {/* <LogotypeContainerMobile
          id      = {"logotype_" + LogotypeContent[0].key}
          SrcLogo = {LogotypeContent[0].src}
          Alt     = {LogotypeContent[0].alt}
          Text    = {LogotypeContent[0].text}
          key     = {LogotypeContent[0].key}
          Title   = {LogotypeContent[0].title}
        /> */}
        {this.elements}
      </div>
    );
  }
}

export default SectionWhatMobile;
