import React from 'react';
import { useDispatch } from 'react-redux';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { clearUser } from '../redux/actions/userActions'; // Adjust path as needed
import Cookies from 'js-cookie';
import { auth } from "../hook/auth";
import { useNavigate } from 'react-router-dom';

const AppNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = auth();

  const handleLogout = () => {
    dispatch(clearUser());
    Cookies.remove('token');
    navigate('/login');
  };

  return (
    <Navbar  expand="lg" className="" >
      
        <Navbar.Brand  className='fw-bold'>Products</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-end'>
          <Nav className="ml-auto">
            {user ? (
              <NavDropdown title={`Welcome, ${user.email}`} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
};

export default AppNavbar;
