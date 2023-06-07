import React from 'react'
import Logo from "./Logo.jpg"
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import {Link} from "react-router-dom";
const NavBar = ({nombre}) => {
  return (
    <nav className='container-navBar'>
        <Link to="/"> <img src={Logo} height="50" alt="Logo Max Baires" /></Link>
        <a className="" href="http://localhost:5173/"><h2>{nombre} </h2></a>  
        <div>
          <ul >
          <Link to ="/"> Inicio</Link> 
          <Link to ="/productos"> Productos</Link> 
          <Link to ="/categorias"> Categorias</Link> 
          <CartWidget />
        </ul>
        </div>
    </nav>
  )
}

export default NavBar
