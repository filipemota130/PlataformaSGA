import { Link } from 'react-router-dom'
import './Aside.css'
export function Aside() {
    return (
            <aside className="aside-right">
                <div className="profile">
                    <div className="notifications"></div>
                    <Link to="/profile">
                    <div className="foto"></div>
                    <h5>Karolaine Lima</h5>
                    </Link>
                </div>
                <div className="container-aside"></div>
            </aside>
    )
}