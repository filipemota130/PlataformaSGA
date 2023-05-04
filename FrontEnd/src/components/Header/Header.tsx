import { MagnifyingGlass } from "phosphor-react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import './Header.css'

export function Header(){
    return(
        <header>
            <div className="input-container mt-5">
                <InputGroup.Text className="fundo2 text-white border-0 p-2"
                    style={{ borderStartStartRadius: 25, borderEndStartRadius: 25, marginRight: "-12px" }}>
                    <MagnifyingGlass />
                </InputGroup.Text>
                <Form.Control className="fundo2 border-0 text-white"
                    style={{ borderEndEndRadius: 25, borderStartEndRadius: 25, backgroundColor: '#33464D' }}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    type="text"
                />     
            </div>
        </header>
    )
}