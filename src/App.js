import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
import './App.css'

class App extends Component {
	constructor(){
		super()
		this.state={
			robots:robots,
			searchfield:''
		}
	}

	onSearchChance = (event)=>{
		this.setState({searchfield: event.target.value})
	}

	render(){
		const filteredRobots = this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		});
		return(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChance}/>
				<CardList robots={filteredRobots}/>
			</div>
		);
	}
}

export default App;