import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
import ufalLogo from '../../assets/logoic.svg'

export function nav_reduced() {
    const [show, setShow] = useState(false);
    return (
        <>
            <Navbar className="flex" style={{ backgroundColor: "#24323D", width: "100%" }}>
                <Container fluid>
                    <nav className='navbar justify-content-start mx-4'>
                        <Button style={{ backgroundColor: "#ffffff", borderColor: "transparent", width: "auto", height:"auto"}} onClick={() => setShow(true)}>
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
                        <Modal.Header closeButton className="fundo2 text-white">
                            <Modal.Title>
                                Menu
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='flex fundo2 text-white'>
                            <Stack className='mb-3' gap={3}>
                                <a>Home</a>
                                <a>Disciplinas</a>
                                <a>Professores</a>
                                <a>Sobre nós</a>
                            </Stack>
                            <Button className='btn btn-dark' onClick={() => setShow(false)}>Close</Button>

                        </Modal.Body>
                    </Modal>
                    <div className='text-white me-5 mt-3 d-flex'>
                        <img src={ufalLogo} />
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default nav_reduced;