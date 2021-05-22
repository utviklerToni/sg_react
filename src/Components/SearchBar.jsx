import React, { Component, Fragment } from 'react';

class SearchBar extends Component {
	// uncontrolled element
	// onInputchange(event) {
	// 	console.log(event.target.value);
	// }
	// uncontrolled element stores the value in the DOM

	// controlled element
	// controlled element stores the value in the react component inside the state object
	state = { term: '' };

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmitHandler(this.state.term);
	};

	render() {
		return (
			<Fragment>
				<div className='ui segment'>
					<form action='ui form' onSubmit={this.onFormSubmit}>
						<div className='field'>
							<label>Image Search</label>
							<input
								type='text'
								onChange={(e) => this.setState({ term: e.target.value })}
								value={this.state.term}
							/>
							<button type='submit'>Search</button>
						</div>
					</form>
				</div>
			</Fragment>
		);
	}
}

export default SearchBar;
