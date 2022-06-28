import React from "react";
import dayjs from "dayjs";
import { useNavigate} from "react-router-dom";
import { Navbar,Nav,Container,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header({ ckLogin, setckLogin }){

    const Navigate = useNavigate();
    const today = new Date();

    const move = () =>{
        if(!ckLogin){
            Navigate("/login");
        }
        else {
            setckLogin(false);
        }
    }

    const date = dayjs(today).format("YYYY년 M월 YY일");
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/" onClick={() =>{Navigate("/")}}>Pole Of Pisa</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="col justify-content-center text-white" >{date}</Nav>
                    <Nav>
                        {ckLogin && (<Button className="btn btn-dark" onClick={()=>{Navigate("/insertPole")}}>전주 등록</Button>)}
                        <Button className="btn btn-dark" onClick={move}> {ckLogin?"로그아웃":"로그인"} </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    );
}