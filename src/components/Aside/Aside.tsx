import { Link } from 'react-router-dom'
import './Aside.css'
export function Aside() {
    const check_login = false
    return (
            <aside className="aside-right">
                <div className="profile m-4">
                    <Link to="/profile" >
                    <div className="foto me-3"></div>
                    </Link>
                <a href='/profile'><h5>Usuário</h5></a>
            </div>
            
                <div className="container-aside"></div>
            </aside>
    )
}