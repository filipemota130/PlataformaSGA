import Navbar_reduced from "../../components/Navbar_reduced/Navbar_reduced"
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Footer } from "../../components/Footer/footer";

export function Login() {
    return (
        <>
            <Navbar_reduced />
            <h1 className="text-center text-white" 
                style={{ marginTop: "100px", marginBottom: "50px" }}>
                ENTRAR
            </h1>
            <Container className="d-flex justify-content-center">
                <div>
                    <InputGroup className="mb-4" 
                        style={{ width: "300px" }}>
                        <InputGroup.Text className="fundo2 text-white border-0" 
                            id="inputGroup-sizing-sm" 
                            style={{ borderStartStartRadius: 25, borderEndStartRadius: 25 }}>
                            <img src="..\src\assets\account_circle.png" width="35" height="35" />
                        </InputGroup.Text>
                        <Form.Control className="fundo2 border-0"
                            style={{ borderEndEndRadius: 25, borderStartEndRadius: 25 }}
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            type="email"
                            placeholder="name@example.com"
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text className="fundo2 text-white border-0" 
                            id="inputGroup-sizing-sm" 
                            style={{ borderStartStartRadius: 25, borderEndStartRadius: 25 }}>
                            <img src="..\src\assets\lock.png" width="35" height="30"/>
                        </InputGroup.Text>
                        <Form.Control className="fundo2 border-0"
                            style={{ borderEndEndRadius:25, borderStartEndRadius:25 }}
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            type="password"
                            placeholder="**********"
                        />
                    </InputGroup>
                    <a href="" 
                        style={{marginTop:"50px", textDecoration:"none"}}>
                        Esqueci minha senha.
                    </a>
                    <div className="d-flex justify-content-center">
                    <Button 
                    style={{marginTop:"40px", height:"50px", width:"225px", borderRadius:25, position:"absolute"}}>
                        Confirmar
                    </Button>
                    <a href="..\src\pages\Cadastro_Aluno\Cadastro_aluno"
                    style={{marginTop:"90px", position:"absolute", textDecoration:"none"}}>
                        Ainda não tem conta? Crie aqui.
                    </a>
                    </div> 
                </div>
            </Container>
            <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
                <Footer />
            </div>

        </>
    )
}