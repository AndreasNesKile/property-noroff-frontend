import React, { Component } from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import './GuestDetails.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
let QRCode = require('qrcode');

export default class GuestDetails extends Component {
	state = {
		images: [
			{
				id: 1,
				src: 'https://i.imgur.com/sVXbEbh.png',
				text: 'Utsiden av huset'
			},
			{
				id: 2,
				src: 'https://i.imgur.com/FHtQbYT.png',
				text: 'Innsiden av huset'
			}
		],
		position: [51.505, -0.09],
		showQrCode: false
	};

	getQrCodeofUlr() {
		QRCode.makeCode(window.location.href);
	}
	componentDidMount() {
		if (this.state.showQrCode) {
			var canvas = document.getElementById('canvas');
			QRCode.toCanvas(canvas, window.location.href, function(error) {
				if (error) console.error(error);
			});
		}
	}

	render() {
		return (
			<section className="guest-details text-center mb-4 pb-5">
				<h2 className="pt-4">{this.props.property.name ? this.props.property.name : ''}</h2>
				<Container className="mt-5">
					<Row>
						<Col>
							<Carousel className="carousel-img" id="carousel">
								{this.state.images.map((img) => (
									<Carousel.Item key={img.id}>
										<img src={img.src} className=" img-carousel" alt="property" />
										<Carousel.Caption>
											<h4>{img.text}</h4>
										</Carousel.Caption>
									</Carousel.Item>
								))}
							</Carousel>
						</Col>
					</Row>
				</Container>
				<hr />
				<Container className="container-fluid pb-2 guest-info-container">
					<Row className="leaflet-row">
						<Container>
							<Row className="d-flex justify-content-around">
								<spa>
									<span className="type-style">Address: </span>
									{this.props.property.line_1 ? this.props.property.line_1 : ''}
								</spa>
								<span>
									<span className="type-style">Type: </span>
									{this.props.property.propertyType ? this.props.property.propertyType : 'Apartment'}
								</span>
								<span>
									<span className="type-style">City: </span>
									{this.props.property.city ? this.props.property.city : 'N/A'}
								</span>
							</Row>
						</Container>
						<Col
							xs={12}
							sm={{ span: 8, offset: 2 }}
							className="d-flex justify-content-around dark-bg leaflet-col"
						>
							<Map center={this.state.position} zoom={19} className="leaflet-map">
								<TileLayer
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
								/>
								<Marker position={this.state.position}>
									<Popup>
										A pretty CSS3 popup.
										<br />
										Easily customizable.
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
// <Col xs={12} sm={{ span: 5 }} className="qrcode-col border-bottom dark-bg">
// <Row className="d-flex p-4 justify-content-between">
// <p>
// 	<span className="type-style">Type: </span>
// 	{this.props.property.propertyType
// 		? this.props.property.propertyType
// 		: 'Apartment'}
// </p>
// <p>
// 	<span className="type-style">Address: </span>
// 	{this.props.property.line_1 ? this.props.property.line_1 : ''}
// </p>
// </Row>
// <Row className="d-flex justify-content-around">
// <canvas id="canvas"></canvas>
// </Row>
// </Col>
