import React from "react";
import "./App.css"

// Importación de componente.
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

class App extends React.Component{
  render() {
    return(
      <div>
        <NavBar nombre="Max-Baires" sector1="Inicio" sector2="Paquetes Internacionales" sector3="Paquetes Nacionales" sector4="Traslados" sector5="Alojamiento" sector6="Contactanos" sector7="Sector Compras" />
        <ItemListContainer greeting={"Bienvenido a Max-Baires!"} /> 
      </div>
    )
  }

}
export default App
