import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Title from './components/Title/Title';
import SectionWho from './components/SectionWho/SectionWho';
import SectionWhat from './components/SectionWhat/SectionWhat';
import SectionLogotype from './components/SectionLogotype/SectionLogotype';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Title/>
        <SectionWho />
        <SectionWhat />
        <SectionLogotype />
      </div>
    );
  }
}

export default App;
