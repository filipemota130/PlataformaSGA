import Navbar_reduced from "../../components/Navbar_reduced/Navbar_reduced"
import Table from 'react-bootstrap/Table';
import { Card } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "/src/pages/Grade/Grade.css"

export function Grade() {

    const periodos = [
        1, 2, 3, 4, 5, 6, 7, 8
    ]
    const disciplinasCC =
        [
            "Calculo 1 - COMP101",
            "Calculo 2 - COMP102",
            "Calculo 3 - COMP103",
            "Calculo 4 - COMP104",
        ]
    const disciplinasED =
        [
            "Calculo 1 - ECOM101",
            "Calculo 2 - ECOM102",
            "Calculo 3 - ECOM103",
            "Calculo 4 - ECOM104",
        ]
    const dias = [
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta"
    ]
    const horarios = [
        { value: "7:30-8:20", interval: 1 },
        { value: "8:20-9:10", interval: 1 },
        { value: "9:10-9:20", interval: 0.5 },
        { value: "9:20-10:10", interval: 1 },
        { value: "10:10-11:00", interval: 1 },
        { value: "11:00-11:10", interval: 0.5 },
        { value: "11:10-12:00", interval: 1 },
        { value: "12:00-12:50", interval: 1 },
        { value: "13:30-14:20", interval: 1 },
        { value: "14:20-15:10", interval: 1 },
        { value: "15:10-15:20", interval: 0.5 },
        { value: "15:20-16:10", interval: 1 },
        { value: "16:10-17:00", interval: 1 },
        { value: "17:00-17:10", interval: 0.5 },
        { value: "17:10-18:00", interval: 1 },
        { value: "18:00-18:50", interval: 1 },
        { value: "18:50-19:00", interval: 0.5 },
        { value: "19:00-19:50", interval: 1 },
        { value: "19:50-20:40", interval: 1 },
        { value: "20:40-20:50", interval: 0.5 },
        { value: "20:50-21:40", interval: 1 },
        { value: "21:40-22:30", interval: 1 },
    ]

    return (
        <>
            <Navbar_reduced />
            <div className="text-center text-white mt-5">
                <h3>
                    Simulador de Matrícula
                </h3>
            </div>
            <div className="m-5">
                <Card className="m-5 p-5 fundo2">
                    <Table striped bordered variant="dark" responsive>
                        <thead>
                            <tr className="text-white" style={{ maxWidth: 10 }}>
                                <th style={{ maxWidth: 10 }}>Horários</th>
                                {dias.map((_, index) => (
                                    <th key={index}>{_}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="text-white" >
                            {horarios.map((_, index) => (
                                <tr>
                                    <td key={index} style={{ width: "120px" }}>{_.value}</td>
                                    {dias.map((_, index) => (
                                        <td key={index}></td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card>
                <div className="d-flex justify-content-end">
                    <Button className="border-0 px-5 py-2" style={{ borderRadius: 15, backgroundColor:"#6a2b8f" }}> Exportar para PDF </Button>
                </div>
            </div>
            <div className="m-5">
                <Card className="m-5 p-3 fundo2">
                    {
                        periodos.map((index) => (
                            <div className="d-flex justify-content-center">
                                <div className="m-4">
                                    <Card.Title className="text-white">{index}º Período - CC:</Card.Title>
                                    <Card.Body className="d-flex flex-wrap fundo1 text-white p-4" style={{ borderRadius: 10 }}>
                                        {
                                            disciplinasCC.map((value) => (
                                                <Form.Check
                                                    className="me-5"
                                                    label={value}
                                                />
                                            ))
                                        }
                                    </Card.Body>
                                </div>
                                <div className="m-4">
                                    <Card.Title className="text-white">{index}º Período - EC:</Card.Title>
                                    <Card.Body className="d-flex flex-wrap fundo1 text-white p-4" style={{ borderRadius: 10 }}>
                                        {
                                            disciplinasED.map((value) => (
                                                <Form.Check
                                                    className="me-5"
                                                    label={value}
                                                />
                                            ))
                                        }
                                    </Card.Body>
                                </div>
                            </div>
                        ))
                    }
                </Card>
                <div className="d-flex justify-content-end">
                    <Button className="bg-danger border-0 pt" style={{ borderRadius:15 }}> Limpar Simulação </Button>
                </div>
                
            </div>
        </>
    )
}