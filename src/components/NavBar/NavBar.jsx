import React from 'react'
import Logo from "./Logo.jpg"
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
const NavBar = ({nombre,sector1,sector2,sector3,sector4,sector5,sector6,sector7}) => {
  return (
    <nav className='container-navBar'>
     
        <a href='http://localhost:5173/'>
          <img src={Logo} height="60" alt="Logo Max Baires" />
        </a>
        <a className="" href="http://localhost:5173/"><strong> <h1>{nombre} </h1></strong></a>  
        <div>
          <ul >
            <li className='inicio' >
              <a className="nav-link" href="http://localhost:5173/">{sector1}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:5173/">{sector2}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:5173/">{sector3}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:5173/">{sector4}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:5173/">{sector5}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active disabled" href="http://localhost:5173/">{sector6}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:5173/">{sector7}</a>
            </li>
            <CartWidget />
        </ul>
        </div>
    </nav>
  )
}

export default NavBar