import React, { Component } from 'react';

require('dotenv').config();
// process.env.test = lol;
//
// process.env['TEST'] = 'd';
//
//

console.log(process.env)

const sendemail   = require('sendemail').email; // no api key
const email = sendemail.email;
sendemail.set_template_directory('./email');


var person = {
  name : "Jenny",
  email: "yonni.tabeling@teepote.com", // person.email can also accept an array of emails
  subject:"Welcome to DWYL :)"
}

email('welcome', person, function(error, result){
  console.log(' - - - - - - - - - - - - - - - - - - - - -> email sent: ');
  console.log(result);
  console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - -')
})

class App2 extends Component {
  renderContent = () => {
      return (
      <div className="App2" >

      </div>)
  }

  render() {
    return this.renderContent();
  }
}
export default App2;
