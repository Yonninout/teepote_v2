import React, { Component } from 'react';
import './ContactMobile.scss';



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

   const {lastName,firstName,society,email,phoneNumber,object,message} = this.state;
   fetch('https://formspree.io/yonni.tabeling@teepote.com', {
       method: 'POST',
       // headers : new Headers(),
       body:JSON.stringify(
         { lastName: {lastName},
           firstName: {firstName},
           society: {society},
           email: {email},
           phoneNumber: {phoneNumber},
           object: {object},
           message: {message},
         }
       )
   }).then((res) => {
     
     console.log(res);
   })
   .then((data) =>  console.log(data))
   .catch((err)=>console.log(err))

   return false;
}

postData(event){
    event.preventDefault();



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
