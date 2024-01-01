import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../css/App.css';
import '../css/Sign.css';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password
    };
    props.login(user);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    // Update the state based on the input field name
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <div className="header form-container">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-75">
          <h1>Sign In</h1>
          <Form onSubmit={loginHandler}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                className='form-input'
                name="email"
                onChange={changeHandler}
                required
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                className='form-input'
                name="password"
                onChange={changeHandler}
                required
              />
            </Form.Group>

            <div className='button-container'>
              <Button className='button' variant="primary" type="submit">
                Sign In
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;