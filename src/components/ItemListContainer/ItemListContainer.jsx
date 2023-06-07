import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import CardItem from '../CardItem/CardItem';
import { Link } from 'react-router-dom';
const ItemListContainer = () => {

const [productos,setProductos] = useState([]); 


useEffect(() => { 
    async function encontrarJson(){
      try{
    const encontrarPaquetes = await fetch('https://fakestoreapi.com/products');
    const data = await encontrarPaquetes.json();
    setProductos(data);
    }
  catch (error){
    console.log(error)
  }
  }
  encontrarJson()
  }, []);




  return (
    <div>  
      <h1>Listado de productos:</h1>
      {productos.map((producto) =>{
        return(
          <div key={producto.id}> 
          <Link to={`/item/${producto.id}`}>
            <CardItem data={producto}/> 
            </Link>
           </div>
        )
      })}
    </div>
  )
}

export default ItemListContainer;