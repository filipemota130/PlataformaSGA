import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_reduced  from '../../components/Navbar_reduced/Navbar_reduced';
import Card from 'react-bootstrap/esm/Card';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/esm/Stack';

export function Disciplina() {
    const name = 'Nome da Disciplina (NDD) - COMP666';
    const professor = {
        nome: "Professorson",
        link:"professor"
    }
    const classification = 9.5;
    const tags = {
        tipo: "Obrigatoria",
        enfase: "Sistemas de Informação",
        curso: "CC"
    }
    const properties = {
        carga: 666,
        pre_req: ["Calculo 1", "Calculo 2", "Calculo 3"],
        Horarios: ["Seg (15:20 - 17:00)", "Ter (7:30 - 9:20)"],
        req_de: ["Calculo 4", "Calculo 5"]
    }
    const texts = [
        { data: ["Ementa", "conteudo"] },
        { data: ["Objetivos", "conteudo"] },
        { data: ["Conteudo Programático", "conteudo"] },
        { data: ["Metodologia", "conteudo"] },
        { data: ["Avaliação", "conteudo"] },
        { data: ["Referência Bibliográficas", "conteudo"] }
    ]
    return (
        <>
            <Nav_reduced />
            <Container style={{ width: '100% !important' }} className='mt-5 text-white'>
                <Card style={{ borderRadius: 20, backgroundColor: "#33464D" }}>
                    <Card.Img variant="top" src="src\assets\imagem.png" />
                    <Card.Body className='ms-3'>
                        <div style={{ display: 'flex' }}>
                            <Card.Title style={{ fontSize: 30, marginRight: 20 }}>{name}</Card.Title>
                            <img src='src\assets\estrela.png' width="25" height="25" />
                            <div style={{ fontSize: 24 }}>&nbsp;&nbsp;{classification}/10</div>
                        </div>
                        <div className='mt-3 fs-5'>
                            Professor Responsavel:
                            <a className="mx-2" href={professor.link}>
                                {professor.nome}
                            </a>
                        </div>
                        <div className="my-3">
                            <Badge bg={tags.tipo == "Obrigatoria" ? "warning" : "secondary"} className="mx-1">{tags.tipo}</Badge>
                            <Badge bg={tags.enfase == "Sistemas de Informação" ? "primary" : "danger"} className="mx-1">{tags.enfase}</Badge>
                            <Badge bg={tags.curso == "CC" ? "success" : "primary"} className="mx-1">{tags.curso}</Badge>
                        </div>
                        <Card.Body style={{ borderRadius: 20, backgroundColor: "#24323D" }}>
                            <Stack gap={3}>
                                <ListGroup>
                                    <ListGroup.Item className='fundo2 text-white'><b>Carga Horária: </b>{properties.carga}hrs</ListGroup.Item>
                                    <ListGroup.Item className='fundo2 text-white'><b>Pre-requisitos: </b>{properties.pre_req.map((req,i) => {
                                        return <span>
                                            {req} {i < properties.pre_req.length-1 ? ", " : ";"}
                                        </span>
                                        }    
                                    )
                                    }</ListGroup.Item>
                                    <ListGroup.Item className='fundo2 text-white'><b>Horarios: </b>{properties.Horarios.map((req, i) => {
                                        return <span>
                                            {req} {i < properties.Horarios.length-1 ? ", " : ";"}
                                        </span>
                                    }
                                    )}</ListGroup.Item>
                                    <ListGroup.Item className='fundo2 text-white'><b>É pré-requisito de: </b>{properties.req_de.map((req, i) => {
                                        return <span>
                                            {req} {i < properties.req_de.length-1  ? ", " : ";"}
                                        </span>
                                    }
                                    )}</ListGroup.Item>
                                </ListGroup>
                                <ListGroup>
                                    {
                                        texts.map((item) =>
                                            <Card.Body className= 'fundo2 text-white my-2 rounded' >
                                                <Card.Title>{item.data[0]}</Card.Title>
                                                <div>{item.data[1]}</div>
                                            </Card.Body>
                                        )
                                    }
                                </ListGroup>
                            </Stack>
                        </Card.Body>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Disciplina;