import React, { Component } from 'react';
import { Container, Row, Col, Carousel, ListGroup, ListGroupItem } from 'react-bootstrap';
import './GuestDetails.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export default class GuestDetails extends Component {
	//The display in the detailscomponent that always will be shown
	render() {
		return (
			<section className="guest-details text-center  pb-5">
				<Container className="mt-5 carousel-container container-fluid mb-3">
					<Row>
						<Col className="m-0 p-0">
							<Carousel className="carousel-guest" id="carousel">
								{this.props.property.propertyImages.map((img, index) => (
									<Carousel.Item key={index}>
										<img
											src={img.url}
											className="img-carousel embed-responsive"
											alt={img.caption}
										/>
										<Carousel.Caption>
											<h4>{img.caption}</h4>
										</Carousel.Caption>
									</Carousel.Item>
								))}
							</Carousel>
							<h2 className="pt-4">{this.props.property.name ? this.props.property.name : ''}</h2>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row>
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
					</Row>
				</Container>
				<Container className="container-fluid guest-info-container">
					<Row className="leaflet-row">
						<Container>
							<Row className="d-flex justify-content-center">
								<span className="m-4">
									<span className="type-style">Type: </span>
									{this.props.property.propertyType ? this.props.property.propertyType : 'N/A'}
								</span>
								<span className="m-4">
									<span className="type-style">City: </span>
									{this.props.property.city ? this.props.property.city : 'N/A'}
								</span>
								<span className="m-4">
									<span className="type-style">Address: </span>
									{this.props.property.line_1 ? this.props.property.line_1 : ''}
								</span>
							</Row>
						</Container>
						<Col xs={12} className="d-flex justify-content-around dark-bg leaflet-col">
							<Map
								center={[this.props.property.xCoordinate, this.props.property.yCoordinate]}
								zoom={19}
								className="leaflet-map"
							>
								<TileLayer
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
								/>
								<Marker position={[this.props.property.xCoordinate, this.props.property.yCoordinate]}>
									<Popup>
										{this.props.property.line_1
											? this.props.property.line_1 + ' ' + this.props.property.line_2
											: ''}
									</Popup>
								</Marker>
							</Map>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}
