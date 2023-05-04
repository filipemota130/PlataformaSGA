import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_reduced  from '../../components/Navbar_reduced/Navbar_reduced';
import Card from 'react-bootstrap/esm/Card';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/esm/Stack';

export function Professor() {
    const professor = {
        professor_name: "Professorson",
        professor_score: "9.2",
        professor_graduation: "Doutor em Marketing",
        professor_email: 'professorson@ic.ufal.br',
        professor_ctt: '(82) 91234-5678',
        professor_supplies: ['Capivaras e seus conceitos','Historia da guerra das oncas','Politica reformista anarco-capivarista'],
        professor_classes: ['Seg(13:00-17:00','Ter(13:00-15:20)'],
    }
   
    return (
        <>
            <Nav_reduced />
            <Container style={{ width: '100% !important' }} className='d-flex justify-content-center text-white mb-4'>
                <Card style = {{borderRadius: 30, backgroundColor: "#33464D", width:"100%", marginLeft: 100}}>
                    <Card style = {{backgroundImage: `url("src/assets/background_professor.png")`, backgroundSize: '100%', width: "100%", height: "26.67%"}}>
                        <Card.Title className="mt-5" style = {{fontSize: 26, marginLeft: "48%"}}>Professor: {professor.professor_name}</Card.Title>
                        <div className='d-flex justify-content-center ms-5'>
                            <img src='src\assets\estrela.png' width="25" height="25" />
                            <div style={{ fontSize: 16 }}>&nbsp;&nbsp;{professor.professor_score}/10</div>
                        </div>
                        <Card.Body className='mx-5 py-1'>
                            <img src='src\assets\account_circle.png' width="120" height="120" style={{ marginLeft: "10%" }} />
                         </Card.Body>
                    </Card>
                    <Card.Title className="mt-5 fs-4" style= {{ marginTop:20, marginLeft: 30, marginBottom: 28}}>Formação: {professor.professor_graduation}</Card.Title>
                    <Card className="m-3 p-4" style={{ borderRadius: 30, backgroundColor: "#24323D" }}>
                        <Card.Title style={{ fontSize: 26 }}>Contatos:</Card.Title>
                        <div className="ms-5">
                            <div style={{ fontSize: 20 }}>
                                Email: {professor.professor_email}
                            </div>
                            <div style={{ fontSize: 20 }}>
                                Contato: {professor.professor_ctt}
                            </div>
                        </div>
                            
                    </Card>
                    <Card className="m-3 p-4" style = {{borderRadius: 30, backgroundColor: "#24323D"}}>
                        <Card.Title style = {{fontSize: 26}}>Disciplinas Lecionadas Atualmente:</Card.Title>
                        <ul className="ms-5">
                            {
                                professor.professor_supplies.map((supp) => (
                                    <li>{supp}</li>
                                ))
                            }
                        </ul>
                    </Card>

                    <Card className="m-3 p-4" style={{ borderRadius: 30, backgroundColor: "#24323D" }}>
                        <Card.Title style = {{fontSize: 26}}>Dias de Aula:</Card.Title>
                        <ul className="ms-5">
                                {
                                    professor.professor_classes.map((supp) => (
                                        <li>{supp}</li>
                                    ))
                                }
                        </ul>
                    </Card> 
                </Card>
            </Container>
        </>
    );
}

export default Professor;