import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_reduced from '../../components/Navbar_reduced/Navbar_reduced';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/esm/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Header } from '../../components/Header/Header';
import Badge from 'react-bootstrap/Badge';

const list = [
    {
        destaque: true,
        name: "Ranilson Paiva",
        nota: 10,
        link: "professor",
        disciplinas:["Redes","Programação web"]

    },
    {
        destaque: false,
        name: "Professorson",
        nota: 8.7,
        link: "professor",
        disciplinas: ["Aulas - 101", "Como fazer sites"]

    },
    {
        destaque: false,
        name: "Thor Odinson",
        nota: 4.5,
        link: "professor",
        disciplinas: ["Ciência do martelo", "Elétrica 3"]

    },
]
export function ProfessorList() {
    return (
        <>
            <Nav_reduced />
            <div className='d-flex justify-content-center'>
                <div>
                    <div>
                        <h1 className='text-white fs-1 text-center mt-4'>Professores</h1>
                        <div className='d-flex  justify-content-center'>
                            <Header></Header>
                        </div>
                    </div>
                    <Container style={{ width: 'auto', maxWidth: "100vw" }} className='mt-5 text-white '>
                        <ListGroup>
                            {
                                list.map((professor) =>
                                    <Card className='p-2 mb-4' style={{borderRadius: 15, backgroundColor: "#33464D", width:"auto"}}>
                                        <Card.Body className='d-flex'>
                                            <div className='mt-4'>
                                                <img src="src\assets\rede-global.png" width="100" height="100" />
                                                <div className=" d-flex ms-2 mt-3" >
                                                    <img src='src\assets\estrela.png' className='me-2' width="20" height="20" />
                                                    <div style={{ marginTop: 2 }}>{professor.nota}/10</div>
                                                </div>
                                            </div>
                                            <div className="ms-4">
                                                {
                                                    professor.destaque == true ? <Badge bg={"warning"} style={{ borderRadius: 20 }} className="mb-2 px-4">Professor Destaque</Badge> : null
                                                }
                                                <div className='fundo1 pt-3 px-3 pb-1 mb-2' style={{ minWidth: "300px", borderRadius: 20 }}>
                                                    <Card.Title>{professor.name}</Card.Title>
                                                </div>
                                                <div className='fundo1 px-3 pt-3 pb-2 mb-2' style={{ minWidth: "300px", borderRadius: 20 }}>
                                                    <Card.Title>Disciplinas:<br />
                                                        <div>
                                                            <ul className='mb-2'>
                                                                {
                                                                    professor.disciplinas.map((disciplina) =>
                                                                        <li>
                                                                            {disciplina}
                                                                        </li>
                                                                    )
                                                                }
                                                            </ul>
                                                        </div>

                                                    </Card.Title>
                                                </div>
                                            </div>
                                            <div style={{ marginTop: "9.5rem", marginLeft: 20 }}>
                                                <a href={professor.link}><Button className="mt-3" variant="primary">Ver mais</Button></a>
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

export default ProfessorList;