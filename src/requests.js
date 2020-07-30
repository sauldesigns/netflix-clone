const requests = {
	fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
	fetchNetflixOriginal: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
	fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
	fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
	fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
	fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
};

export default requests;
