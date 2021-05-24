import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = { spans: 0 };

		this.imageRefs = React.createRef();
	}

	componentDidMount() {
		this.imageRefs.current.addEventListener('load', this.setSpans);
	}

	setSpans = () => {
		const height = this.imageRefs.current.clientHeight;

		const spans = Math.ceil(height / 10);

		this.setState({ spans });
	};

	render() {
		const { description, urls } = this.props.image;

		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img
					src={urls.regular}
					alt={description}
					ref={this.imageRefs}
					className='img-dec'
				/>
			</div>
		);
	}
}
export default ImageCard;
