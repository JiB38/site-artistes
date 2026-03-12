import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_bihiz7j",   // ✅ Ton Service ID
        "template_n5q9o7k",  // ✅ Ton Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "tETvFYxK7C-8fcpcs"   // ✅ Ta Public Key
      )
      .then(
        (response) => {
          alert("✅ Merci ! Votre message a bien été envoyé.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("❌ Une erreur est survenue, merci de réessayer.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>📩 Contactez-nous</h2>
      <p>N’hésitez pas à nous écrire pour toute question ou collaboration.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
