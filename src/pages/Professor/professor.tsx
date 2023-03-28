import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_reduced  from '../../components/Navbar_reduced/Navbar_reduced';
import Card from 'react-bootstrap/esm/Card';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/esm/Stack';

export function Professor() {
    const professor = {
        professor_name: "Professor Ranover",
        professor_score: "9.2",
        professor_graduation: "Doutor em Marketing das capivaras.",
        professor_email: 'professorranilson@ic.ufal.br',
        professor_ctt: '(82) 91234-5678',
        professor_supplies: ['Capivaras e seus conceitos','Historia da guerra das oncas','Politica reformista anarco-capivarista'],
        professor_classes: ['Seg(13:00-17:00','Ter(13:00-15:20)'],
    }
   
    return (
        <>
            <Nav_reduced />
            <Container style={{ width: '100% !important' }} className='mt-300 text-white'>
                <Card style = {{borderRadius: 30, backgroundColor: "#33464D", width: 800, height: 750, marginLeft: 100}}>
                    <Card style = {{backgroundImage: `url("src/assets/background_professor.png")`, backgroundSize: '100%', width: "100%", height: "26.67%"}}>
                         <Card.Title style = {{fontSize: 26, marginLeft: "45%", marginTop: 20}}>{professor.professor_name}</Card.Title>
                         <Card.Body>
                            <div>
                                <img src ='src\assets\account_circle.png' width="120" height="120" style = {{marginLeft: "10%", marginTop: -25}}/>
                                <img src ='src\assets\estrela.png' width="30" height="30" style = {{marginLeft: "25%", marginTop: -20}}/>
                                <Badge style = {{fontSize:16, marginTop: -20}} bg = {professor.professor_score} className = "md-3">{professor.professor_score}/10</Badge>
                            </div>
                         </Card.Body>
                    </Card>
                    <Card.Title style= {{fontSize: 30, marginTop:20, marginLeft: 30, marginBottom: 28}}>{professor.professor_graduation}</Card.Title>
                    <Card style = {{borderRadius: 30, backgroundColor: "#24323D", width: "75%", minHeight: "15%", marginBottom: 28, marginLeft: 20}}>
                        <Card.Title style = {{fontSize: 26, marginTop:20, marginLeft: 30}}>Contatos:</Card.Title>
                        <div  style = {{fontSize: 20, marginLeft: 60}} className = "ml-3">Email:
                            <Badge bg = {professor.professor_email} className = "md-3">{professor.professor_email}</Badge>Contato:
                            <Badge bg = {professor.professor_ctt} className = "md-3">{professor.professor_ctt}</Badge>

                        </div>
                    </Card>
                    
                    <Card style = {{borderRadius: 30, backgroundColor: "#24323D", width: "75%", height: "22%", marginBottom: 28, marginLeft: 20}}>
                        <Card.Title style = {{fontSize: 26, marginTop:20, marginLeft: 20}}>Disciplinas Lecionadas Atualmente:</Card.Title>
                            <ul style ={{marginLeft: 50}}>
                                <li><Badge style = {{fontSize: 16, marginTop: 5}} bg = {professor.professor_supplies[0]} className = "md-3">{professor.professor_supplies[0]}</Badge></li>
                                <li><Badge style = {{fontSize: 16, marginTop: 5}} bg = {professor.professor_supplies[1]} className = "md-3">{professor.professor_supplies[1]}</Badge></li>
                                <li><Badge style = {{fontSize: 16, marginTop: 5}} bg = {professor.professor_supplies[2]} className = "md-3">{professor.professor_supplies[2]}</Badge></li>
                            </ul>
                    </Card>

                    <Card style = {{borderRadius: 30, backgroundColor: "#24323D", width: "75%", height: "20%", marginBottom: 28, marginLeft: 20}}>
                        <Card.Title style = {{fontSize: 26, marginTop:20, marginLeft: 20}}>Dias de Aula:</Card.Title>
                            <ul style ={{marginLeft: 50}}>
                                <li><Badge style = {{fontSize: 16, marginTop: 5}} bg = {professor.professor_classes[0]} className = "md-3">{professor.professor_classes[0]}</Badge></li>
                                <li><Badge style = {{fontSize: 16, marginTop: 5}} bg = {professor.professor_classes[1]} className = "md-3">{professor.professor_classes[1]}</Badge></li>
                            </ul>
                    </Card>

                </Card>
            </Container>
        </>
    );
}

export default Professor;