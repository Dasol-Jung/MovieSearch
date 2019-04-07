import React from 'react';
import { Container, Input, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchMovie } from '../actions/searchAction';

const Search = props => {
	return (
		<Container textAlign="center">
			<Form>
				<Input />
				<Button>
					<Link
						to={{
							pathname: '/search',
							search: '?searchKey=captainmarvel'
						}}
					>
						Search
					</Link>
				</Button>
			</Form>
		</Container>
	);
};

const mapStateToProps = state => ({
	search: state.search
});

export default connect(mapStateToProps, { searchMovie })(Search);
