import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Confirmation.css";

function Confirmation() {
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    // Génère un numéro de commande aléatoire
    const num = "CMD-" + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(num);
  }, []);

  return (
    <div className="confirmation-container">
      <h2>✅ Merci pour votre achat !</h2>
      <p>Votre commande a bien été enregistrée.</p>
      <p className="order-number">Numéro de commande : <strong>{orderNumber}</strong></p>
      
      <Link to="/gallery">
        <button className="back-btn">Retour à la galerie</button>
      </Link>
    </div>
  );
}

export default Confirmation;
