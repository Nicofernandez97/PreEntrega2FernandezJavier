import React from "react"
import { useContext, useState } from "react"
import { CartContext } from "../../context/ProviderCartContext"
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ButtonGroup from '@mui/material/ButtonGroup';
import "./CartCount.css"




const CartCount = ( {id,price,name, stock, imageLink,description} ) => {

const [cart, setCart] = useContext(CartContext)
const [contador,setContador] = useState(1);


  const  agregarAlCarrito = () =>{
      setCart( (itemsCarrito) => {
       const estaRepetido = itemsCarrito.find((item) => item.id === id)
       if (estaRepetido){
        return itemsCarrito.map((item) => {
          if(item.id === id){
            
            return { ...item, personas: item.personas + contador};
            
            }
          
          else{
            return item
          }
          
        }) 
       }
       else{
        return [...itemsCarrito, {id, personas: contador, price, name}]
       }
      })
    }
 



    const quitarDelCarrito = (id) =>{
      setCart((itemsCarrito) => {
        if(itemsCarrito.find((item) => item.id === id)?.personas === 1){
        return itemsCarrito.filter((item) => item.id !== id)
        }
        else{
          return itemsCarrito.map((item) => {
            if(item.id === id){
              return {...item, personas: item.personas-1}
            }
            else{
              return item
            }
          })
        }
      }) 
      }

      const añadirCantidad = () =>{
        setContador(contador + 1)
      }

      const quitarCantidad = () =>{
        setContador(contador - 1)
      }


      // Contador > Stock? Disable Boton +, Contador < 2? Disable Boton -. Stock en default es 500, probar seteando contador en 499
      return (
        <div >
          
           <ButtonGroup size="small" aria-label="small button group">
           {contador < 2 ? ( 
           <IconButton disabled>
        <RemoveIcon /> 
      </IconButton>)
      : ( <IconButton onClick={quitarCantidad}>
        <RemoveIcon /> 
      </IconButton>
        )
        }

      {contador < stock ? (
      <IconButton onClick={añadirCantidad} >
        <AddIcon/>
      </IconButton>) : (  <IconButton disabled>
        <AddIcon /> 
      </IconButton>
        ) } 

        </ButtonGroup>
        
        {contador === 1?( 
        <p className="contador">Añadir paquete para {contador} persona al carrito</p>)
        :(
          <p className="contador">Añadir paquete para {contador} personas al carrito</p>
        )}
        <Button size="small"  variant='contained' className='agregar-carrito' onClick={() => agregarAlCarrito()}>Agregar al Carrito</Button>

          
      </div>
      
      )
    }


    export default CartCount



