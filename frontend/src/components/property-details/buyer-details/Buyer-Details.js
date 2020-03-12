import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import './BuyerDetails.css';
export default class BuyerDetails extends Component {
	render() {
		console.log(this.props);
		return (
			<section className="border border-blue buyer-section">
				<Container>
					<h2 className="text-center">Additional Details</h2>
				</Container>
				<Row>
					<Col>
						<Table>
							<thead>
								<tr>
									<th>
										<b>City:</b>
									</th>
									<th>
										<b>Building Number:</b>
									</th>
									<th>
										<b>Appartment Number:</b>
									</th>
									<th>
										<b>Built:</b>
									</th>
									<th>
										<b>Last Renovated:</b>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<p>
											{this.props.property.city ? this.props.property.city : 'No city specified'}
										</p>
									</td>
									<td>
										<p>{this.props.property.line_1 ? this.props.property.line_1 : 'N/A'}</p>
									</td>
									<td>
										<p>{this.props.property.line_2 ? this.props.property.line_2 : 'N/A'}</p>
									</td>
									<td>
										<p>
											{this.props.property.createdAt
												? this.props.property.createdAt.substr(0, 10)
												: 'N/A'}
										</p>
									</td>
									<td>
										<i>Last renovated should be here</i>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			</section>
		);
	}
}
