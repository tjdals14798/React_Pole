import React from "react";
import { Navbar,Nav,Container,NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function footer(){
    return(       
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom">
            <Container fluid="xxl">
                <Navbar.Brand > &copy; Pole of Pisa</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <ul class="nav col-md-4 justify-content-end">
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
                    </ul>
                <Nav/>
                    <Nav className="col justify-content-center text-white"></Nav>
                        <NavDropdown title="연락처" id="collasible-nav-dropdown">
                            <NavDropdown.Item > 이메일 : pole1122@naver.com </NavDropdown.Item>
                            <NavDropdown.Item > 주소 : 서울 어쩌구 저쩌구</NavDropdown.Item>
                        </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}