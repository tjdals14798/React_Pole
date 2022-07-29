import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { Button, Form, Container, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login({ onSearch }){
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
        });
    }
    const onSubmit = () => {
        onSearch(inputs);
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
                            <Form.Control name="id" type="text" placeholder="Email" value={id} onChange={onChange} />
                        </Form.Group>

                        <Form.Group className="m-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="text" placeholder="Password" value={password} onChange={onChange}/>
                        </Form.Group>

                        <Button variant="dark" onClick={onSubmit}>로그인</Button>
                    </Form>
                </Container>
            </Modal.Body>
        </Modal.Dialog>
        <Footer />
        </>
    );
}