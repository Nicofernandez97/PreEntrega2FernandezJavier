import * as React from 'react';
import Alert from '@mui/material/Alert';
import "./messageCart.css"
const MessageCart = ( {idCompra} ) => {
  return (
    <Alert className='idCompra-alert' severity="success">Gracias por su compra! Su ID de transacción es: {idCompra}</Alert>
  )
}

export default MessageCart