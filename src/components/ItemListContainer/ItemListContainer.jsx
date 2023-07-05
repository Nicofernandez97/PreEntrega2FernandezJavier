import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import CardItem from '../CardItem/CardItem';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../Firebase/FirebaseConfig';
import Spinner from '../Spinner/Spinner';


const ItemListContainer = () => {

const [paquetes, setPaquetes] = useState([]);
  
  useEffect ( () => {
    const mostrarItems = async () => {
    const q= query(collection(db, "items"));
    const querySnapshot = await getDocs(q)
    const items = []
    querySnapshot.forEach((doc) => {
      items.push({...doc.data(), id: doc.id});
    });
    setPaquetes(items) 
  }
  mostrarItems();
  },[]);



  return (
    <div>  
      <h1 className='encabezado-ItemList'>Descubri lo que Argentina tiene para ofrecerte con nosotros:</h1>
      <div className='ItemList'>
  
      { paquetes.length >0 ? paquetes.map((paquete) =>{
        return(
          <div key={paquete.id} className='card-dom'> 
            <CardItem paquete={paquete}/>           
          </div>
        )
      }): <Spinner />}
      </div>
    </div>
  )
}

export default ItemListContainer;