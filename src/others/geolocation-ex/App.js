// mini example - displaying latitude and error message if cant access geo location of the users

import React from 'react';

class App extends React.Component {
	// first function to be called is constructor()

	// 1st way
	// ===> two ways to init the state.
	// constructor(props) {
	// super(props);

	// state object & this is the only exception where we do direct assignment to state object
	// state initialized when the component is created
	// this.state = { lat: null, errorMessage: '' };
	// }
	// 2nd way
	state = { lat: null, errorMessage: '' };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			// position is a call back function and wont run until we  return constructor()
			(position) =>
				// here we avoid the direct assignment of the state object
				// for ex - this.state.lat = position.coords.latitude ===> we never do this. except the above exception
				// in-built component
				this.setState({
					lat: position.coords.latitude,
				}),
			(err) => this.setState({ errorMessage: err.message })
		);
	}

	render() {
		if (this.state.errorMessage && !this.state.lat) {
			return <h1>Error: {this.state.errorMessage}</h1>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			return <h1>Latitude: {this.state.lat}</h1>;
		}

		return <h1>Loading...</h1>;
	}
}

export default App;
