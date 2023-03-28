import Navbar_reduced from "../../components/Navbar_reduced/Navbar_reduced"
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image"
import Card from "react-bootstrap/Card"
import { Footer } from "../../components/Footer/footer";

export function SobreNos() {
    return (
        <>
            <Navbar_reduced />
            <h1 className="mt-4 text-center text-white">
                Sobre Nós
            </h1>
            <div className="d-flex justify-content-center">

                <Image src="..\src\assets\amogus.jpg" height="560px" width="800px" />
            </div>
            <div className="text-center text-white fs-5">
                Membros do grupo :)
            </div>
            <div className="d-flex justify-content-center">
                <Card className="fundo2 mt-5 text-white" style={{ height: "15rem", maxWidth: "1000px" }}>
                    <Card.Body>
                        <p className="fs-4 m-3" style={{textIndent:25, textAlign:"justify"}}>
                            Somos um grupo de alunos do curso de Ciência da Computação do Instituto de Computação (IC) da Universidade Federal de Alagoas (UFAL). Motivados pela disciplina de Programação Web, montamos este site, que tem o intuito de auxiliar outros alunos do IC-UFAL na organização de suas vidas acadêmicas, proporcionando um lugar onde podem acessar diversas informações pertinentes aos cursos oferecidos e montarem uma simulação do cronograma de seus períodos.
                        </p>
                    </Card.Body>
                </Card>
            </div>
            <div className="mt-5" style={{ bottom: 0, width: "100%" }}>
                <Footer />
            </div>
        </>
    )
}