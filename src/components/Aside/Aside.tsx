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
                        <div className="profile">
                            <div className="notifications"></div>
                            <div className="foto"></div>
                            <h3>Usuário</h3>
                        </div>
                    )
                }

            <div className="container-aside"></div>
        </aside>
    )
}