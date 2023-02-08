import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Pages/Home/Home";
import Products from "./components/Pages/Products/Products";
import Product from "./components/Pages/singleproduct/Product";
import About from "./components/Pages/About/About";
import CartPage from "./components/Pages/CartPage/CartPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./components/Pages/checkout/Checkout";
import PrivateRoute from "./components/special-components/PrivateRoute";
import Error from "./components/special-components/Error";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/CartPage" element={<CartPage />} />
            <Route path="/Products/:id" element={<Product />} />
            <Route path="/About" element={<About />} />

            <Route
              path="/Checkout"
              element={
                <PrivateRoute>
                  <Checkout />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
