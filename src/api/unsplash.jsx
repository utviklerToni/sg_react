import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID xD--3GbHJ1RB20HAagjBp_XowMughvE3xTXMjm9hMdI',
	},
});
