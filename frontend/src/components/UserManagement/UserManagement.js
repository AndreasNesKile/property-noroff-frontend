import React from "react";
import styles from "./UserManagement.module.css";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class UserManagement extends React.Component {
  state = {
  }

  render() {
    return (
      <div className={styles.FormContainer}>
        <h1>Account details</h1>
        <Form >
          <Form.Group>
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="First name" />
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Last name" />
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="text" placeholder="Phone number" />
            {/* TODO: Add date of birth changeythingy */}
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default UserManagement;
