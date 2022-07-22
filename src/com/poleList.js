import React,{useEffect, useRef, useState } from "react";
import { Card, Button, Row, Col, Container, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header";
import Footer from './footer';

const InfoItem = React.memo(function InfoItem({ pole, value }){
    return (
        <Col key={value} className="mt-4">
            <Card style={{ width: '20rem',margin:'auto'}}>
                <Card.Img variant="top" src={pole.poleImg} height="180" />
                <Card.Body>
                    <Card.Title> 전주 번호 : {pole.poleNum} </Card.Title>
                    <Card.Text> 관리자 : {pole.poleAdmin} </Card.Text>
                    <Button value={value} variant="dark">Info</Button>{' '}
                    <Button value={value} variant="dark">Chart</Button>
                </Card.Body>
            </Card>
        </Col>
    );
});

const InfoList = React.memo(function InfoList({ info }){
    
    return(
        <Container fluid="xxl">
            <Row xs={1} md={3} className="justify-content-md-center">
                {info.map((pole,i) => (
                    <InfoItem pole={pole} key={i} value={i}/>
                ))}
            </Row>
        </Container>
    )
});

export default function PoleList({ info, insertPole, onSearch }){
    useEffect(()=>{
        inputRef.current.focus();
        if(!insertPole) setShow(false);
        else setShow(true);
    },[]);
    const inputRef = useRef();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [input,setinput] = useState("");
    const onChange = e => setinput(e.target.value);
    const onSubmit = e => {
        e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
        onSearch(input);
      }

    return(
        <>
        <Header />
        <Container fluid="sm" className="mt-4">
        <Form ref={inputRef} onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" autoFocus placeholder="전주 번호 입력 후 Enter" onChange={onChange}/>
            </Form.Group>
        </Form>
        <InfoList info={info}/>
        </Container>
        {/* { show && <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>전주 등록 완료</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                전주 번호: {insertPole.poleNum}가 등록 되었습니다.
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal> }
         <Container fluid="sm" className="mt-4">
         <Form ref={inputRef} onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" autoFocus placeholder="전주 번호 입력 후 Enter" onChange={onChange}/>
            </Form.Group>
        </Form>
        </Container>
        <Container fluid="xxl">
            <Row xs={1} md={3} className="justify-content-md-center">
                {index.map((pole,i) => (
                    <Col key={i} className="mt-4">
                        <Card style={{ width: '20rem',margin:'auto'}}>
                            <Card.Img variant="top" src={pole.poleImg} height="180" />
                            <Card.Body>
                                <Card.Title> 전주 번호 : {pole.poleNum} </Card.Title>
                                <Card.Text> 관리자 : {pole.poleAdmin} </Card.Text>
                                <Button value={i} onClick={onInfo} variant="dark">Info</Button>{' '}
                                <Button value={i} onClick={onChart} variant="dark">Chart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            </Container> */}
            <Footer />
        </>
    );
}