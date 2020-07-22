import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import requests from '../requests';
import './Banner.css';

const base_imgUrl = 'https://image.tmdb.org/t/p/original/';
function Banner() {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginal);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length)
				]
			);
		}
		fetchData();
	}, []);

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + '...' : str;
	}

	return (
		<header
			className='banner'
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url("${base_imgUrl}${movie?.backdrop_path}")`,
				backgroundPosition: 'top center',
			}}
		>
			<div className='banner__contents'>
				<h1 className='banner__title'>
					{movie?.title || movie?.name || movie?.original_name}
				</h1>

				<div className='banner__buttons'>
					<button className='banner__button'>Play</button>
					<button className='banner__button'>My List</button>
				</div>
				<h1 className='banner__description'>
					{truncate(movie?.overview, 150)}
				</h1>
			</div>
			<div className='banner--fadeBottom' />
		</header>
	);
}

export default Banner;
