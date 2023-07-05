import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/ProviderCartContext'
import Spinner from '../../components/Spinner/Spinner'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./CartPage.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {collection, addDoc} from "firebase/firestore"
import { db } from '../../Firebase/FirebaseConfig';
import MessageCart from '../../components/MessageCart/MessageCart';



const CartWidgetPage = () => {


  const [cart,setCart] = useContext(CartContext)
  
  const initialState = {
    name:"",
    lastName:"",
    phone:"",
    mail:"",
    mailConfirm:"",
  }

  const [values,setValues] = useState(initialState);
  const [idCompra, setIdCompra] = useState("");


  const manejadorEstadoForm = (e) =>{
      const {value, name} = e.target;
      setValues({ ...values, [name]: value })
    };

    
    const submitForm = async (e) => {
      e.preventDefault()
      const docRef = await addDoc (collection(db, "Orders"),
      { 
        name: values.name,
        lastName: values.lastName,
        phone:  values.phone,
        mail: values.mail,
        mailConfirm: values.mailConfirm,

      })
      setIdCompra(docRef.id)
      setValues(initialState)
    }

  const sumaMontoTotal = cart.reduce((acc, paq) => acc + (paq.price * paq.personas), 0)

  return (
    <div>
    <div className='Detalle'>
   <div>
    <h2 className='detail-title'>
    Tu carrito:
    </h2>
    </div>
    <div className='cartlist'>
    { cart.length > 0 ?  cart.map((paquete) => {
      if(paquete.name !== ""){
      return (
    
        <div key={paquete.id} className='cart-container'> 
      
         <Card sx={{ maxWidth: 430 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {paquete.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize : 20}}>
       Precio: <strong> {paquete.price} USD por persona </strong>     
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize : 20}}>
       Estas llevando para: <strong> {paquete.personas} personas </strong>     
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize : 20}}>
       Subtotal: <strong> {paquete.personas*paquete.price} USD</strong>     
        </Typography>
        
      </CardContent>
    </Card>
        </div>
        
       
      
        )}
      
    }) : <div>
      <p>Tu carrito esta vacio!</p>
       </div>   }  
       </div>
       <div className='subtotal'>
 <h3> El subtotal es de:   {sumaMontoTotal} USD</h3>. 
  </div> 
    </div>
    <div className='form-wrapper'>
    <h3>Confirmación de compra: Información personal</h3>
    <form action="" onSubmit={submitForm} >
      <div className='form-container'>
        <p> Ingrese su Nombre </p>
        <TextField fullWidth className='form-input' required label="Ingrese su nombre" id="fullWidth"  name='name' value={values.name} onChange={manejadorEstadoForm}/>
        <p> Ingrese su Apellido </p>
        <TextField fullWidth className='form-input' required label="Ingrese su apellido" id="fullWidth" name='lastName' value={values.lastName} onChange={manejadorEstadoForm}/>
        <p> Ingrese su telefono </p>        
        <TextField fullWidth className='form-input' required label="Ingrese su telefono" id="fullWidth" type="number" name='phone' value={values.phone} onChange={manejadorEstadoForm}/>
        <p> Ingrese su Email </p>
        <TextField fullWidth className='form-input' required label="Ingrese su dirección E-mail" id="fullWidth" name='mail' value={values.mail} onChange={manejadorEstadoForm}/>
        <p> Confirmar Email </p>
        <TextField fullWidth className='form-input' required label="Re-Ingrese su dirección E-mail" id="fullWidth" name='mailConfirm' value={values.mailConfirm} onChange={manejadorEstadoForm} error={values.mailConfirm !== values.mail}  />
        </div>
        {values.mailConfirm === values.mail && values.mail !== "" ? 
          <Box component="span" className='buttonSite' sx={{ p: 2, width: 800}}>
          <Button variant="contained" type='submit' className='send-form'>Confirmar</Button>
          </Box>
           : null}
        
        

    </form>
    {idCompra && <MessageCart idCompra={idCompra} />}
    </div>
    
    </div>
  )

}


export default CartWidgetPage