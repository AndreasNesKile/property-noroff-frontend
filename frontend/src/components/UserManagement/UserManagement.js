import React from "react";
import styles from "./UserManagement.module.css";
import Form from 'react-bootstrap/Form'

class UserManagement extends React.Component {
  state = {
  }

  render() {
    return (
      <div>
        <Form className={styles.FormContainer}>
          <Form.Group>
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
            {/* TODO: Add date of birth changeythingy */}
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Example@Email.com" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="Password" placeholder="Password" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default UserManagement;
