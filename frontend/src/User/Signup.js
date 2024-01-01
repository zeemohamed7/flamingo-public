import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../css/App.css'; 
import '../css/Sign.css'

const SignupPage = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here, e.g., send data to the server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    // Update the state based on the input field name
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const registerHandler = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      email: email,
      password: password
    };
    props.register(newUser);
    console.log(newUser);
  };
    
  return (
    <div className="header form-container">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-75">
          <h1>Sign Up</h1>
          <Form onSubmit={handleSignup}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                className='form-input'
                name="name"
                onChange={changeHandler}
                required
              />
            </Form.Group>

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
              <Button className='button' onClick={registerHandler} variant="primary" type="submit">
                Sign Up
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;