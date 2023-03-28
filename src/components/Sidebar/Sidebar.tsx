import ufalLogo from '../../assets/logoic.svg'
import { House, UsersThree, Book, Table, Info, } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
// import { NavLink } from 'react-router-dom'

export function Sidebar(){
  return (
    <>
    <div>
    <div className="mobile-menu">
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
    
      <aside className="sidebar">
        <img src={ufalLogo} className="logo" alt="Logo"/>
        <nav className="main-navegation">
          <NavLink to='/'> <House weight="fill"/>Home</NavLink>
          <a href="/disciplinas"><Book/>Disciplinas</a>
          <a href=""> <UsersThree/>Professores</a>
          <a href=""> <Table/>Grade</a>
          <a href="/sobre"> <Info/>Sobre nós</a>
        </nav>       
      </aside>
      </div>
    </>
      
    )
}