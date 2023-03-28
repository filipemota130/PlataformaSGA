import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import './Aside.css'
import Card from 'react-bootstrap/Card';

export function Aside() {
    const check_login = false
    const top_professores = [
        {
            nome:"Ranilson Paiva",
            nota: 10,
            cor:"#ffffff"
        },
        {
            nome: "Thomas Jeff",
            nota: 7.8,
            cor: "#af1d1d"
        },
        {
            nome: "Issac Newton",
            nota: 8.4,
            cor: "#ffffff"
        },
    ]
    return (
        <aside className="aside-right">
            <div className="profile m-4">
                <Link to="/profile" >
                    <div className="foto me-3"></div>
                </Link>
                <a href='/profile' className='me-4'><h5>Usuário</h5></a>
                 <a href='/Login' className=''><Button className='btn btn-primary'>Entrar</Button></a>
            </div>
            <div className="container-aside p-5 fs-5">
                {
                    top_professores.map((prof) => (
                        <div className='d-flex my-3 text-white'>
                            {prof.nome}
                            <img  className="ms-2" src='src\assets\estrela.png' width="15" height="15" />
                            <div className='fs-5'>&nbsp;&nbsp;{prof.nota}/10</div>
                        </div>
                    ))
                }
            </div>
        </aside>
    )
}