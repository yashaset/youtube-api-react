import axios from 'axios';
const KEY = 'AIzaSyAECfIMOWfAHYdro-SmZaX_g4rmjxSHHA8';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	},
});
