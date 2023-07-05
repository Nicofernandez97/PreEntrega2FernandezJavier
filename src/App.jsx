import React from "react";
import "./App.css"
import {BrowserRouter,Route,Routes} from "react-router-dom"

// Importación de componentes.
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
//Importación pages
import InicioPage from "./pages/InicioPage/InicioPage";
import ProductosPage from "./pages/ProductosPage/ProductosPage"; 
import DetailPage from "./pages/ItemIdPage/ItemIdPage";
import CartPage from "./pages/CartPage/CartPage";
import PaquetesNortePage from "./pages/CategoriesPage/PaquetesNortePage";
import PaquetesSurPage from "./pages/CategoriesPage/PaquetesSurPage";
import SuperofertasPage from "./pages/CategoriesPage/SuperofertasPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ProviderCartContext from "./context/ProviderCartContext";
class App extends React.Component{
  render() {
    return(
      <ProviderCartContext>
      <BrowserRouter>
    
      <div className="App">
        <NavBar nombre="Max-Baires"/>
        <Routes>
        <Route path="/" element={<InicioPage />}> </Route>
        <Route path="/productos" element={<ProductosPage/>}> </Route>
        <Route path="/categories/ofertas" element={<SuperofertasPage/>}> </Route>
        <Route path="/categories/sur" element={<PaquetesSurPage/>}> </Route>
        <Route path="/categories/norte" element={<PaquetesNortePage/>}> </Route>
        <Route path="/item/:id" element={<DetailPage />}> </Route>
        <Route path="/cart" element={<CartPage />}> </Route>
        <Route path="*" element = {<ErrorPage />} > </Route> 
        </Routes>
        <Footer></Footer>
      </div>    
      </BrowserRouter>
      </ProviderCartContext>
    )
  }

}
export default App
