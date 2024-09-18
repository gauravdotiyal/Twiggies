import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopUp/LoginPopup";
import Verify from "./pages/Verify/Verify";

const App = () => {

   const [showLogin,setShowLogin]=useState(false)


  return (
    <> 
        {showLogin && <LoginPopup setShowLogin={setShowLogin}/>}
        <div className="app">
          <Navbar setShowLogin={setShowLogin}/> 
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/PlaceOrder" element={<PlaceOrder />} />
              <Route path="/verify" element={<Verify/>} />
            </Routes>
        </div>
        <Footer />
    </>
  );
};

export default App;
