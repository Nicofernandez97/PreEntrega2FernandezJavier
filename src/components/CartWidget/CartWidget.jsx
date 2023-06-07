import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'
import { Link } from 'react-router-dom';
const CartWidget = () => {
  return (
   <Link to={`/cart/`}><li className="cart-icon"> <ShoppingCartIcon /></li></Link>
  )
}

export default CartWidget
