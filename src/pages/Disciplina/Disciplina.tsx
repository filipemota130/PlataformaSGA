import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Stack from 'react-bootstrap/Stack';

export function Disciplina() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Navbar style={{ backgroundColor: "#24323D", width:"100%"}}>
                    <nav className='navbar'>
                            <Button style={{ backgroundColor: "#24323D" , borderColor:"transparent"}} onClick={() => setShow(true)}>
                                <span style={{color:"white !important"}} className='navbar-toggler-icon'></span>
                            </Button>
                    </nav>
                    <Modal
                        show={show}
                        fadeIn={false}
                        onHide={() => setShow(false)}
                        style={{ width: "300px" }}
                        dialogClassName=""
                        fullscreen={true}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                Menu
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='flex'>
                            <Stack className='mb-3' gap={3}>
                                <a>Home</a>
                                <a>Disciplinas</a>
                                <a>Professores</a>
                                <a>Sobre nós</a>
                            </Stack>
                            <Button className='btn btn-dark'onClick={()=>setShow(false)}>Close</Button>
                        </Modal.Body>
                    </Modal>
            </Navbar>
        </>
    );
}

export default Disciplina;