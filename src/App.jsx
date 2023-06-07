import React from "react";
import "./App.css"
import {BrowserRouter,Route,Routes} from "react-router-dom"

// Importación de componentes.
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
//Importación pages
import InicioPage from "./pages/InicioPage/InicioPage";
import ProductosPage from "./pages/ProductosPage/ProductosPage"; 
import ContactanosPage from "./pages/ContactanosPage/ContactanosPage";
import DetailPage from "./pages/ItemIdPage/ItemIdPage";

class App extends React.Component{
  render() {
    return(
      <BrowserRouter>
      <div className="App">
        <NavBar nombre="Max-Baires"/>
        <Routes>
        <Route path="/" element={<InicioPage />}> </Route>
        <Route path="/productos" element={<ProductosPage />}> </Route>
        <Route path="/contactanos" element={<ContactanosPage />}> </Route>
        <Route path="/item/:id" element={<DetailPage />}> </Route>

        </Routes>
        <Footer></Footer>
      </div>
      </BrowserRouter>
    )
  }

}
export default App
