import React, { Component } from 'react';
import './TextZoneMobile.scss';


class TextZoneMobile extends Component {

  render() {
    return (
      <div className={"TextZoneMobile Margin-Auto " +this.props.position}
        style={{color: this.props.color}}>
        <div className="Title-Text">{this.props.title}</div>
        <div className="Content-Text">{this.props.content}</div>
        <div className="Legend-Text">{this.props.legend}</div>
      </div>
    );
  }
}

export default TextZoneMobile;
