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
import DetailPage from "./pages/ItemIdPage/ItemIdPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import ProductosHombrePage from "./pages/CategoriesPage/ProductosHombrePage";
import ProductosMujerPage from "./pages/CategoriesPage/ProductosMujerPage";
import TecnologiaPage from "./pages/CategoriesPage/TecnologiaPage";
import CartWidgetPage from "./pages/CartWidgetPage/CartWidgetPage";

class App extends React.Component{
  render() {
    return(
      <BrowserRouter>
      <div className="App">
        <NavBar nombre="Max-Baires"/>
        <Routes>
        <Route path="/" element={<InicioPage />}> </Route>
        <Route path="/productos" element={<ProductosPage/>}> </Route>
        <Route path="/categorias" element={<CategoriesPage/>}> </Route>
        <Route path="/categorias/productoshombre" element={<ProductosHombrePage/>}> </Route>
        <Route path="/categorias/productosmujer" element={<ProductosMujerPage/>}> </Route>
        <Route path="/categorias/productostecnologia" element={<TecnologiaPage/>}> </Route>
        <Route path="/item/:id" element={<DetailPage />}> </Route>
        <Route path="/cart" element={<CartWidgetPage />}> </Route>
        </Routes>
        <Footer></Footer>
      </div>
      </BrowserRouter>
    )
  }

}
export default App
