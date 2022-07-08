import React,{useEffect, useRef, useState } from "react";
import { Card, Button, Row, Col, Container, InputGroup, FormControl, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PoleList({ index, onKeyDown, onChart, onInfo, insertPole }){
    useEffect(()=>{
        inputRef.current.focus();
        if(!insertPole) setShow(false);
        else setShow(true);
    },[]);
    const inputRef = useRef();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    return(
        <>
        { show && <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>전주 등록 완료</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                전주 번호: {insertPole.poleNum}가 등록 되었습니다.
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal> }
         <Container fluid="sm">
            <InputGroup size="lg" ref={inputRef} className="mt-4" onKeyDown={onKeyDown}>
                <FormControl placeholder="전주 번호 입력 후 Enter"/>
            </InputGroup>
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
            </Container>
        </>
    );
}