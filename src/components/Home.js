import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';

const Home = props => {
	const movies = props.search.result.map(movie => {
		return (
			<Grid.Column>
				<MovieCard movieInfo={movie} />
			</Grid.Column>
		);
	});
	return (
		<Container style={{ marginTop: '20px' }} textAlign="center">
			<Grid columns={3}>{movies}</Grid>
		</Container>
	);
};

const mapStateToProps = state => ({
	search: state.search
});

export default connect(mapStateToProps, {})(Home);
