import React, { Component } from 'react';
import './SectionLogotype.scss';
// import {WhoTitle, WhoContent, WhoLegend} from '../common/TextVars'
import LogotypeContainer from '../Logotype/LogotypeContainer'
import {LogotypeContent} from '../common/TextVars.js'
class SectionLogotype extends Component {


  render() {
    const elements = LogotypeContent.map(array =>
      // console.log(array.src);
      // console.log(array.text);
      <LogotypeContainer
        SrcLogo = {array.src}
        Alt     = {array.alt}
        Text    = {array.text}
        key     = {array.key}
        Title   = {array.title}
      />
    )
    return (
      <div className="SectionLogotype">
          {elements}
      </div>
    );
  }
}

export default SectionLogotype;
