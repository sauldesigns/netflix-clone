import React from 'react';
import './Homepage.css';
import Row from '../../components/Row';
import Banner from '../../components/Banner';
import Nav from '../../components/Nav';
import requests from '../../requests';
import { useStateValue } from '../../provider/StateProvider';

function Homepage() {
	return (
		<div className='app'>
			<Nav name='User' />
			<Banner />
			<Row
				isLargeRow
				title='NETFLIX ORIGINALS'
				fetchUrl={requests.fetchNetflixOriginal}
			/>
			<Row title='Trending Now' fetchUrl={requests.fetchTrending} />
			<Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
			<Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
			<Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
			<Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
			<Row
				title='Documentaries Movies'
				fetchUrl={requests.fetchDocumentaries}
			/>
		</div>
	);
}

export default Homepage;
