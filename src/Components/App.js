import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import '../App.css';
import ImageList from './ImageList';

class App extends React.Component {
	state = { images: [] };

	onSearchSubmit = async (term) => {
		const response = await unsplash.get(
			'https://api.unsplash.com/search/photos',
			{
				params: { query: term },
			}
		);

		this.setState({ images: response.data.results });
	};
	render() {
		return (
			<div className='ui container mTop'>
				<SearchBar onSubmitHandler={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
