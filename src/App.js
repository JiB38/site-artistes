import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
import "./App.css";

/* Pour les toasts (messages panier) */
import { ToastContainer } from "react-toastify";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="App">
        {/* --- Barre de navigation --- */}
        <nav className="navbar">
  <div className="navbar-left">
    <img src="/img/logo.jpg" alt="Logo H-ART 38" className="logo" />
    <h1 className="site-title">H-ART 38</h1>
  </div>

  <div className="nav-links">
    <Link to="/">Accueil</Link>
    <Link to="/gallery">Galerie</Link>
    <Link to="/cart">Panier</Link>
    <Link to="/contact">Contact</Link>
  </div>
</nav>


        {/* --- Routes --- */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery cart={cart} setCart={setCart} />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/payment" element={<Payment cart={cart} />} />
        </Routes>

        {/* --- Conteneur pour les toasts --- */}
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
