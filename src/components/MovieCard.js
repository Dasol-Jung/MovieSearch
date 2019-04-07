import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const MovieCard = props => {
	const { id, name, summary, releaseDate, genre, imgURL } = props.movieInfo;
	return (
		<Link to={'/movie/' + id}>
			<Card>
				<Image src="images/movie1.jpg" />
				<Card.Content>
					<Card.Header>{name}</Card.Header>
					<Card.Meta>
						<span className="date">개봉일 : {releaseDate}</span>
					</Card.Meta>
					<Card.Description>줄거리 : {summary}</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<a>장르 : {genre}</a>
				</Card.Content>
			</Card>
		</Link>
	);
};

export default MovieCard;
