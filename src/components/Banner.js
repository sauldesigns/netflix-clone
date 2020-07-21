import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import requests from '../requests';
import './Banner.css';

function Banner() {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginal);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
		}
		fetchData();
	}, []);
	return <header></header>;
}

export default Banner;
