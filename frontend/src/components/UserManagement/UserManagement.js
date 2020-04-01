import React from 'react';
import styles from './UserManagement.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { motion } from 'framer-motion';
let Api_Url = `http://localhost:5000/api/account/1`;
class UserManagement extends React.Component {
	state = {
		user: {},
		config: {
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem('token')}`
			}
		}
	};
	pageTransition = {
		in: {
			y: 0
		},
		out: {
			y: '-20%'
		}
	};

	async componentDidMount() {
		try {
			await axios.get(Api_Url, this.state.config ? this.state.config : '').then((res) => {
				this.setState({ user: res.data });
				console.log(this.state.user);
			});
		} catch (e) {
			console.log(e);
		}
	}

	saveChanges() {
		axios.put(Api_Url, this.state.user, this.state.config).then((res) => {
			console.log(res);
		});
	}
	UpdateName(e) {
		let newSelected = Object.assign({}, this.state.user);
		newSelected.name = e.target.value;
		this.setState({ user: newSelected });
	}
	UpdateSurname(e) {
		let newSelected = Object.assign({}, this.state.user);
		newSelected.surname = e.target.value;
		this.setState({ user: newSelected });
	}
	render() {
		return (
			<motion.div initial="out" animate="in" exit="out" variants={this.pageTransition}>
				<div className={styles.FormContainer}>
					<h1>Account details</h1>
					<Form onSubmit={() => this.saveChanges()}>
						<Form.Group>
							<Form.Label>First name</Form.Label>
							<Form.Control
								type="text"
								placeholder="First name"
								value={this.state.user.name ? this.state.user.name : ''}
								onChange={(e) => this.UpdateName(e)}
							/>
							<Form.Label>Last name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Last name"
								value={this.state.user.surname ? this.state.user.surname : ''}
								onChange={(e) => this.UpdateSurname(e)}
							/>
							<Form.Group>
								<Button variant="success" className="mt-1" type="submit">
									Save Changes
								</Button>
							</Form.Group>

							{/* TODO: Add date of birth changeythingy */}
						</Form.Group>{' '}
					</Form>
				</div>
			</motion.div>
		);
	}
}

export default UserManagement;
