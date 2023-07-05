import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/ProviderCartContext';

const CartWidget = () => {
  
  const [cart,setCart] = useContext(CartContext)
  const cantidadTotal = cart.reduce((acc, paquete) => {
    return acc + paquete.personas
  },0)
  
  return (
   <Link to={`/cart/`}><li className="cart-icon"> <ShoppingCartIcon /> {cantidadTotal}</li></Link>
  )
}

export default CartWidget
