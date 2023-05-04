import Nav_reduced from '../../components/Navbar_reduced/Navbar_reduced';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import axiosClient from '../../axios';
import { useState } from 'react';

export function Cadastro(){
    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_check, setPassword_check] = useState('');
    const [etnia, setEtnia] = useState('');
    const [sexo, setSexo] = useState('');
    const [curso, setCurso] = useState('');
    const [nasc, setNasc] = useState('');

    const enviar = (ev: { preventDefault: () => void; }) => {
        ev.preventDefault();
        setError({__html: '' })

        axiosClient.post('/cadastroAl', {
            nome: nome,
            matricula: matricula,
            email: email,
            password: password,
            password_check: password_check,
            etnia: etnia,
            sexo: sexo,
            curso: curso,
            nasc: nasc
        })

        .then(({data}) => {
            console.log(data)
        })
        .catch(({response}) => {
            console.log(response);
        });
    };

    return(
        <div>
        <Nav_reduced></Nav_reduced>
         <h1 style={{ fontSize: 30, color: 'white', textAlign: "center", marginBottom: 100 }}>Cadastro/Edição de Aluno</h1>
         <div className="col-md-6 offset-md-3">
            <div className='d-flex justify-content-center mx-5 mt-5' style={{ width: '90%' }}>
            <div className='d-flex justify-content-center mx-5' style={{ width: '60%' }}>
                <form action='' method='post' style={{ width: '100%' }}>
                            <label className='text-white my-3'>Nome de usuário<b style={{ color: "#a90c0c" }}>*</b> : </label>
                    <div style={{ width: 'auto' }}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                name='nome'
                                type='text'
                                className='text-white'
                                placeholder="Nome"
                                aria-label="Nome"
                                aria-describedby="basic-addon1"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20 }}
                            />
                        </InputGroup>
                    </div>

                    <label className='text-white my-3'>Matrícula<b style={{color:"#a90c0c"}}>*</b> : </label>
                    <div>
                        <InputGroup className="mb-3" >
                            <Form.Control
                                name='matricula'
                                type='number'
                                className='input text-white'
                                placeholder="123456789"
                                aria-label="Matricula"
                                aria-describedby="basic-addon1"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20 }}
                            />
                        </InputGroup>
                    </div>

                            <label className='text-white my-3'>Email<b style={{ color: "#a90c0c" }}>*</b>: </label>
                    <div>
                        <InputGroup className="mb-3" >
                            <Form.Control
                                name='email'
                                type='email'
                                className='input text-white'
                                placeholder="aluno@ic.ufal.br"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20 }}
                            />
                        </InputGroup>

                    </div>

                            <label className='text-white my-3'>Senha<b style={{ color: "#a90c0c" }}>*</b> : </label>
                    <div>
                        <InputGroup className="mb-3" >
                            <Form.Control
                                name='password'
                                type='password'
                                className='input text-white'
                                placeholder="********"
                                aria-label="Senha"
                                aria-describedby="basic-addon1"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20 }}
                            />
                        </InputGroup>
                    </div>
                    <label className='text-white my-3'>Confirmar senha<b style={{color:"#a90c0c"}}>*</b> : </label>
                    <div>
                        <InputGroup className="mb-3" >
                            <Form.Control
                                name='password_check'
                                type='password'
                                className='input text-white'
                                placeholder="********"
                                aria-label="Senha"
                                aria-describedby="basic-addon1"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20 }}
                            />
                        </InputGroup>
                    </div>

                    <label className='text-white my-3'>Sexo: </label>
                    <div>
                        <InputGroup className="mb-3" >
                            <Form.Select 
                                name='sexo'
                                aria-label="Default select example"
                                className='input text-white'
                                aria-describedby="basic-addon1"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20 }}>
                                    <option>Selecione:</option>
                                    <option value="1">Feminino</option>
                                    <option value="2">Masculino</option>
                                    <option value="3">Outro</option>
                                    </Form.Select>
                        </InputGroup>
                    </div>

                    <label className='text-white my-3'>Data de Nascimento: </label>
                    <div>
                        <InputGroup className="mb-3" >
                            <Form.Control
                                name='nasc'
                                type='date'
                                className='input text-white'
                                aria-label="Datanasc"
                                aria-describedby="basic-addon1"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20 }}
                            />
                        </InputGroup>
                    </div>

                    <label className='text-white my-3'>Etnia: </label>
                    <div>
                        <InputGroup className="mb-3" >
                            <Form.Select 
                                name='etnia'
                                aria-label="Default select example"
                                className='input text-white'
                                aria-describedby="basic-addon1"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20 }}>
                                    <option>Selecione:</option>
                                    <option value="1">Branco</option>
                                    <option value="2">Pardo</option>
                                    <option value="3">Preto</option>
                                    <option value="4">Amarelo</option>
                                    <option value="5">Indígena</option>
                                    </Form.Select>
                        </InputGroup>
                    </div>

                    <label className='text-white my-3'>Curso: </label>
                    <div>
                        <InputGroup className="mb-3" >
                            <Form.Select 
                                name='curso'
                                aria-label="Default select example"
                                className='input text-white'
                                aria-describedby="basic-addon1"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20 }}>
                                    <option>Selecione:</option>
                                    <option value="1">Ciência da Computação</option>
                                    <option value="2">Engenharia da Computação</option>
                                    </Form.Select>
                        </InputGroup>
                    </div>
                
                    <div className='text-center my-5'>
                        <button type="submit" style={{ borderRadius: 20, backgroundColor: '#1BB121', borderColor: 'transparent', width: '10rem', height: '3rem', color: 'white' }}>
                            Salvar <img src='src\assets\save.png' width="20" height="20" />
                        </button>
                    </div>
                </form>
                </div>
            </div>
            </div>
            
        </div>
    )
}

function setError(arg0: { __html: string; }) {
    throw new Error('Function not implemented.');
}

