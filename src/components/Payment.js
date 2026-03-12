import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./Payment.css"; // tu pourras ajouter du style

function Payment({ cart }) {
  // Calcul du total du panier
  
  const total = cart ? cart.reduce((sum, item) => sum + item.price, 0) : 0;


  return (
    <div className="payment-container">
      <h2>Procéder au paiement</h2>
      <p>Total à payer : {total} €</p>

      {/* Ici on initialise le SDK PayPal avec ton client-id sandbox */}
      <PayPalScriptProvider options={{ "client-id": "AaVf_NlkRWesKU_GdF9gTci9g9Y71wlZck59nUm5Ud82rRosUrQM_iVwjDmR9n-ogZDUPV-sMTOe5___", currency: "EUR" }}>
        <PayPalButtons
          style={{ layout: "vertical", color: "gold", shape: "rect", label: "paypal" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: total.toString(),
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert(`Merci ${details.payer.name.given_name}, paiement réussi !`);
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default Payment;
