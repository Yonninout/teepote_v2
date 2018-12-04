import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {

  render() {
    return (
      <div className="Footer">
        <div className="FooterTitle">
          {this.props.Title}
        </div>
        <div className="Text">
          {this.props.Text}
        </div>
      </div>
    );
  }
}

export default Footer;
