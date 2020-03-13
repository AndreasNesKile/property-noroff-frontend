import React, { Component } from 'react';
import GuestDetails from './guest-details/GuestDetails';
import BuyerDetails from './buyer-details/Buyer-Details';
import AgentDetails from './agent-details/AgentDetails';
import './PropertyDetail.css';
import axios from 'axios';

export default class PropertyDetails extends Component {
	state = {
		property: null,
		role: 'Agent'
	};
	async componentDidMount() {
		let Api_Url = `https://localhost:5001/api/properties/${this.props.match.params.id}`;
		try {
			await axios.get(Api_Url).then((res) => {
				this.setState({ property: res.data });
				console.log(this.state.property);
			});
		} catch (e) {
			console.log(e);
		}
	}
	render() {
		return (
			<div className="container-app">
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
			</div>
		);
	}
}
