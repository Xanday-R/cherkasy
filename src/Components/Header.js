import React, {Component} from 'react';
import {Navbar, Nav, FormControl, Container, Form, Button} from 'react-bootstrap';
import logo from './icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} height="30" width="30" className="d-inline-block align-top" alt="Logo"></img>
                        React Site
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'>

                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent: "space-between"}}>
                        <Nav>
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/about">About us</Nav.Link>
                            <Nav.Link href="/contacts" >Contacts</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                        </Nav>
                        <Form style={{width: "300px", display: "flex"}}>
                            <FormControl type="text" placeholder="Search" className='mr-auto'></FormControl>
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
        )
    }
}