import Nav_reduced from '../../components/Navbar_reduced/Navbar_reduced';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export function DisciplinaForm() {

    return (
        <>
            <Nav_reduced></Nav_reduced>
            <h1 style={{ fontSize: 30, color: 'white', textAlign: "center", marginBottom: 100 }}>Cadastro/Edição de Disciplina</h1>
            <div className='d-flex justify-content-center mx-5' style={{ width: '90%' }}>
                <form action='' style={{ width: '100%' }}>
                    <label className='text-white mt-3'>Código: </label>
                    <div style={{ width: 'auto' }}>
                        <InputGroup className="mb-3" >
                            <Form.Control
                                type='text'
                                placeholder="Ex: COMP666"
                                aria-label="Código"
                                aria-describedby="basic-addon1"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20, color: 'white' }}
                            />
                        </InputGroup>
                    </div>

                    <label className='text-white mt-3'>Nome: </label>
                    <div style={{ width: 'auto' }}>
                        <InputGroup className="mb-3" >
                            <Form.Control
                                type='text'
                                placeholder="Ex: Programação 3"
                                aria-label="Nome"
                                aria-describedby="basic-addon1"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20, color: 'white' }}
                            />
                        </InputGroup>
                    </div>
                    <label className='text-white mt-3'>Professor: </label>
                    <div style={{ width: 'auto' }}>
                        <Form.Select style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20, color: 'white', display: 'flex', width: '50rem', height: '2rem' }}>
                            <option>[Selecionar]</option>
                            <option value="1">Professor 1</option>
                            <option value="2">Professor 2</option>
                            <option value="3">Professor 3</option>
                        </Form.Select>
                    </div>
                    <label className='text-white mt-3'>Carga horária: </label>
                    <div style={{ width: 'auto' }}>
                        <InputGroup className="mb-3" >
                            <Form.Control
                                type='number'
                                className='text-white'
                                placeholder="Ex: 72"
                                aria-label="Carga"
                                aria-describedby="basic-addon1"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20 }}
                            />
                        </InputGroup>
                    </div>
                    <label className='text-white mt-3'>Imagem: </label>

                    <div style={{ width: 'auto' }}>
                        <Form.Group controlId="formFile" className="mb-3" >
                            <Form.Control
                                type="file"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20, height: '3rem', textAlign: 'right', color: 'white' }} />
                        </Form.Group>
                    </div>
                    <label className='text-white mt-3'>Banner da disciplina: </label>
                    <div style={{ width: 'auto' }}>
                        <Form.Group controlId="formFile" className="mb-3" >
                            <Form.Control
                                type="file"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20, height: '3rem', textAlign: 'right', color: 'white' }} />
                        </Form.Group>
                    </div>
                    <label className='text-white mt-3'>Pré-requisitos: </label>
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
                        <Button id="button" style={{ borderRadius: 20, backgroundColor: '#F37B0B', borderColor: 'transparent', marginBottom: '3rem' }}>
                            + Adicionar
                        </Button>
                    </div>
                    <label className='text-white mt-3'>Horários: </label>
                    <div className='text-white mt-3 ml-5' style={{}}>
                        <ul>
                            <li>Seg (15:20 - 17:00)
                                <button type="button" className="btn btn-default btn-sm" style={{ backgroundColor: 'transparent', marginBottom: '10px' }}>
                                    <img src='src\assets\trash.png' width="20" height="20" />
                                </button>
                            </li>

                            <li>Ter (70:30 - 9:20)
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
                                placeholder="Ex: Qua (70:30 - 9:20)"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                style={{ backgroundColor: '#33464D', borderColor: 'transparent', borderRadius: 20, color: 'white' }}
                            />
                        </InputGroup>
                        <Button id="button" style={{ borderRadius: 20, backgroundColor: '#F37B0B', borderColor: 'transparent', marginBottom: '3rem' }}>
                            + Adicionar
                        </Button>
                    </div>

                    <label className='text-white mt-3'>Categorias da disciplina: </label>
                    {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="text-white mb-3" style={{ fontSize: '14px' }}>
                            <Form.Check
                                id={`default-${type}`}
                                label={`Obrigatória`}
                            />
                            <Form.Check
                                id={`default-${type}`}
                                label={`Eletiva`}
                            />
                            <br></br>
                            <Form.Check
                                id={`default-${type}`}
                                label={`Ciência da computação`}
                            />
                            <Form.Check
                                id={`default-${type}`}
                                label={`Engenharia de computação`}
                            />
                            <br></br>
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

                    <label className='text-white mt-3'>Ementa: </label>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            placeholder='Conteúdo da ementa...'
                            style={{ backgroundColor: '#33464D', borderRadius: 5, color: 'white' }}
                            as="textarea"
                            rows={3} />
                    </Form.Group>

                    <label className='text-white mt-3'>Objetivos: </label>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            placeholder='Objetivos da disciplina...'
                            style={{ backgroundColor: '#33464D', borderRadius: 5, color: 'white' }}
                            as="textarea"
                            rows={3} />
                    </Form.Group>

                    <label className='text-white mt-3'>Conteúdo pragmático: </label>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            placeholder='Conteúdo pragmático...'
                            style={{ backgroundColor: '#33464D', borderRadius: 5, color: 'white' }}
                            as="textarea"
                            rows={3} />
                    </Form.Group>

                    <label className='text-white mt-3'>Metodologia: </label>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            placeholder='Metodologia da disciplina...'
                            style={{ backgroundColor: '#33464D', borderRadius: 5, color: 'white' }}
                            as="textarea"
                            rows={3} />
                    </Form.Group>

                    <label className='text-white mt-3'>Avaliação: </label>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            placeholder='Formas de avaliação...'
                            style={{ backgroundColor: '#33464D', borderRadius: 5, color: 'white' }}
                            as="textarea"
                            rows={3} />
                    </Form.Group>

                    <label className='text-white mt-3'>Referências: </label>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            placeholder='Referências utilizadas na disciplina...'
                            style={{ backgroundColor: '#33464D', borderRadius: 5, color: 'white' }}
                            as="textarea"
                            rows={3} />
                    </Form.Group>

                    <div style={{ textAlign: 'center', marginTop: '10rem', marginBottom: '5rem' }}>
                        <button type="submit" style={{ borderRadius: 20, backgroundColor: '#1BB121', borderColor: 'transparent', width: '10rem', height: '3rem', color: 'white' }}>
                            Salvar <img src='src\assets\save.png' width="20" height="20" />
                        </button>

                    </div>
                </form>
            </div>
        </>
    );
}

export default DisciplinaForm;