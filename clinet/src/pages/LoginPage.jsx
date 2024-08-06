import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from '../components/login/LoginForm';

const LoginPage = () => (
  <Container>
    <Row className="justify-content-md-center">
      <Col md="auto">
        <h1>Login</h1>
        <LoginForm />
      </Col>
    </Row>
  </Container>
);

export default LoginPage;
