import React from 'react';
import { Container, Grid, Image, List, Item, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Result = props => {
	return (
		<Container>
			<Header>검색어 : 사무엘 잭슨이 고양이 쓰다듬는 영화</Header>
			<Item.Group>
				<Item style={{ border: '1px solid #ccc', padding: '1.5rem' }}>
					<Item.Image size="tiny" src="/images/movie1.jpg" />
					<Item.Content>
						<Item.Header as="a">캡틴 마블</Item.Header>
						<Grid>
							<Grid.Column width={3}>
								<Item.Description>
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
								</Item.Description>
							</Grid.Column>
							<Grid.Column width={13}>
								<Item.Extra>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus soluta rerum
									assumenda sapiente ipsum. Voluptatibus suscipit distinctio in dignissimos error quos
									modi molestias nihil, laudantium, provident molestiae dicta voluptates
									repudiandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus soluta
									rerum assumenda sapiente ipsum. Voluptatibus susci
								</Item.Extra>
							</Grid.Column>
						</Grid>
					</Item.Content>
				</Item>
			</Item.Group>
		</Container>
	);
};

const mapStateToProps = state => ({
	search: state.search
});

export default connect(mapStateToProps, {})(Result);
