import React, { Component } from 'react';

import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';
import Main from './component/Main';
import Header from './component/Header';
import Menu from './component/Menu';


const HeaderWrapper = styled.header`
	width: 100%;
	height: 49px;
	opacity: 0.8;
	background-color: #242424;
`

const MenuWrapper = styled.div`
	height: 89px;
	padding-top: 20px;
`

class App extends Component {
  render() {
    return (
			<div className="App">
			<HeaderWrapper>
				<Grid>
					<Header />
				</Grid>	
				</HeaderWrapper>
				<MenuWrapper>	
					<Grid>
						<Menu />
					</Grid>
				</MenuWrapper>	
					<Main />
      </div>
    );
  }
}



export default App;
