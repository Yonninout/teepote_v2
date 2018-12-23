import React, { Component } from 'react';
import './ContactMobile.scss';

const AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'eu-west-1'});
var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = credentials;
// Create sendEmail params
var params = {
  Destination: { /* required */
    CcAddresses: [
      'yonni.tabeling@teepote.com',
      /* more items */
    ],
    ToAddresses: [
      'yonni.tabeling@teepote.com',
      /* more items */
    ]
  },
  Message: { /* required */
    Body: { /* required */
      Html: {
       Charset: "UTF-8",
       Data: "HTML_FORMAT_BODY"
      },
      Text: {
       Charset: "UTF-8",
       Data: "TEXT_FORMAT_BODY"
      }
     },
     Subject: {
      Charset: 'UTF-8',
      Data: 'Test email'
     }
    },
  Source: 'SENDER_EMAIL_ADDRESS', /* required */
  ReplyToAddresses: [
      'yonni.tabeling@teepote.com',
    /* more items */
  ],
};

var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected state
sendPromise.then(
  function(data) {
    console.log(data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });


class ContactMobile extends Component {
  constructor(props) {
  super(props);
  this.state = {
    lastName: '',
    firstName: '',
    society: '',
    email: '',
    phoneNumber: '',
    object: '',
    message: '',

  };
  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

}

handleSubmit(event) {
  console.log(this.state);
   event.preventDefault();
   return false;
}

handleInputChange(event) {
  const target = event.target;
  const value = target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
  // console.log(this.state);
  }

render() {

    return (
      <div className="ContactMobile" onClick={this.props.onClick}>
        <div className="Intro">
          <div className="Head">
            Contactez nous
          </div>
          <div className="ContactText">Téléphones : </div>
          <div className="Contact">CV : 07 82 69 56 79</div>
          <div className="Contact">YT : 06 14 72 20 83</div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nom * :
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Prénom * :
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleInputChange} />
          </label>
          <label>
            email * :
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleInputChange} />
            </label>
          <label>
            Téléphone :
            <input
              name="phoneNumber"
              type="tel"
              value={this.state.phoneNumber}
              onChange={this.handleInputChange} />
            </label>
          <label>
            Societé :
            <input
              name="society"
              type="text"
              value={this.state.society}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Objet * :
            <input
              name="object"
              type="text"
              value={this.state.object}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Message * :
            <textarea
              name="message"
              type="text"
              rows = {7}
              value={this.state.message}
              onChange={this.handleInputChange} />
          </label>
          <p>* : Champs Obligatoires</p>

          <input type="submit" value="Envoyer"/>
        </form>
      </div>
    );
  }
}

export default ContactMobile;
