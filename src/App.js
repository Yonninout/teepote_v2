import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import NavBarMobile from './components/NavBar/NavBarMobile';
import Title from './components/Title/Title';
import TitleMobile from './components/Title/TitleMobile';
import SectionWho from './components/SectionWho/SectionWho';
import SectionWhoMobile from './components/SectionWho/SectionWhoMobile';
import SectionWhat from './components/SectionWhat/SectionWhat';
import SectionWhatMobile from './components/SectionWhat/SectionWhatMobile';
import SectionLogotype from './components/SectionLogotype/SectionLogotype';
import SectionProjects from './components/SectionProjects/SectionProjects';
import ContactMobile from './components/ContactMobile/ContactMobile.js';

import './App.scss';
import {isMobile} from 'react-device-detect';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      menu:false,
      classMenu: ''
    }
    this.removeMenu = this.removeMenu.bind(this);
    this.showMenu = this.showMenu.bind(this);
  }


  removeMenu = () => {
    this.setState({
      classMenu: ' Out',
    })
    setTimeout(() => {
      this.setState({
        menu:false,
        classMenu: '',}
      )},500)
    console.log('ooooo')
  }
  showMenu = () => {
    this.setState({
      menu:true,
      classMenu: ' In',
    })
    console.log('yoyoyoyo')
  }
  renderContent = () => {
    if (isMobile) {
      return (
      <div className="App" >
        <NavBarMobile
          show= {this.showMenu}
          remove = {this.removeMenu}
          menu={this.state.menu}
          classMenu={this.state.classMenu}
        />
        <TitleMobile onClick={this.removeMenu}/>
        <SectionWhoMobile onClick={this.removeMenu}/>
        <SectionWhatMobile onClick={this.removeMenu}/>
        <ContactMobile onClick={this.removeMenu}/>
      </div>)
    }
    return (
      <div className="App">
        <NavBar />
        <Title />
        <SectionWho />
        <SectionWhat />
        <SectionLogotype />
        <SectionProjects />
      </div>
    );
  }

  render() {
    return this.renderContent();
  }
}
export default App;
