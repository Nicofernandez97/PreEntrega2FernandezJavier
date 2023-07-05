import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CardItem from '../../components/CardItem/CardItem';
import { db } from '../../Firebase/FirebaseConfig';
import { collection, query,  getDocs } from "firebase/firestore"
import  "./categoriesPage.css"

const PaquetesNortePage = () => {
    const [paquetesByCategory, setPaquetesByCategory] = useState([]);
    const { category } = useParams();
    let items = []
  useEffect ( () => {
    const mostrarPorCategoria = async () => {
    const q= query(collection(db, "items"));
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      items.push({...doc.data(), id: doc.id});
      })
      const filteredItems= items.filter((producto) => producto.category == "norte");
      items = []
    setPaquetesByCategory(filteredItems) 
  }
  mostrarPorCategoria();
  },[]);
    
  return (
    <div>
         <div>  
    <h1 className='encabezado-ItemList'>Conocé todo lo que el norte Argentino tiene para ofrecerte con nuestros paquetes</h1>
    <div className='ItemList'>
    {paquetesByCategory ? paquetesByCategory.map((paquete) =>{
      return(
        <div key={paquete.id} className='card-dom'> 
        <CardItem paquete={paquete}/>           
      </div>
      )
    }): <Spinner /> }
    </div>
  </div>
</div>
  )
}

export default PaquetesNortePage