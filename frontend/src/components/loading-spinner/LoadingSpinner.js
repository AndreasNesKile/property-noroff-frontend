import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

export default class LoadingSpinner extends Component {
	render() {
		//A Loading component to be shown when wished, its a modal so it will overlay any other component
		return (
			<Modal show={this.props.loading} className="modal-size">
				<Modal.Body id="loading-module" className="d-flex justify-content-around p-0">
					<img
						src="https://media0.giphy.com/media/Pkck2unt0XQfc4gs3R/giphy.gif?cid=790b76116a7fcbd819e7acc9ed1481239de200926db58548&rid=giphy.gif"
						alt="loading"
						style={{ maxWidth: '35vw', maxHeight: '35vh' }}
					/>
				</Modal.Body>
			</Modal>
		);
	}
}
