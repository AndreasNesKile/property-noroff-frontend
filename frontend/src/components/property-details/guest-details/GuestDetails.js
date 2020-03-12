import React, { Component } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
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
				src:
					'https://thumbnails.trvl-media.com/QSbIYpXbUd9tcP08b6rJg-5UKGg=/582x388/smart/filters:quality(60)/images.trvl-media.com/hotels/19000000/18550000/18548500/18548456/b95b6082_z.jpg',
				text: 'Innsiden av huset'
			}
		],
		position: [51.505, -0.09]
	};

	getQrCodeofUlr() {
		QRCode.makeCode(window.location.href);
	}
	componentDidMount() {
		var canvas = document.getElementById('canvas');
		QRCode.toCanvas(canvas, window.location.href, function(error) {
			if (error) console.error(error);
		});
	}
	render() {
		return (
			<section className="guest-details text-center mb-0">
				<h2 className="mt-5">{this.props.property.name ? this.props.property.name : ''}</h2>
				<Container className="mt-5">
					<Row>
						<Col>
							<Carousel>
								{this.state.images.map((img) => (
									<Carousel.Item key={img.id}>
										<img src={img.src} className="img-fluid img-carousel" alt="property" />
										<Carousel.Caption>
											<h4>{img.text}</h4>
										</Carousel.Caption>
									</Carousel.Item>
								))}
							</Carousel>
						</Col>
					</Row>
				</Container>
				<Container className="container-fluid mt-5 guest-info-container">
					<Row>
						<Col xs={12} sm={6} className="border border-aqua">
							<Row className="d-flex p-3 justify-content-between">
								<p>
									<span>Type: </span>
									{this.props.property.propertyType ? this.props.property.propertyType : 'Apartment'}
								</p>
								<p>
									<span>Adress: </span>
									{this.props.property.line_1 ? this.props.property.line_1 : ''}
								</p>
							</Row>
							<Row className="border border-aqua d-flex justify-content-around">
								<canvas id="canvas"></canvas>
							</Row>
						</Col>
						{/* Leaflet column */}
						<Col xs={12} sm={6} className="border border-aqua d-flex justify-content-around leaflet-col">
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
