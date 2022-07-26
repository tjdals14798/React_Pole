import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { Button, Form, Container, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import "../Css/App.css"

function Login(){

    const Navigate = useNavigate();
    const [userinfo,setUserInfo] = useState({
        id:"tjdals",
        password:"123"
    })
    const [inputs,setInputs] = useState({
        id : '',
        password : ''
    });

    const { id, password } = inputs;
    
    const onChange = (e) =>{
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onClick = () =>{
        if(userinfo.id === id && userinfo.password === password){
            let inputsId = inputs.id;
            Navigate("/",{state: { loginck:inputsId }});
        }else{
            alert("실패");
        }
    }
    
    return(
        <>
        <Header />
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>로그인</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container fluid="xl">
                        <Form>
                            <Form.Group className="m-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="id" type="email" placeholder="Email" value={id} onChange={onChange} />
                            </Form.Group>

                            <Form.Group className="m-3" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="email" placeholder="Password" value={password} onChange={onChange}/>
                            </Form.Group>

                            <Button variant="dark" onClick={onClick}>로그인</Button>
                        </Form>
                    </Container>
                </Modal.Body>
            </Modal.Dialog>
            <Footer />
        </>
    );
}

export default React.memo(Login);