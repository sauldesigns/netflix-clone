import React from 'react';
import './App.css';
import Row from './components/Row';
import Banner from './components/Banner';
import requests from './requests';

function App() {
	return (
		<div className='App'>
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

export default App;
