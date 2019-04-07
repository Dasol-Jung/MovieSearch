import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Menubar from './components/Menubar.js';
import Home from './components/Home.js';
import Search from './components/Search.js';
import Movie from './components/Movie.js';
import Result from './components/Result.js';
import store from './store.js';
import './App.css';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Menubar />
					<Search />
					<Route exact path="/" component={Home} />
					<Route path="/movie/:id" component={Movie} />
					<Route path="/search" component={Result} />
				</Router>
			</Provider>
		);
	}
}

export default App;
