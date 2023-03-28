
import Nav_reduced from '../../components/Navbar_reduced/Navbar_reduced';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export function CadastroProf() {
    
    const [disciplinas, setdisciplina] = useState(["Calculos Loucos 1"]);
    const [disciplinaValue, setdiscValue] = useState("");
    return (
        <>
            <Nav_reduced></Nav_reduced>
            <h1 style={{ fontSize: 30, color: 'white', textAlign: "center", marginBottom: 100 }}>Cadastro/Edição de Professor</h1>
            <div className="col-md-6 offset-md-3">
                <form action='' style={{ width: '100%' }}>
                    <label className='text-white mt-3'>Nome: </label>
                    <div>
                        <InputGroup className="mb-3" >
                            <Form.Control
                                type='text'
                                className='input mt-2'
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
                                className='input mt-2'
                                placeholder="professorson@ic.ufal.br"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20 }}
                            />
                        </InputGroup>

                    </div>

                    <label className='text-white my-2'>Telefone: </label>
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
                            {
                                disciplinas.map((disciplina,i) => (
                                    <li>
                                        {disciplina}
                                        <Button type="button" onClick={
                                            () => {
                                                const new_input = disciplinas.splice(i)
                                                setdisciplina(new_input);
                                            }
                                        } className="btn btn-default btn-sm" style={{ backgroundColor: 'transparent', marginBottom: '10px' }}>
                                            <img src='src\assets\trash.png' width="20" height="20" />
                                        </Button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type='text'
                                placeholder="Ex: Disciplina 1"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                value={disciplinaValue}
                                onChange={(event) => setdiscValue(event.target.value)}
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20, color: 'white' }}
                            />
                        </InputGroup>
                        <div>
                            <Button className="px-3 py-2" id="button" onClick={() => {
                                const new_items = [...disciplinas, disciplinaValue]
                                setdisciplina(new_items)
                                setdiscValue("")
                            }} style={{ borderRadius: 20, backgroundColor: '#F37B0B', borderColor: 'transparent' }}>
                                + Adicionar
                            </Button>
                        </div>

                    </div>
                    <div className="mt-5" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <button type="submit" style={{ borderRadius: 20, backgroundColor: '#1BB121', borderColor: 'transparent', width: '10vw', height: '3rem', color: 'white' }}>
                            Salvar <img src='src\assets\save.png' width="20" height="20" />
                        </button>
                    </div>




                </form>
            </div>

        </>

    );

}

export default CadastroProf;

