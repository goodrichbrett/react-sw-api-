import React, { Component } from 'react';
import * as APIMethods from '../../services/sw-api';
import { Link } from 'react-router-dom';

class StarshipDetails extends Component {
	state = {
		url: this.props.location.state.starshipTitle.url,
		starshipDetails: {},
	};

	async componentDidMount() {
		const starshipDetails = await APIMethods.getDetails(this.state.url);
		this.setState({ starshipDetails });
	}

	render() {
		const { starshipDetails } = this.state;
		return (
			<div>
				{starshipDetails.name ? (
					<>
						<h2>{starshipDetails.name}</h2>
						<h3>
							Max Atmosphering Speed:{' '}
							{starshipDetails.max_atmosphering_speed}
						</h3>
						<h3>Crew: {starshipDetails.crew}</h3>
						<h3>Passengers: {starshipDetails.passengers}</h3>
						{starshipDetails.pilots.length ? (
							<>
								<h3>
									{' '}
									Pilots: {starshipDetails.pilots.length}
								</h3>
							</>
						) : (
							<p>There are no pilots for this ship.</p>
						)}
						<Link
							to={{
								pathname: '/',
								starshipState: { starshipDetails },
							}}
						>
							RETURN
						</Link>
					</>
				) : (
					<>
						<p>Loading starship details...</p>
					</>
				)}
			</div>
		);
	}
}

export default StarshipDetails;
