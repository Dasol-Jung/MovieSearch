import React from 'react';
import { Container, Grid, Image, List, Header, Divider, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Movie = props => {
	return (
		<Container textAlign="left">
			<Header as="h3">Captain Marvel</Header>
			<List horizontal={true}>
				<List.Item>
					<List.Content>
						<Link>관련도순</Link>
					</List.Content>
				</List.Item>
				<List.Item>
					<List.Content>
						<Link>인기도순</Link>
					</List.Content>
				</List.Item>
				<List.Item>
					<List.Content>
						<Link>개봉일순</Link>
					</List.Content>
				</List.Item>
			</List>
			<Container>
				<Grid>
					<Grid.Row>
						<Grid.Column width="6">
							<Image src="../images/movie1.jpg" />
						</Grid.Column>
						<Grid.Column width="10">
							<Segment>
								<List>
									<List.Item>
										<List.Content>제목 : 캡틴 마블</List.Content>
									</List.Item>
									<List.Item>
										<List.Content>개봉일 : 2019.05.29</List.Content>
									</List.Item>
									<List.Item>
										<List.Content>장르 : 액션</List.Content>
									</List.Item>
									<List.Item>
										<List.Content>국가 : 미국</List.Content>
									</List.Item>
									<List.Item>
										<List.Content>러닝타임 : 129분</List.Content>
									</List.Item>
								</List>
							</Segment>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<Divider />
							<Segment>
								<Header>줄거리 :</Header>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus soluta rerum
									assumenda sapiente ipsum. Voluptatibus suscipit distinctio in dignissimos error quos
									modi molestias nihil, laudantium, provident molestiae dicta voluptates
									repudiandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus soluta
									rerum assumenda sapiente ipsum. Voluptatibus suscipit distinctio in dignissimos
									error quos modi molestias nihil, laudantium, provident molestiae dicta voluptates
									repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
									soluta rerum assumenda sapiente ipsum.
									<br />
									Voluptatibus suscipit distinctio in dignissimos error quos modi molestias nihil,
									laudantium, provident molestiae dicta voluptates repudiandae?Lorem ipsum dolor sit
									amet consectetur adipisicing elit. Possimus soluta rerum assumenda sapiente ipsum.
									Voluptatibus suscipit distinctio in dignissimos error quos modi molestias nihil,
									laudantium, provident molestiae dicta voluptates repudiandae? Lorem ipsum dolor sit
									amet consectetur adipisicing elit. Possimus soluta rerum assumenda sapiente ipsum.
									Voluptatibus suscipit distinctio in dignissimos error quos modi molestias nihil,
									laudantium, provident molestiae dicta voluptates repudiandae?Lorem ipsum dolor sit
									amet consectetur adipisicing elit. Possimus soluta rerum assumenda sapiente ipsum.
									Voluptatibus suscipit distinctio in dignissimos error quos modi molestias nihil,
									laudantium, provident molestiae dicta voluptates repudiandae?
								</p>
							</Segment>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Container>
	);
};

const mapStateToProps = state => ({
	search: state.search
});

export default connect(mapStateToProps, {})(Movie);
