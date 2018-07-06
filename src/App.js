import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class App extends Component {
  render() {
    return (
      <div className="App">
				<h1>Hello, world!</h1>
				<SayHay name = "Yura" link = "www.google.com"/>
      </div>
    );
  }
}

function SayHay(props) {
	return (
		<div>
			<h2>Name: {props.name}</h2>
			<h2>Link: <a href={props.link} >link</a> </h2>
		</div>
	);
}

export default App;
