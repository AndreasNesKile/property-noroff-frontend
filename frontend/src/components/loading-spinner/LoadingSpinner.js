import React, { Component } from 'react';
import { Modal, Image } from 'react-bootstrap';

export default class LoadingSpinner extends Component {
	render() {
		return (
			<Modal show={this.props.loading} size="lg" className="modal-size">
				<Modal.Body id="loading-module" className="d-flex justify-content-around">
					{/* <Image source={require('../../assets/loading.gif')} alt="loading" /> */}
					<img
						src="https://media0.giphy.com/media/Pkck2unt0XQfc4gs3R/giphy.gif?cid=790b76116a7fcbd819e7acc9ed1481239de200926db58548&rid=giphy.gif"
						alt="permortne"
					/>
				</Modal.Body>
			</Modal>
		);
	}
}
