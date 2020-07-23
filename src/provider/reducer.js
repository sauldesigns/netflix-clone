export const initialState = {
	favoriteMovies: [],
};

function reducer(state, action) {
	switch (action.type) {
		case 'ADD_TO_FAVORITE':
			break;
		case 'REMOVE_FROM_FAVORITE':
			break;
		default:
			return state;
	}
}

export default reducer;
