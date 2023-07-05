import React, { useContext } from 'react'
import Logo from "./Logo.jpg"
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import {Link} from "react-router-dom";
import NavBarMenu from '../NavBarMenu/NavBarMenu';
const NavBar = ({nombre}) => {

    
  return (
    <nav className='container-navBar'>
        <Link to="/"> <img src={Logo} height="50" alt="Logo Max Baires" /></Link>
        <a className="" href="http://localhost:5173/"><h2>{nombre} </h2></a>  
        
          <ul >
          <Link to ="/"> <p> Inicio </p></Link> 
          <Link to ="/productos"> <p> Productos </p> </Link> 
          <Link > <NavBarMenu /></Link> 
          <CartWidget />
        </ul>
    
    </nav>
  )
}

export default NavBar
