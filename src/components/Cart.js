import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {
  // Supprimer un article du panier
  const removeFromCart = (id) => {
    setCart(cart.filter((art) => art.id !== id));
  };

  // Calcul du total
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Votre Panier</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Votre panier est vide.</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.title} />
              <div className="cart-details">
                <h3>{item.title}</h3>
                <p>{item.price} €</p>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                ✖
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total : {total} €</h3>
            {/* Bouton paiement vers la page Payment */}
          <Link to="/payment">
            <button className="checkout-btn">Procéder au paiement</button>
          </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
