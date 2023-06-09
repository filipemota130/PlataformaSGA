import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import ufalLogo from '../../assets/SGM.svg'

export default function Navbar_reduced() {
    const [show, setShow] = useState(false);
    return (
        <>
            <Navbar className="flex" style={{ backgroundColor: "#24323D", width: "100%" }}>
                <Container fluid>
                    <nav className='navbar justify-content-start mx-4'>
                        <Button style={{ backgroundColor: "rgb(12, 94, 167", borderColor: "transparent", width: "auto", height:"auto"}} onClick={() => setShow(true)}>
                            <span style={{ color: "white !important" }} className='navbar-toggler-icon'></span>
                        </Button>
                    </nav>
                    <Modal
                        show={show}
                        onHide={() => setShow(false)}
                        className="fundo2"
                        style={{ width: "300px", transition: ".4s" }}
                        fullscreen={true}
                    >
                        <Modal.Header closeButton className="fundo1 text-white d-flex" style={{ border: 0, backgroundColor:"#1f67aa" }}>
                            <Modal.Title>
                                Menu
                            </Modal.Title>
                            <Button className='btn btn-dark' style={{ transform: "translateX(150%)" }} onClick={() => setShow(false)}>Fechar</Button>
                        </Modal.Header>
                        <Modal.Body className='flex fundo1 text-white'>
                            <Stack className='mb-3 fs-5' gap={3}>
                                <a href='/' style={{ textDecoration: "none" }}>Inicio</a>
                                <a href='/disciplinas' style={{ textDecoration: "none" }} >Disciplinas</a>
                                <a href='/professores' style={{ textDecoration: "none" }}>Professores</a>
                                <a href='/grade' style={{ textDecoration: "none" }}>Simulador de Grade</a>
                            </Stack>
                        </Modal.Body>
                    </Modal>
                    <div className='text-white d-flex' style={{ marginTop: "-70px", marginBottom: "-100px", }}>
                        <img src={ufalLogo} width="300px" height="300px"/>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}
