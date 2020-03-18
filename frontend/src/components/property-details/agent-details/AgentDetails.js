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
			<section className="border border-darken-4 text-center mt-2">
				<Container className="mt-5">
					<h1>Agent Details</h1>
					<Row className="mt-5">
						<Col xs={{ span: 8, offset: 2 }} sm={{ span: 5, offset: 1 }} className="mt-3">
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
						<Col xs={{ span: 8, offset: 2 }} sm={{ span: 5, offset: 0 }} className="mt-3">
							<h3>Current Owner:</h3>
							<ListGroup>
								<ListGroupItem className=" d-flex justify-content-between">
									<i>Name:</i>
									<b>
										{this.props.property.currentOwner.name
											? this.props.property.currentOwner.name +
											  ' ' +
											  this.props.property.currentOwner.surname
											: ''}
									</b>
								</ListGroupItem>
								<ListGroupItem className=" d-flex justify-content-between">
									<i>Phone-number:</i>
									<b>{this.props.property.currentOwner.phone}</b>
								</ListGroupItem>
								<ListGroupItem className=" d-flex justify-content-between">
									<i>E-mail:</i>
									<b>{this.props.property.currentOwner.email}</b>
								</ListGroupItem>
							</ListGroup>
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
							{/* <ListGroup className="mt-4">
								{this.props.property.renovations.map((ren, index) => (
									<div className="mb-5 renovation-card" key={index}>
										<h4 className="text-left">
											{ren.description}
										</h4>
										<ListGroupItem className="d-flex justify-content-around align-items-center rounded-0 text-left renovation-list-group-item">
											<span>
												<b>Renovation From date: </b>
												<i>{ren.dateFrom.substr(0, 10)}</i>
											</span>
											<span>
												<b>To date: </b>
												<i>{ren.dateTo.substr(0, 10)}</i>
											</span>
										</ListGroupItem>
									</div>
								))}
							</ListGroup> */}
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
