import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './QrCode.css';
export default class QrCode extends Component {
	render() {
		return (
			<div className="qr-code desktop-only">
				<Button variant="info" onClick={this.props.onQrClick}>
					Show Qr-Code
				</Button>
			</div>
		);
	}
}
