import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import './AgentDetails.css';

export default class AgentDetails extends Component {
	render() {
		return (
			<section className="border border-darken-4 text-center mt-2">
				<Container>
					<h1>Agent Details</h1>
					<Row>
						<Col xs={12} sm={6}>
							<h3>History of owners</h3>
							<ListGroup>
								<ListGroupItem className="border border-bottom-0">One owner.</ListGroupItem>
								<ListGroupItem className="border border-bottom-0">One owner.</ListGroupItem>
								<ListGroupItem className="border border-bottom-0">One owner.</ListGroupItem>
							</ListGroup>
						</Col>
						<Col xs={12} sm={6}>
							<h3>Current Owner:</h3>
							<p>{this.props.property.owner ? this.props.property.owner : 'Mikael Larsen'}</p>
						</Col>
					</Row>
					<Row>
						<Col xs={12} sm={6}>
							<h3>Owner contact info:</h3>
							<p>{this.props.property.owner ? this.props.property.owner : '95813376'}</p>
						</Col>
						<Col xs={12} sm={6}>
							<h3>Property value:</h3>
							<p>{this.props.property.value ? this.props.property.value + '.00$' : 'N/A'}</p>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<h3>Renovation History:</h3>
							<p>{this.props.property.owner ? this.props.property.owner : '95813376'}</p>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}
