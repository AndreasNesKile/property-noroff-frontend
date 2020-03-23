import React, { Component } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './landingpage.css';

export default class landingpage extends Component {
	state = {
		role: null
	};

	render() {
		return (
			<Container className="landing-page-container mt-5">
				<Card className="text-center landing-card gradient-border">
					<Card.Header>
						<img className="img-fluid align-top" src="/property.png" alt="logo" />
					</Card.Header>
					<Card.Body>
						<Card.Title>Find your next home</Card.Title>
						<Link to="/properties">
							<Button variant="success">Start looking</Button>
						</Link>
					</Card.Body>
				</Card>
			</Container>
		);
	}
}
