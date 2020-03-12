import React, { Component } from 'react';
import GuestDetails from './guest-details/GuestDetails';
import axios from 'axios';

export default class PropertyDetails extends Component {
	state = {
		property: null,
		role: ''
	};
	async componentDidMount() {
		let Api_Url = `https://localhost:5001/api/properties/${this.props.match.params.id}`;
		try {
			await axios.get(Api_Url).then((res) => {
				this.setState({ property: res.data });
			});
		} catch (e) {
			console.log(e);
		}
	}
	render() {
		return <div>{this.state.property ? <GuestDetails property={this.state.property} /> : ''}</div>;
	}
}
