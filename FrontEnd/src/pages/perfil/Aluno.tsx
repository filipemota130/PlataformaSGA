import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar_reduced from "../../components/Navbar_reduced/Navbar_reduced"
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

export function Aluno() {

    const nome = 'Aluno Waldiscleyson';
    const bio = '[Sobre mim]';
    const dados = {
        matricula: 12345,
        email: 'aw@ic.ufal.br',
        telefone: '8295555-5555',
        nascimento: '00/00/0000'
    }
    const adicionais = [
        {
            fieldname: "Curso",
            value: 'Ciência da computação',
        },
        {
            fieldname: "Sexo",
            value: 'Não informado',
        },
        {
            fieldname: "Etnia",
            value: 'Não informado'
        }
    ]
    const discPagas = ['Cálculo 1', 'Programação 1', 'Matemática discreta']

    return (
        <>
            <Navbar_reduced></Navbar_reduced>
            <div className='m-5'>
                <Container className='fundo2 p-2' style={{ borderRadius: 10, height: '100%' }}>
                    <div>
                        <Row xs={1} md={2} className="g-3">
                            <Col className='text-white col-md-4 border-0' style={{ borderBlockColor: 'transparent' }}>
                                <Card className='text-white fundo2 m-4 border-0'>
                                    <div className="m-4">
                                        <Card.Body className='d-flex justify-content-center fundo1 p-4' style={{ borderRadius: 10, textAlign: 'center' }}>
                                            <div className=''>
                                                <img src='src\assets\account_circle.png' width="100" height="100" className='' /><br></br><br></br>{nome}
                                            </div>
                                        </Card.Body>
                                    </div>
                                    <div className="m-4 border-0 fundo">
                                        <Card.Body className='fundo1 p-4' style={{ borderRadius: 10 }}>
                                            <Card.Title>Dados Pessoais: </Card.Title>
                                            <Card.Text className='ml-5'>
                                                <ul>
                                                    <li className='mb-2'>Matrícula SIE WEB: {dados.matricula}</li>
                                                    <li className='mb-2'>Email: {dados.email}</li>
                                                    <li className='mb-2'>Telefone: {dados.telefone}</li>
                                                    <li className='mb-2'>Data de nascimento: {dados.nascimento}</li>
                                                </ul>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col className='text-white m-4' style={{width:"62%"}}>
                                <Card className='text-white fundo2 m-4 border-0'>
                                    <div className="m-4" >
                                        <Card.Body className='d-flex flex-wrap fundo1 p-4' style={{ borderRadius: 10 }}>
                                            {bio}
                                        </Card.Body>
                                    </div>
                                    <div className="m-4">
                                        <Card.Body className='d-flex flex-wrap fundo1 p-4' style={{ borderRadius: 10 }}>
                                            <div>
                                                <Card.Title className='mb-3'>Disciplinas pagas: </Card.Title>
                                                <Card.Body className='ms-3 fundo2' style={{ borderRadius: 10, width: "100%" }}>
                                                    <ul className='px-5' style={{ width: "30vw" }}>
                                                        {
                                                            discPagas.map((discPagas) => (
                                                                <li>{discPagas}</li>
                                                            ))
                                                        }
                                                    </ul>

                                                </Card.Body>
                                                <Button className='mt-4 border-0' style={{ backgroundColor: "#de6c07" }}>Editar</Button>
                                            </div>
                                        </Card.Body>
                                    </div>

                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div className='m-4'>
                        <Card className='text-white fundo1 m-4 border-0 p-3' >
                            <Card.Body>
                                <Card.Title className='fs-4'>Informações adicionais: </Card.Title>
                                <ul className='fs-5'>
                                    {
                                        adicionais.map((adicionais) => (
                                            <li>
                                                {adicionais.fieldname}: {adicionais.value}
                                            </li>
                                        )
                                        )
                                    }
                                </ul>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Aluno;