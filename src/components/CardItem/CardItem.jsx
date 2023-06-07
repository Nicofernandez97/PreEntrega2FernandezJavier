import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardItem = ({data}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={data.image}
        title={data.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.description}
       <br />
       Precio: <strong> {data.price} USD </strong>     
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Mas Información</Button>
      </CardActions>
    </Card>
  );
}
export default CardItem 