import React from 'react';
import styles from './UserManagement.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { motion } from 'framer-motion';
let Api_Url = `https://propertyproject.azurewebsites.net/api/account/1`;
class UserManagement extends React.Component {
	//the headers in the config used to fetch a respons from the backend will be pulled out from the session once it is available, and
	//then the token will be used to identify the userr that wants to change their info on the backend
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
			});
		} catch (e) {
			console.log(e);
		}
	}

	//once the form is submitted it will call this function that will send a put request with the token to the backend
	saveChanges() {
		axios.put(Api_Url, this.state.user, this.state.config).then((res) => {
			console.log(res);
		});
	}
	//Two-way binding on the  template for the user name
	UpdateName(e) {
		let newSelected = Object.assign({}, this.state.user);
		newSelected.name = e.target.value;
		this.setState({ user: newSelected });
	}
	//Two-way binding on the  template for the user surname
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
								pattern="^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$"
								value={this.state.user.name ? this.state.user.name : ''}
								onChange={(e) => this.UpdateName(e)}
							/>
							<Form.Label>Last name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Last name"
								pattern="^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$"
								value={this.state.user.surname ? this.state.user.surname : ''}
								onChange={(e) => this.UpdateSurname(e)}
							/>
							<Form.Label>Email</Form.Label>
							<Form.Control
								style={{ color: 'gray' }}
								type="text"
								disabled={true}
								placeholder="Email"
								value={this.state.user.email ? this.state.user.email : 'No email'}
							/>
							<Form.Label>Date of Birth</Form.Label>
							<Form.Control
								style={{ color: 'gray' }}
								type="text"
								placeholder="Date of birth"
								disabled={true}
								value={this.state.user.dateOfBirth ? this.state.user.dateOfBirth.substr(0, 10) : ''}
							/>
						</Form.Group>
						<Button type="submit" className="btn btn-success">
							Save Changes
						</Button>
					</Form>
				</div>
			</motion.div>
		);
	}
}

export default UserManagement;
