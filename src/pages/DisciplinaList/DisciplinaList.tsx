import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_reduced from '../../components/Navbar_reduced/Navbar_reduced';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/esm/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Header } from '../../components/Header/Header';

const list = [
    {
        name: "Nome da Disciplina",
        nota:"9.2",
        professor: "Alfredo",
        link:"disciplina"

    },
    {
        name: "Nome da Disciplina",
        nota: "9.2",
        professor: "Alfredo",
        link: "disciplina"
    },
    {
        name: "Nome da Disciplina",
        nota: "9.2",
        professor: "Alfredo",
        link: "disciplina"
    },
]
export function DisciplinaList() {
    return (
        <>
            <Nav_reduced />
            <div className='d-flex justify-content-center'>
                <div>
                    <div>
                        <h1 className='text-white fs-1 text-center mt-4'>Disciplinas</h1>
                        <div className='d-flex justify-content-center'>
                            <Header></Header>
                        </div>
                    </div>
                    <Container style={{ width: 'auto', maxWidth: "55rem" }} className='mt-5 text-white'>
                        <ListGroup>
                            {
                                list.map((disciplina) =>
                                    <Card className='p-4 mb-4' style={{ borderRadius: 15, backgroundColor: "#33464D" }}>
                                        <Card.Body className='d-flex'>
                                            <div className='m-4'><img src="src\assets\rede-global.png" width="100" height="100" /></div>
                                            <div className="justify-content-end ms-4">
                                                <div className='fundo1 pt-3 pb-1 px-3 left mb-2' style={{ width: "100%", borderRadius: 20}}>
                                                    <Card.Title>{disciplina.name}<img src='src\assets\estrela.png' className="ms-5" width="25" height="25" /> {disciplina.nota}/10</Card.Title>
                                                </div>
                                                <Card.Title className='fs-5'>
                                                    <b>Professor:  </b>{disciplina.professor}
                                                </Card.Title>
                                                <a href={disciplina.link}><Button className="mt-3" variant="primary">Ver mais</Button></a>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                )
                            }
                        </ListGroup>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default DisciplinaList;