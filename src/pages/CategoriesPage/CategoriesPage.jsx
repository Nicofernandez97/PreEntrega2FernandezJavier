import ProductosHombrePage from './ProductosHombrePage'
import ProductosMujerPage from './ProductosMujerPage'
import TecnologiaPage from './TecnologiaPage'
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import   "./CategoriesPage.css"
const CategoriesPage = () => {
        return (
          <div>  <h1 className='encabezado-categorias'>Categorías:</h1>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              m: 1,
            },
          }}
        >
          <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Link to={`/categorias/productoshombre`}><Button>Productos Hombre</Button></Link>
          <Link to={`/categorias/productosmujer`}><Button> Productos Mujer</Button></Link>
          <Link to={`/categorias/productostecnologia`}><Button> Tecnología</Button></Link>
          </ButtonGroup>
        </Box>
        </div>
      );
    }
    

export default CategoriesPage