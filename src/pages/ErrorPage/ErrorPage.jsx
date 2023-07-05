import React from 'react'
import { Alert } from '@mui/material'
import { Link } from 'react-router-dom';
import "./ErrorPage.css"

const ErrorPage = () => {
  return (
    <Alert variant="filled" severity="error" className='error-link'>
    Este paquete no fue encontrado, si quieres volver al inicio puedes hacer click <Link to={"/"} > Aquí </Link>
  </Alert>
  )
}

export default ErrorPage