import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import "./CardItem.css"
import Box from '@mui/material/Box';





const CardItem = ({paquete}) => {

  return (
    
    <Link to={`/item/${paquete.id}`}>
    <Card sx={{ maxWidth: 430 }}>
      <CardMedia
        sx={{ height: 300}}
        image={paquete.imageLink}
        title={paquete.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {paquete.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize : 20}}>
       Precio: <strong> {paquete.price} USD por persona </strong>     
        </Typography>
        
      </CardContent>
      <CardActions>
      <Box component="span" className='buttonSiteCard' sx={{ }}>
      <Button size="small"><span>Mas Información</span></Button>  
      </Box>
      </CardActions>
    </Card>
    </Link>
  );
}
export default CardItem 