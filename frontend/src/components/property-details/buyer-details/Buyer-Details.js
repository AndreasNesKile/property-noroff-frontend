import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import './BuyerDetails.css';
export default class BuyerDetails extends Component {
	render() {
		return (
			<section className="buyer-section pt-3" id="buyer-section">
				<Container>
					<h2 className="text-center">Additional Details</h2>
				</Container>
				<Row className="buyer-details-row">
					<Col md={{ span: 4, offset: 4 }} sm={{ span: 6, offset: 3 }} xs={12} className="col-md-offset-4">
						<ListGroup className="mb-5">
							<ListGroupItem className="d-flex justify-content-between">
								<b>City:</b>
								<span>{this.props.property.city ? this.props.property.city : 'No city specified'}</span>
							</ListGroupItem>
							<ListGroupItem className="d-flex justify-content-between">
								<b>Building Number:</b>
								<span>{this.props.property.line_1 ? this.props.property.line_1 : 'N/A'}</span>
							</ListGroupItem>
							<ListGroupItem className="d-flex justify-content-between ">
								<b>Appartment Number:</b>
								<span>{this.props.property.line_2 ? this.props.property.line_2 : 'N/A'}</span>
							</ListGroupItem>
							<ListGroupItem className="d-flex justify-content-between ">
								<b>Built:</b>
								<span>
									{this.props.property.createdAt
										? this.props.property.createdAt.substr(0, 10)
										: 'N/A'}
								</span>
							</ListGroupItem>
							<ListGroupItem className="d-flex justify-content-between">
								<b>Last Renovated:</b>
								<i>Last renovated should be here</i>
							</ListGroupItem>
						</ListGroup>
					</Col>
				</Row>
			</section>
		);
	}
}
