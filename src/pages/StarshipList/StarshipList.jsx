import React, { Component } from 'react';
import { getAllStarships } from '../../services/sw-api';
import { Link } from 'react-router-dom';

class StarshipList extends Component {
	constructor() {
		super();
		this.state = {
			results: [],
		};
	}

	async componentDidMount() {
		const starshipData = await getAllStarships();
		console.log(starshipData);
		this.setState({ results: starshipData.results });
	}

	render() {
		return (
			<>
				<h1>Starship List</h1>
				<div className="icon-container">
					{this.state.results.map((starshipTitle) => (
						<div key={starshipTitle.index}>
							<Link
								to={{
									pathname: '/starship',
									state: { starshipTitle },
								}}
							>
								<div id="classDiv">{starshipTitle.name}</div>
							</Link>
						</div>
					))}
				</div>
			</>
		);
	}
}

export default StarshipList;
