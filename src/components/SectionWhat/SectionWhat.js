import React, { Component } from 'react';
import './SectionWhat.scss';
import {WhoTitle, WhoContent, WhoLegend} from '../common/TextVars'
import TextZone from '../TextZone/TextZone'
import phones from './ecran_iphone.png'

class SectionWhat extends Component {
  render() {
    return (
      <div className="SectionWhat">
        <TextZone
          color = "White"
          position = "Margin-Section-What"
          title   = {WhoTitle}
          content = {WhoContent}
          legend  = {WhoLegend}
        />
        <div className='Phones'>
          <img src = {phones} alt = "Web design sur écran de smartphones" />
        </div>
      </div>
    );
  }
}

export default SectionWhat;
