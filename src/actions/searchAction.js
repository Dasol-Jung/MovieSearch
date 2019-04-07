import { SEARCH } from './types';

//Search a movie
export const searchMovie = searchKey => {
	return {
		type: SEARCH,
		payload: searchKey
	};
};
