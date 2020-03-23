import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import './AgentDetails.css';

export default class AgentDetails extends Component {
	componentDidMount() {
		this.appendTimeLineObjects();
	}
	appendTimeLineObjects() {
		this.props.property.renovations.forEach((ren, index) => {
			let renovation, renHeading, renTime;
			renovation = document.createElement('div');
			renHeading = document.createElement('h3');
			renTime = document.createElement('p');
			renHeading.innerHTML = `${ren.dateTo}`.substr(0, 4);
			renTime.innerHTML = `${ren.description}`;
			renovation.setAttribute('class', 'timeline-content');
			renovation.appendChild(renHeading);
			renovation.appendChild(renTime);

			if (index % 2 === 0) {
				document.getElementById('left-timeline').appendChild(renovation);
			} else {
				document.getElementById('right-timeline').appendChild(renovation);
			}
		});
	}

	render() {
		return (
			<section className="text-center mt-2 agent-details">
				<Container className="mt-5">
					<h1>Agent Details</h1>
					<Row className="mt-5">
						<Col xs={{ span: 10, offset: 1 }} sm={{ span: 6, offset: 0 }} className="mt-3">
							<h3>History of owners</h3>
							<ListGroup>
								{this.props.property.ownershipLogs.length > 0 ? (
									this.props.property.ownershipLogs.map((loopowner, index) => (
										<ListGroupItem className=" d-flex justify-content-between" key={index}>
											<b>Name:</b>
											<i>{loopowner.owner.name + ' ' + loopowner.owner.surname}</i>
										</ListGroupItem>
									))
								) : (
									<ListGroupItem>
										<b>No previous owners.</b>
									</ListGroupItem>
								)}
							</ListGroup>
						</Col>
						<Col xs={{ span: 10, offset: 1 }} sm={{ span: 6, offset: 0 }} className="mt-3">
							<h3>Current Owner:</h3>
							{this.props.property.currentOwner ? (
								<ListGroup>
									<ListGroupItem className=" d-flex justify-content-between">
										<b>Name:</b>
										<i>
											{this.props.property.currentOwner.name
												? this.props.property.currentOwner.name +
												  ' ' +
												  this.props.property.currentOwner.surname
												: 'No name available'}
										</i>
									</ListGroupItem>
									<ListGroupItem className=" d-flex justify-content-between">
										<b>Phone-number:</b>
										<i>
											{this.props.property.currentOwner.phone
												? this.props.property.currentOwner.phone
												: 'No number available'}
										</i>
									</ListGroupItem>
									<ListGroupItem className=" d-flex justify-content-between">
										<b>E-mail:</b>
										<i>
											{this.props.property.currentOwner.email
												? this.props.property.currentOwner.email
												: 'No email available'}
										</i>
									</ListGroupItem>
								</ListGroup>
							) : (
								<ListGroup>
									<ListGroupItem className=" d-flex justify-content-around">
										<b>This property has no current owner</b>
									</ListGroupItem>
								</ListGroup>
							)}
						</Col>
					</Row>
					<Row className="mt-5">
						<Col xs={{ span: 10, offset: 1 }}>
							<h3>Property value:</h3>
							<ListGroup>
								<ListGroupItem className=" d-flex justify-content-around align-items-center valuebox rounded-0">
									<b>
										{this.props.property.value ? '$ ' + this.props.property.value + '.00' : 'N/A'}
									</b>
								</ListGroupItem>
							</ListGroup>
						</Col>
						<Col xs={{ span: 10, offset: 1 }}>
							<h3 className="mt-5">Renovation History:</h3>
							<Container className="timeline-container">
								<div className="timeline">
									<div className="timeline-left timeline-child-container" id="left-timeline"></div>
									<div className="timeline-right timeline-child-container" id="right-timeline"></div>
								</div>
							</Container>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}
