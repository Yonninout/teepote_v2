import React, { Component } from 'react';
import './SectionWhoMobile.scss';
import {WhoTitle, WhoContent, WhoLegend} from '../common/TextVars'
import TextZoneMobile from '../TextZone/TextZoneMobile'
import Phone from '../Phone/Phone'

class SectionWhoMobile extends Component {
  render() {
    return (
      <div className="SectionWhoMobile" style={{}}>
        <TextZoneMobile
          color    = '#1b8d8c'
          title    = {WhoTitle}
          content  = {WhoContent}
          legend   = {WhoLegend}
        />
      </div>
    );
  }
}

export default SectionWhoMobile;
