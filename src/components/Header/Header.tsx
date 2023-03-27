import { MagnifyingGlass } from "phosphor-react";
import './Header.css'

export function Header(){
    return(
        <header>
            <div className="input-container">
                <MagnifyingGlass/>
                <input className='input' type="text" />
            </div>
        </header>
    )
}