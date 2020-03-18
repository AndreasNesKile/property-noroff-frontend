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

const config = {
	headers: {
		Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJFSkNNek5FTURNMFJUZ3hSVGt5UWpjMVFqSkJRa00wT1RReVF6VkdRelJHTnpJeU5VRTJNQSJ9.eyJodHRwczovL3Byb3BlcnR5LmNvbS9yb2xlcyI6WyJBZ2VudCJdLCJuaWNrbmFtZSI6ImV4YW1wbGUiLCJuYW1lIjoiZXhhbXBsZUBtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9mYmYyYjljZmMwYTQ3MjM4OWYzNjIwZTQ3MWJkZjBlOT9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmV4LnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIwLTAzLTE4VDExOjEzOjQzLjI4M1oiLCJlbWFpbCI6ImV4YW1wbGVAbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOi8vcHJvcGVydHlwcm9qZWN0LmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZTY5NTYxZThmMDY1YTBjYWYyZjQxNTciLCJhdWQiOiJ3OFdlWXAyRVpCbThKNlg5TGtPQURKWjBja0tlWmg2bSIsImlhdCI6MTU4NDUzMDAyMywiZXhwIjoxNTg0NTY2MDIzfQ.u5bBxCNODkxxKG1OKYrg-vbWLahVi9_uglZ5bX8nNF6VG730EwTsIX-OIpQIuLpnN40w2eqrYUe-CViN4lVNVHBlOhJulctyuEFPk5gD6rxA81brjbblWGc9DjAxql_rGUqSJJkqoMT9d6--5nW91-2xOn7eSPwsPG3p89i1w3wMA1Vp5Ai5AqjcuzD8J5Yl_C-MRwEgajQEcOmRFqlwtITcQ8Lcao4_wcYusvbcBy7FSISAJu8FGAh6QzamdeNpqX6-_Zq2lFFXDZsKJHmllKOzq7AJAm6zUzIBpKt6eHSQNfOdQTrTEELTrH2Pye2pSMhXacE7mtK9bYc2owlipw`
	}
};
export default class PropertyDetails extends Component {
	state = {
		property: null,
		role: 'Agent',
		showQrCode: false,
		loading: false
	};
	async componentDidMount() {
		let Api_Url = `http://localhost:5000/api/properties/${this.props.match.params.id}`;
		try {
			await axios.get(Api_Url, config).then((res) => {
				this.setState({ property: res.data });
				console.log(this.state.property);
			});
		} catch (e) {
			console.log(e);
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
				{this.state.role === 'Buyer' || this.state.role === 'Agent' ? (
					this.state.property ? (
						<BuyerDetails property={this.state.property} />
					) : (
						''
					)
				) : (
					''
				)}
				{this.state.role === 'Agent' ? (
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
