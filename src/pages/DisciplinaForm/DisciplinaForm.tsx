import Nav_reduced from '../../components/Navbar_reduced/Navbar_reduced';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export function DisciplinaForm() {

    const [disciplinas, setdisciplina] = useState(["Calculos Loucos 1"]);
    const [horarios, sethorarios] = useState(["Ter (00:00-5:00) "]);
    const [disciplinaValue, setdiscValue] = useState("");
    const [horarioValue, sethorarioValue] = useState("");

    return (
        <>
            <Nav_reduced></Nav_reduced>
            <h1 style={{ fontSize: 30, color: 'white', textAlign: "center", marginBottom: 100 }}>Cadastro/Edição de Disciplina</h1>
            <div className="col-md-6 offset-md-3">
                <Form action='' style={{ width: '100%' }}>
                    <label className='text-white'>Código:</label>
                    <div style={{ width: 'auto' }}>
                        <InputGroup className="mb-3" >
                            <Form.Control
                                type='text'
                                className='input mt-2'
                                placeholder="Ex: COMP666"
                                aria-label="Código"
                                aria-describedby="basic-addon1"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20, color: 'white' }}
                            />
                        </InputGroup>
                    </div>

                    <label className='text-white my-3'>Nome: </label>
                    <div style={{ width: 'auto' }}>
                        <InputGroup className="mb-3" >
                            <Form.Control
                                type='text'
                                className='input mt-2'
                                placeholder="Ex: Programação 3"
                                aria-label="Nome"
                                aria-describedby="basic-addon1"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20, color: 'white' }}
                            />
                        </InputGroup>
                    </div>
                    <label className='text-white my-3'>Professor: </label>
                    <div style={{ width: 'auto' }}>
                        <Form.Select style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20, color: 'white', display: 'flex', maxWidth: "50%", height: 'auto' }}>
                            <option>[Selecionar]</option>
                            <option value="1">Professor 1</option>
                            <option value="2">Professor 2</option>
                            <option value="3">Professor 3</option>
                        </Form.Select>
                    </div>
                    <label className='text-white mt-4 mb-2'>Carga horária: </label>
                    <div style={{ width: 'auto', maxWidth:'300px' }}>
                        <InputGroup className="mb-3" >
                            <Form.Control
                                type='number'
                                className='input mt-2'
                                placeholder="Ex: 72"
                                aria-label="Carga"
                                aria-describedby="basic-addon1"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20 }}
                            />
                        </InputGroup>
                    </div>
                    <label className='text-white mt-3 mb-2'>Imagem: </label>

                    <div style={{ width: 'auto' }}>
                        <Form.Group controlId="formFile" className="mb-3" >
                            <Form.Control
                                type="file"
                                className='input text-white p-2'
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20, width: "50%" }} />
                        </Form.Group>
                    </div>
                    <label className='text-white  mt-3 mb-2'>Banner da disciplina: </label>
                    <div style={{ width: 'auto' }}>
                        <Form.Group controlId="formFile" className="mb-3" >
                            <Form.Control
                                type="file"
                                className='input text-white p-2'
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20, width: "50%" }} />
                        </Form.Group>
                    </div>
                    <label className='text-white mt-3 mb-2'>Pré-requisitos: </label>
                    <div className='text-white mt-3 ml-5'>
                        <ul>
                            {
                                disciplinas.map((item,i) =>
                                    <li>{item}
                                        <button type="button" onClick={
                                            () => {
                                                const new_horario = horarios.splice(i)
                                                sethorarios(new_horario);
                                            }
                                        } className="btn btn-default btn-sm" style={{ backgroundColor: 'transparent', marginBottom: '10px' }}>
                                            <img src='src\assets\trash.png' width="20" height="20" />
                                        </button>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type='text'
                                placeholder="Ex: Disciplina 1"
                                className='input mt-2'
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                value={disciplinaValue}
                                onChange={(event) => setdiscValue(event.target.value)}
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20, color: 'white' }}
                            />
                        </InputGroup>
                        <div className='d-flex justify-content-end'>
                            <Button id="button" onClick={() => {
                                const new_items = [...disciplinas, disciplinaValue]
                                setdisciplina(new_items)
                                setdiscValue("")
                            }} style={{ borderRadius: 20, backgroundColor: '#F37B0B', borderColor: 'transparent', marginBottom: '3rem' }}>
                                + Adicionar
                            </Button>
                        </div>

                    </div>
                    <label className='text-white mt-3'>Horários: </label>
                    <div className='text-white mt-3 ml-5' style={{}}>
                        <ul>
                            {
                                horarios.map((item,i) =>
                                    <li>{item}
                                        <button type="button" className="btn btn-default btn-sm" style={{ backgroundColor: 'transparent', marginBottom: '10px' }} onClick={
                                            () => {
                                                const new_horario = horarios.splice(i)
                                                sethorarios(new_horario);
                                            }
                                        }>
                                            <img src='src\assets\trash.png' width="20" height="20" />
                                        </button>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type='text'
                                placeholder="Ex: Qua (70:30 - 9:20)"
                                aria-label="Recipient's username"
                                value={horarioValue}
                                className='input mt-2'
                                onChange={(event) => sethorarioValue(event.target.value)}
                                aria-describedby="basic-addon2"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20, color: 'white' }}
                            />
                        </InputGroup>
                        <div className='d-flex justify-content-end'>
                            <Button id="button" onClick={() => {
                                const new_items = [...horarios,horarioValue]
                                sethorarios(new_items)
                                sethorarioValue("")
                            }} style={{ borderRadius: 20, backgroundColor: '#F37B0B', borderColor: 'transparent', marginBottom: '3rem' }}>
                                + Adicionar
                            </Button>
                        </div>
                    </div>

                    <label className='text-white mt-3 fs-5'>Categorias da disciplina: </label>
                    <div className='ms-4'>
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="text-white my-4" style={{ fontSize: '14px' }}>
                                <div className='mb-2'>Tipo:</div>
                                <Form.Check
                                    id={`default-${type}`}
                                    label={`Obrigatória`}
                                />
                                <Form.Check
                                    id={`default-${type}`}
                                    label={`Eletiva`}
                                />
                                <br></br>
                                <div className='mb-2'>Curso:</div>
                                <Form.Check
                                    id={`default-${type}`}
                                    label={`Ciência da computação`}
                                />
                                <Form.Check
                                    id={`default-${type}`}
                                    label={`Engenharia de computação`}
                                />
                                <br></br>
                                <div className='mb-2'>Enfase:</div>
                                <Form.Check
                                    id={`default-${type}`}
                                    label={`Computação visual`}
                                />
                                <Form.Check
                                    id={`default-${type}`}
                                    label={`Sistemas inteligentes`}
                                />
                                <Form.Check
                                    id={`default-${type}`}
                                    label={`Sistemas de computação`}
                                />
                                <Form.Check
                                    id={`default-${type}`}
                                    label={`Sistemas de informação`}
                                />
                            </div>
                        ))}
                    </div>


                    <label className='text-white mt-3'>Ementa: </label>
                    <Form.Group className="mt-3 ml-5" controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            placeholder='Conteúdo da ementa...'
                            style={{ backgroundColor: '#33464D', borderRadius: 5, color: 'white' }}
                            as="textarea"
                            rows={3} />
                    </Form.Group>

                    <label className='text-white mt-3'>Objetivos: </label>
                    <Form.Group className="mt-3 ml-5" controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            placeholder='Objetivos da disciplina...'
                            style={{ backgroundColor: '#33464D', borderRadius: 5, color: 'white' }}
                            as="textarea"
                            rows={3} />
                    </Form.Group>

                    <label className='text-white mt-3'>Conteúdo pragmático: </label>
                    <Form.Group className="mt-3 ml-5" controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            placeholder='Conteúdo pragmático...'
                            style={{ backgroundColor: '#33464D', borderRadius: 5, color: 'white' }}
                            as="textarea"
                            rows={3} />
                    </Form.Group>

                    <label className='text-white mt-3'>Metodologia: </label>
                    <Form.Group className="mt-3 ml-5" controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            placeholder='Metodologia da disciplina...'
                            style={{ backgroundColor: '#33464D', borderRadius: 5, color: 'white' }}
                            as="textarea"
                            rows={3} />
                    </Form.Group>

                    <label className='text-white mt-3'>Avaliação: </label>
                    <Form.Group className="mt-3 ml-5" controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            placeholder='Formas de avaliação...'
                            style={{ backgroundColor: '#33464D', borderRadius: 5, color: 'white' }}
                            as="textarea"
                            rows={3} />
                    </Form.Group>

                    <label className='text-white mt-3'>Referências: </label>
                    <Form.Group className="mt-3 ml-5" controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            placeholder='Referências utilizadas na disciplina...'
                            style={{ backgroundColor: '#33464D', borderRadius: 5, color: 'white' }}
                            as="textarea"
                            rows={3} />
                    </Form.Group>

                    <div className=' d-flex justify-content-center my-5'>
                        <button type="submit" style={{ borderRadius: 20, backgroundColor: '#1BB121', borderColor: 'transparent', width: '10vw', height: '3rem', color: 'white' }}>
                            Salvar <img src='src\assets\save.png' width="20" height="20" />
                        </button>

                    </div>
                </Form>
            </div>
        </>
    );
}

export default DisciplinaForm;