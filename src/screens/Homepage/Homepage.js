import React from 'react';
import './Homepage.css';
import Row from '../../components/Row';
import Banner from '../../components/Banner';
import Nav from '../../components/Nav';
import requests from '../../requests';
import * as TITLES from '../../constants/titles';
function Homepage() {
	return (
		<div className='app'>
			<Nav name='User' />
			<Banner />
			<Row
				isLargeRow
				title={TITLES.NETFLIX_ORIGIANLS}
				fetchUrl={requests.fetchNetflixOriginal}
			/>
			<Row title={TITLES.TRENDING_NOW} fetchUrl={requests.fetchTrending} />
			<Row title={TITLES.TOP_RATED} fetchUrl={requests.fetchTopRated} />
			<Row title={TITLES.ACTION} fetchUrl={requests.fetchActionMovies} />
			<Row title={TITLES.COMEDY} fetchUrl={requests.fetchComedyMovies} />
			<Row title={TITLES.HORROR} fetchUrl={requests.fetchHorrorMovies} />
			<Row title={TITLES.DOCUMENTARY} fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default Homepage;
