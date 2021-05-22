import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.imageRefs = React.createRef();
	}

	componentDidMount() {
		this.imageRefs.current.addEventListener('load', this.setSpans);
	}

	setSpans = () => {
		console.log(this.imageRefs.current.clientHeight);
	};

	render() {
		const { description, urls } = this.props.image;

		return (
			<div>
				<img src={urls.regular} alt={description} ref={this.imageRefs} />
			</div>
		);
	}
}
export default ImageCard;
