import React, { useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { collection, query, where, getDocs, documentId } from "firebase/firestore"
import { db } from "../../Firebase/FirebaseConfig"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Spinner from '../../components/Spinner/Spinner';
import "./ItemIdPage.css"
import CartCount from '../../components/CartCount/CartCount';


const ItemIdPage = () => {



    let {id} = useParams();
    const [paquete, setPaquete] = useState([]);
    
    useEffect ( () => {
      const mostrarDetalle = async () => {
      const q= query(collection(db, "items"), where(documentId(), "==" , id ));
      const querySnapshot = await getDocs(q)
      const item = []
      querySnapshot.forEach((doc) => {
        item.push({...doc.data(), id: doc.id});
      });
      setPaquete(item) 
    }
    mostrarDetalle();
    },[id]);
    


   return (

    <div className='Detalle'>
   <div>
    <h2 className='detail-title'>
    Detalle de tu producto:
    </h2>
    </div>
    
    { paquete.length > 0 ?  paquete.map((data) => {
      return (
        <div key={data.id} className='card-container-2'> 
       
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            sx={{ height: 600, width: 700}}
            image={data.imageLink}
            title={data.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize : 20}}>
             Precio: <strong> {data.price} USD por persona </strong>     
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize : 20}} className='item-description'>
              {data.description}
            </Typography>
          </CardContent>
          
          <CardActions>
           <CartCount
           stock ={data.stock}
           id = {data.id}
           price = {data.price}
           name = {data.name}
           />
          </CardActions>
        </Card>
        
        </div>
      )
    }) : <Spinner />   }  
    </div>
  )
  }

export default ItemIdPage