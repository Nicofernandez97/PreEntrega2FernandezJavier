import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CardItem from '../../components/CardItem/CardItem';



const ProductosHombrePage = () => {

    const [productos,setProductos] = useState([]); 


useEffect(() => { 
    async function encontrarJson(){
      try{
    const encontrarPaquetes = await fetch('https://fakestoreapi.com/products');
    const data = await encontrarPaquetes.json();
   const filtroHombre = data.filter((producto) => producto.category == "men's clothing")
   setProductos(filtroHombre);
    }
  catch (error){
    console.log(error)
  }
  }
  encontrarJson()
  }, []);

    
  return (
    <div>
         <div>  
    <h1 className='encabezado-ItemList'>Listado de productos: Filtro Hombre</h1>
    <div className='ItemList'>
    {productos.map((producto) =>{
      return(
        <div key={producto.id} className='card-dom'> 
        <Link to={`/item/${producto.id}`}>
          <CardItem data={producto}/> 
          </Link>
         </div>
      )
    })}
    </div>
  </div>
</div>
  )
}

export default ProductosHombrePage