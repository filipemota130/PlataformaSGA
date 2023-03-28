import { Button } from 'react-bootstrap'
import './Aside.css'
export function Aside() {
    const check_login = false
    return (
        <aside className="aside-right">
            {
                check_login == false ?
                    (
                        <div>
                            <a href="Login">
                                <Button>
                                    Entrar
                                </Button>
                            </a>
                            <a>
                                <Button>
                                    Cadastre-se
                                </Button>
                            </a>
                        </div>
                    ) :
                    (
                        <div className="profile m-4">
                            <div className="notifications"></div>
                            <div className="foto"></div>
                            <h5>Usuário</h5>
                        </div>
                    )
            }

            <div className="container-aside"></div>
        </aside>
    )
}