import React, { Component } from 'react';
import './SectionWho.scss';
import {WhoTitle, WhoContent, WhoLegend} from '../common/TextVars'
import TextZone from '../TextZone/TextZone'
import Phone from '../Phone/Phone'

class SectionWho extends Component {
  render() {
    return (
      <div className="SectionWho">
        <Phone />
        <TextZone
          title   = {WhoTitle}
          content = {WhoContent}
          legend  = {WhoLegend}
        />
      </div>
    );
  }
}

export default SectionWho;
