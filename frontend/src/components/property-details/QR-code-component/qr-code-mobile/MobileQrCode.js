import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './MobileQrCode.css';

export default class MobileQrCode extends Component {
	render() {
		return (
			<Container
				className="container-fluid qr-code-mobile d-flex justify-content-around align-items-center d-md-none d-block"
				onClick={this.props.onQrClick}
			>
				Show QR-Code
			</Container>
		);
	}
}
