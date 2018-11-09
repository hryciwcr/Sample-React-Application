import React from 'react';
import { Component } from 'react';
import CardList from '../Components/CardList.js';
import SearchBox from '../Components/SearchBox.js';
//import { robots } from './robots.js';
import './App.css';
import Scroll from '../Components/Scroll.js';

// const state = {
// 	robots: robots,
// 	searchfield: ''
// }

// function App() {
// 	return (
// 		<div className="App">
// 			<h1>RoboFriends</h1>
// 			<SearchBox />
// 			<CardList />
// 		</div>
// 	);
// }


// const App = () => {

// }

class App extends Component {
	constructor () {
		super()
		this.state = {
			robots: [],
//			robots: robots,
			searchfield: ''
		}
		console.log("constructor");
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		console.log("render");
		if (robots.length === 0) {
			return <h1>Loading</h1>
		} else {
			return (
				<div className="App">
					<h1>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			);
		}
	}

	componentDidMount() {
		console.log("componentDidMount");
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}

}

export default App;