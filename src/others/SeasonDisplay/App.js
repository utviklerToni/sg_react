// small app to display season

import React, { Component } from 'react';
import LoadingSpinner from './LoadingSpinner';
import SeasonDisplay from './SeasonDisplay';

class App extends Component {
	state = { lat: null, errorMessage: '' };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: position.coords.latitude }),
			(err) => this.setState({ errorMessage: err.message })
		);
	}

	render() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		}

		return <LoadingSpinner msg='accept the location request' />;
	}
}

export default App;
