import React from 'react';

const LoadingSpinner = (props) => {
	return (
		<div className='ui active dimmer'>
			{/* please add a message to the props */}
			<div className='ui big text loader'>{props.msg}</div>
		</div>
	);
};

LoadingSpinner.defaultProps = {
	msg: 'Loading...',
};

export default LoadingSpinner;
