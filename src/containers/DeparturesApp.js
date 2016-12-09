import React, { Component } from 'react';


import Clock from '../components/Clock';
import CountdownContainer from '../containers/CountdownContainer';
import DeparturesTableContainer from '../containers/DeparturesTableContainer';

export default class DeparturesApp extends Component {
  render() {
    return (
      <div className="departuresapp">
        <h1>MBTA Departures Table</h1>
        <div className="meta-info">
            <Clock />
            <CountdownContainer timerLength="300000"/>
        </div>
        <DeparturesTableContainer />
      </div>
    );
  }
}