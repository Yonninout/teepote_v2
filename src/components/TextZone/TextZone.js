import React, { Component } from 'react';
import './TextZone.scss';


class TextZone extends Component {

  render() {
    return (
      <div className={"TextZone Margin-Auto " +this.props.position}
        style={{color: this.props.color}}>
        <div className="Title-Text">{this.props.title}</div>
        <div className="Content-Text">{this.props.content}</div>
        <div className="Legend-Text">{this.props.legend}</div>
      </div>
    );
  }
}

export default TextZone;
