import Nav_reduced from '../../components/Navbar_reduced/Navbar_reduced';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export function CadastroProf() {
    return (
        <>
            <Nav_reduced></Nav_reduced>
            <h1 style={{ fontSize: 30, color: 'white', textAlign: "center", marginBottom: 100 }}>Cadastro/Edição de Professor</h1>
            <div className='d-flex justify-content-center mx-5' style={{ width: '90%' }}>
                <form action='' style={{ width: '100%' }}>
                    <label className='text-white mt-3'>Nome: </label>
                    <div style={{ width: 'auto' }}>
                        <InputGroup className="mb-3" >
                            <Form.Control
                                type='text'
                                className='text-white'
                                placeholder="Nome"
                                aria-label="Nome"
                                aria-describedby="basic-addon1"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20 }}
                            />
                        </InputGroup>
                    </div>

                    <label className='text-white mt-3'>Email: </label>
                    <div>
                        <InputGroup className="mb-3" >
                            <Form.Control
                                type='email'
                                className='input text-white'
                                placeholder="professorson@ic.ufal.br"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20 }}
                            />
                        </InputGroup>

                    </div>

                    <label className='text-white mt-3'>Telefone: </label>
                    <div>
                        <InputGroup className="mb-3" >
                            <Form.Control
                                type='tel'
                                className='input text-white'
                                placeholder="(82) 95555-5555"
                                aria-label="Telefone"
                                aria-describedby="basic-addon1"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20 }}
                            />
                        </InputGroup>
                    </div>

                    <label className='text-white mt-3'>Disciplinas lecionadas: </label>
                    <div className='text-white mt-3 ml-5' style={{}}>
                        <ul>
                            <li>Cálculo 1
                                <button type="button" className="btn btn-default btn-sm" style={{ backgroundColor: 'transparent', marginBottom: '10px' }}>
                                    <img src='src\assets\trash.png' width="20" height="20" />
                                </button>
                            </li>

                            <li>Cálculo 2
                                <button type="button" className="btn btn-default btn-sm" style={{ backgroundColor: 'transparent', marginBottom: '10px' }}>
                                    <img src='src\assets\trash.png' width="20" height="20" />
                                </button>
                            </li>

                            <li>Cálculo 3
                                <button type="button" className="btn btn-default btn-sm" style={{ backgroundColor: 'transparent', marginBottom: '10px' }}>
                                    <img src='src\assets\trash.png' width="20" height="20" />
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type='text'
                                placeholder="Ex: Disciplina 1"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20, color: 'white' }}
                            />
                        </InputGroup>
                        <Button id="button" style={{ borderRadius: 20, backgroundColor: '#F37B0B', borderColor: 'transparent' }}>
                            + Adicionar
                        </Button>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '20rem', marginBottom: '5rem' }}>
                        <button type="submit" style={{ borderRadius: 20, backgroundColor: '#1BB121', borderColor: 'transparent', width: '10rem', height: '3rem', color: 'white' }}>
                            Salvar <img src='src\assets\save.png' width="20" height="20" />
                        </button>

                    </div>
                </form>
            </div>

        </>

    );

}
export default CadastroProf;

