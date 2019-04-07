import React from 'react';
import { Header, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Menubar = props => {
	return (
		<Menu>
			<Header style={{ margin: '0 auto' }} as="h1">
				<Link to="/">Movie Search</Link>
			</Header>
		</Menu>
	);
};

export default Menubar;
