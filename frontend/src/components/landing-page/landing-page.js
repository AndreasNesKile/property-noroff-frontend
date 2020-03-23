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
				<Card className="text-center landing-card gradient-border landing-page-card card">
					<Card.Header className="landing-page-card-header">
						<img className="img-fluid align-top" src="/property.png" alt="logo" />
					</Card.Header>
					<Card.Body className="landing-page-card-body">
						<Card.Title>Find your next home</Card.Title>
						<Link to="/properties">
							<Button className="landing-page-btn">Start looking</Button>
						</Link>
					</Card.Body>
				</Card>
			</Container>
		);
	}
}
