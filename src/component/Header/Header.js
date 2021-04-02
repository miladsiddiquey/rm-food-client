import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const linkStyle ={
        color:'black',
        fontSize:'20px',
        
    }

    return (
        <div className="container">
            <Navbar  expand="lg">
                <Navbar.Brand style={{fontSize:'25px'}}>R.M Foods</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={linkStyle} className="ml-auto">

                        <Link   className="nav-link" to="/home">Home</Link>
                        <Link className="nav-link" to="/order">Order</Link>
                        <Link className="nav-link" to="/admin">Admin</Link>
                        <Link className="btn btn-success" to="/login">Login</Link>
                                       
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;