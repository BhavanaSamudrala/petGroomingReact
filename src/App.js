// import Product from "./pages/Product";
import React from "react";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Products from "./components/Products";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Cart from "./pages/Cart";

const App = () => {
    return (<div>
        <Navbar/>
        <Categories/>
        <Products/>
        <Footer/>
        <Product/>
        <Login/>
        <Register/>
        <Cart/>

    </div>
    )
  };
  
  export default App;