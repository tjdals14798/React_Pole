import React from "react";
import { Navbar,Nav,Container,DropdownButton,Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Css/App.css";

export default function footer(){
    return(       
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom">
            <Container fluid="xxl">
                <Navbar.Brand > &copy; Pole of Pisa</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" drop="up">
                    <ul id="navHover" className="nav col-md-4 justify-content-end">
                        <li className="nav-link px-2 text-muted">Home</li>
                        <li className="nav-link px-2 text-muted">Features</li>
                        <li className="nav-link px-2 text-muted">Pricing</li>
                        <li className="nav-link px-2 text-muted">FAQs</li>
                        <li className="nav-link px-2 text-muted">About</li>
                    </ul>
                <Nav/>
                    <Nav className="col justify-content-center text-white"></Nav>
                    <DropdownButton title="연락처" id="dropdown-button-drop-up" variant="dark" drop="up">
                        <Dropdown.Item > 이메일 : 어쩌구@naver.com </Dropdown.Item>
                        <Dropdown.Item > 주소 : 광주 어쩌구 저쩌구</Dropdown.Item>
                    </DropdownButton>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}