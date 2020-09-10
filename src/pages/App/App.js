import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import StarshipList from '../StarshipList/StarshipList';
import StarshipDetails from '../StarshipDetails/StarshipDetails';

class App extends Component {
	state = {
		//
	};

	render() {
		return (
			<>
				<Route exact path="/" render={() => <StarshipList />} />
				<Route
					exact
					path="/starship"
					render={({ location }) => (
						<StarshipDetails location={location} />
					)}
				/>
			</>
		);
	}
}

export default App;
