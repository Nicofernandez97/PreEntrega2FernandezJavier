import React, { useEffect, useState } from 'react'
import CardItem from '../../components/CardItem/CardItem';
import { db } from '../../Firebase/FirebaseConfig';
import { collection, query,getDocs } from "firebase/firestore"
import  "./categoriesPage.css"


const SuperofertasPage = () => {
    const [paquetesByCategory, setPaquetesByCategory] = useState([]);
    let items = []
  useEffect ( () => {
    const mostrarPorCategoria = async () => {
    const q= query(collection(db, "items"));
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      items.push({...doc.data(), id: doc.id});
      })
      const filteredItems= items.filter((producto) => producto.category == "ofertas");
      items = []
    setPaquetesByCategory(filteredItems) 
  }
  mostrarPorCategoria();
  },[]);
    
  return (
    <div>
         <div>  
    <h1 className='encabezado-ItemList'>Aprovechá nuestras ofertas y disfrutá tus vacaciones soñadas</h1>
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

export default SuperofertasPage