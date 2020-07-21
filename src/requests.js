import { API_KEY } from './secrets';

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&with_genres=28`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
