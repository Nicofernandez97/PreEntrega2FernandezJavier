import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Axios } from 'axios';
import CardItem from '../../components/CardItem/CardItem';


const ItemIdPage = () => {
    let {id} = useParams();
    const [prod,setProd] = useState({});
    
    useEffect(() => { 
        async function encontrarJson(){
          try{
        const encontrarPaquete = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await encontrarPaquete.json();
        setProd(data);
        }
      catch (error){
        console.log(error)
      }
      }
      encontrarJson()
      }, [id]);
    
   return (
    <div><h2>
    Detalle de tu producto:    
    </h2>
    {<CardItem  data={prod} />} 
    </div>
  )
}

export default ItemIdPage