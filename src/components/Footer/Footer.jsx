import React from 'react'
import "./Footer.css"
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';


const Footer = () => {
  return (
    <div className='container-footer'>      
        <div className='derechos-footer'>
          <h4 >Derechos y condiciones de compra en Max Baires</h4>
          <p>
            Avisos legales (terminos y condiciones de compra )
          </p>
          <p>
            Derechos Reservados, Copyright, Acerca de nosotros, ETC.
          </p>
        </div>
        <div className='contactanos-footer'>
          <h4 >Contactanos</h4>
          <ul >
            <li>
              <div>
            <p >
               <CallIcon className='Icon'/>     
              Servicio venta: 0800-...</p>
              </div>
            </li>
            <li >
            <div>

            <p >
               <CallIcon className='Icon'/>            
              Servicio posventa: 0800-...</p>
              </div>
            </li>
            <li>
              <div>
              <p >
               <EmailIcon className='Icon'/> Email: max-baires@...</p>
               </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Footer