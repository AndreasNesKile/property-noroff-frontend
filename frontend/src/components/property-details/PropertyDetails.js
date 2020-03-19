import React, { Component } from 'react';
import GuestDetails from './guest-details/GuestDetails';
import BuyerDetails from './buyer-details/Buyer-Details';
import AgentDetails from './agent-details/AgentDetails';
import QrCode from './QR-code-component/QrCode';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import { Modal } from 'react-bootstrap';

import './PropertyDetail.css';
import axios from 'axios';
let QRCode = require('qrcode');

export default class PropertyDetails extends Component {
	state = {
		property: null,
		role: 'Guest',
		showQrCode: false,
		loading: false,
		config: {
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem('token')}`
			}
		}
	};

	async componentDidMount() {
		if (sessionStorage.getItem('token')) {
			let Api_Url = `http://localhost:5000/api/properties/${this.props.match.params.id}`;
			try {
				await axios.get(Api_Url, this.state.config).then((res) => {
					console.log(res);
					this.setState({ property: res.data });
					console.log(this.state.property);
				});
			} catch (e) {
				console.log(e);
			}
		}
	}
	ShowQr = () => {
		this.setState({ loading: true });
		setTimeout(() => {
			this.toggleQr();
			if (this.state.showQrCode) {
				this.setState({ loading: false });
				let canvas = document.getElementById('canvas');
				QRCode.toCanvas(canvas, window.location.href, function(error) {
					if (error) console.error(error);
				});
			}
		}, 3000);
	};
	toggleQr = () => {
		const toggledQr = !this.state.showQrCode;
		this.setState({ showQrCode: toggledQr });
	};
	render() {
		return (
			<div className="container-app">
				<LoadingSpinner loading={this.state.loading} />
				<Modal
					show={this.state.showQrCode}
					className="text-center modal-size"
					// onClick={this.toggleQr}
					onHide={this.toggleQr}
					size="lg"
				>
					<Modal.Header className="d-flex justify-content-around">
						<Modal.Title>Qr-code for sharing this page</Modal.Title>
					</Modal.Header>
					<Modal.Body id="modalbody">
						<canvas id="canvas"></canvas>
					</Modal.Body>
				</Modal>
				{this.state.property ? <GuestDetails property={this.state.property} /> : ''}
				{this.props.role === 'Buyer' || this.props.role === 'Agent' ? (
					this.state.property ? (
						<BuyerDetails property={this.state.property} />
					) : (
						''
					)
				) : (
					''
				)}
				{this.props.role === 'Agent' ? (
					this.state.property ? (
						<AgentDetails property={this.state.property} />
					) : (
						''
					)
				) : (
					''
				)}
				<QrCode onQrClick={this.ShowQr} />
			</div>
		);
	}
}
