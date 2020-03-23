import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import './BuyerDetails.css';
export default class BuyerDetails extends Component {
	render() {
		return (
			<section className="buyer-section pt-3" id="buyer-section">
				<Container>
					<h2 className="text-center buyer-heading">Additional Details</h2>
				</Container>
				<Row className="buyer-details-row">
					<Col xs={{ span: 8, offset: 2 }} sm={{ span: 2, offset: 5 }} md={{ span: 2, offset: 5 }}>
						<ListGroup className="mt-2">
							<ListGroupItem className=" d-flex justify-content-between" style={{ minWidth: '91px' }}>
								<b>City:</b>
								<span>{this.props.property.city ? this.props.property.city : 'No city specified'}</span>
							</ListGroupItem>
						</ListGroup>
					</Col>
				</Row>
				<Row className="mt-3 buyer-details-row ">
					<Col xs={{ span: 8, offset: 2 }} sm={{ span: 5, offset: 1 }} md={{ span: 4, offset: 2 }}>
						<ListGroup>
							<ListGroupItem className="d-flex justify-content-between ">
								<b>Building Number:</b>
								<span>{this.props.property.line_1 ? this.props.property.line_1 : 'N/A'}</span>
							</ListGroupItem>
							<ListGroupItem className=" d-flex justify-content-between ">
								<b>Apartment Number:</b>
								<span>{this.props.property.line_2 ? this.props.property.line_2 : 'N/A'}</span>
							</ListGroupItem>
						</ListGroup>
					</Col>
					<Col
						xs={{ span: 8, offset: 2 }}
						sm={{ span: 5, offset: 0 }}
						md={{ span: 4, offset: 0 }}
						className="builded-col"
					>
						<ListGroup>
							<ListGroupItem className=" d-flex justify-content-between ">
								<b>Built:</b>
								<span>
									{this.props.property.createdAt
										? this.props.property.createdAt.substr(0, 10)
										: 'N/A'}
								</span>
							</ListGroupItem>
							<ListGroupItem className="d-flex justify-content-between">
								<b>Last Renovated:</b>
								<span>
									{this.props.property.lastRenovated
										? this.props.property.lastRenovated.substr(0, 10)
										: 'Not renovated'}
								</span>
							</ListGroupItem>
						</ListGroup>
					</Col>
				</Row>
			</section>
		);
	}
}
