import { SEARCH } from '../actions/types';

const initialState = {
	searchKey: '',
	result: [
		{
			title: 'test',
			summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus soluta rerum assumenda
        sapiente ipsum. Voluptatibus suscipit distinctio in dignissimos error quos modi molestias nihil,
        laudantium, provident molestiae dicta voluptates repudiandae?`,
			releaseDate: '2019-05-08',
			genre: 'action, thriller',
			imageURL: `images/movie1.jpg`,
			id: 0
		},
		{
			title: 'test',
			summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus soluta rerum assumenda
        sapiente ipsum. Voluptatibus suscipit distinctio in dignissimos error quos modi molestias nihil,
        laudantium, provident molestiae dicta voluptates repudiandae?`,
			releaseDate: '2019-05-08',
			genre: 'action, thriller',
			imageURL: 'images/movie1.jpg',
			id: 1
		},
		{
			title: 'test',
			summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus soluta rerum assumenda
        sapiente ipsum. Voluptatibus suscipit distinctio in dignissimos error quos modi molestias nihil,
        laudantium, provident molestiae dicta voluptates repudiandae?`,
			releaseDate: '2019-05-08',
			genre: 'action, thriller',
			imageURL: 'images/movie1.jpg',
			id: 2
		},
		{
			title: 'test',
			summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus soluta rerum assumenda
        sapiente ipsum. Voluptatibus suscipit distinctio in dignissimos error quos modi molestias nihil,
        laudantium, provident molestiae dicta voluptates repudiandae?`,
			releaseDate: '2019-05-08',
			genre: 'action, thriller',
			imageURL: `images/movie1.jpg`,
			id: 3
		},
		{
			title: 'test',
			summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus soluta rerum assumenda
        sapiente ipsum. Voluptatibus suscipit distinctio in dignissimos error quos modi molestias nihil,
        laudantium, provident molestiae dicta voluptates repudiandae?`,
			releaseDate: '2019-05-08',
			genre: 'action, thriller',
			imageURL: 'images/movie1.jpg',
			id: 4
		},
		{
			title: 'test',
			summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus soluta rerum assumenda
        sapiente ipsum. Voluptatibus suscipit distinctio in dignissimos error quos modi molestias nihil,
        laudantium, provident molestiae dicta voluptates repudiandae?`,
			releaseDate: '2019-05-08',
			genre: 'action, thriller',
			imageURL: 'images/movie1.jpg',
			id: 5
		}
	]
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SEARCH:
			return {
				...state,
				searchKey: action.payload
			};
		default:
			return state;
	}
}
