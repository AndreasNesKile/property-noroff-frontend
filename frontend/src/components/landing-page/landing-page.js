import React, { Component } from 'react';
import { Container, FormGroup, FormLabel, FormControl, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './landingpage.css';

export default class landingpage extends Component {
	state = {
		role: null
	};

	render() {
		return (
			<Container className="container-fluid mt-5">
				<div className="wrapper text-center">
					<Row>
						<Col>
							<img src="https://i.imgur.com/n4n5xBJ.jpg" className="img-fluid" alt="property" />
						</Col>
					</Row>
					<div className="login">
						<form>
							<Row>
								<Col sm={8} className="offset-sm-2">
									<FormGroup className="login-form-group">
										<FormLabel className="login-label">Email:</FormLabel>
										<FormControl autoFocus type="email" className="login-input" />
									</FormGroup>
								</Col>
							</Row>
							<Row>
								<Col sm={8} className="offset-sm-2">
									<FormGroup controlId="password" className="login-form-group">
										<FormLabel className="login-label">Password:</FormLabel>
										<FormControl type="password" className="login-input" />
									</FormGroup>
								</Col>
							</Row>
							<Row>
								<Col>
									<FormGroup className="mt-5">
										<ButtonGroup className="d-flex justify-content-sm-start justify-md-content-around flex-wrap login-button-group">
											<Col sm={9} md={3} className="text-left text-sm-center offset-sm-1">
												<Button className="btn-primary login-button">Login</Button>
											</Col>
											<Col sm={9} md={3} className="text-left text-sm-center offset-sm-1">
												<Button className="btn-danger login-button">Google</Button>
											</Col>
											<Col sm={9} md={3} className="text-left text-sm-center offset-sm-1">
												<Link to={'/Properties'}>
													<Button className="btn-success  guest-button">
														Continue as guest
													</Button>
												</Link>
											</Col>
										</ButtonGroup>
									</FormGroup>
								</Col>
							</Row>
						</form>
					</div>
				</div>
			</Container>
		);
	}
}
