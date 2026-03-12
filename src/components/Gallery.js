import React, { useState } from "react";
import "./Gallery.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Gallery({ cart, setCart }) {
  // --- Données artistes ---
  const artistsData = {
    Julien: {
      name: "Julien FAURE",
      img: "/img/julien.jpg",
      bio: "Julien dessine depuis son enfance. C'est sa première passion. Il est autodidacte et manie les différentes techniques du dessin.",
    },
    Bob: {
      name: "Bob",
      img: "/img/bob.jpg",
      bio: "Bob réalise des sculptures modernes, jouant avec la matière et les contrastes.",
    },
    Claire: {
      name: "Claire",
      img: "/img/claire.jpg",
      bio: "Claire aime le dessin minimaliste et explore les émotions par la simplicité des traits.",
    },
  };

  // --- Œuvres ---
  const artworks = [
    { id: 1, title: "Einstein tirant la langue", artist: "Julien", size: "format A4", price: 75, img: "/img/art1.jpeg" },
    { id: 2, title: "Grenoble vu de la Bastille en couleurs", artist: "Julien", size: "format A4", price: 75, img: "/img/art2.jpeg" },
    { id: 3, title: "Dessin de la tour Perret", artist: "Julien", size: "format A4", price: 75, img: "/img/art3.jpeg" },
    { id: 4, title: "Nature morte", artist: "Julien", size: "format A4", price: 75, img: "/img/art4.jpeg" },
    { id: 5, title: "Vue de Belledonne à Grenoble", artist: "Julien", size: "format A4", price: 75, img: "/img/art5.jpeg" },
    { id: 6, title: "Grenoble à l'aquarelle", artist: "Julien", size: "format A4", price: 75, img: "/img/art6.jpeg" },
    { id: 7, title: "Dessin noir et blanc", artist: "Julien", size: "format A4", price: 75, img: "/img/art7.jpeg" },
    { id: 8, title: "Portrait au crayon noir", artist: "Julien", size: "format A4", price: 75, img: "/img/art8.jpeg" },
    { id: 9, title: "Clint Eastwood en train de tirer", artist: "Julien", size: "format A4", price: 75, img: "/img/art9.jpeg" },
  ];

  const [selectedArtist, setSelectedArtist] = useState("");
  const [zoomArt, setZoomArt] = useState(null); 
  const [isClosing, setIsClosing] = useState(false); // <-- pour l’animation fermeture

  // Filtrage des œuvres
  const filteredArtworks = artworks.filter((art) => art.artist === selectedArtist);

  // Ajouter au panier
  const addToCart = (art) => {
    setCart([...cart, art]);
    toast.success(`${art.title} ajouté au panier !`, {
      position: "bottom-right",
      autoClose: 2000,
      style: {
        background: "#000",
        color: "#FFD700",
        border: "2px solid #FFD700",
        borderRadius: "8px",
        fontWeight: "bold",
      },
      progressStyle: { background: "#FFD700" },
      icon: false,
    });
  };

  const openModal = (art) => {
  setZoomArt(art);
};

  // Fermer la modale avec animation
  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setZoomArt(null);
      setIsClosing(false);
    }, 400); // durée animation = 400ms
  };

  return (
    <div className="gallery-container">
      <h2>Galerie d'art</h2>

      {/* --- Menu déroulant --- */}
      <div className="filter-bar">
        <select
          value={selectedArtist}
          onChange={(e) => setSelectedArtist(e.target.value)}
        >
          <option value="">Choisissez un artiste</option>
          {Object.keys(artistsData).map((artist) => (
            <option key={artist} value={artist}>
              {artist}
            </option>
          ))}
        </select>
      </div>

      {/* --- Infos artiste --- */}
      {selectedArtist && (
        <div key={selectedArtist} className="artist-info">
          <img
            src={artistsData[selectedArtist].img}
            alt={artistsData[selectedArtist].name}
          />
          <p>{artistsData[selectedArtist].bio}</p>
        </div>
      )}

      {/* --- Œuvres --- */}
      {selectedArtist && (
        <div className="gallery-grid">
          {filteredArtworks.map((art) => (
            <div
              key={art.id}
              className="art-card"
              onDoubleClick={() => setZoomArt(art)} // double-clic ouvre la modale
            >
              <img src={art.img} alt={art.title} />
              <h3>{art.title}</h3>
              <p className="size">{art.size}</p>
              <p className="price">{art.price} €</p>
              <button onClick={() => addToCart(art)}>Ajouter au panier</button>
            </div>
          ))}
        </div>
      )}

      {/* --- MODAL ZOOM SIMPLIFIÉ --- */}
{zoomArt && (
  <div className="zoom-modal" onClick={closeModal}>
    <img
      src={zoomArt.img}
      alt={zoomArt.title}
      className="zoomed-image"
      onClick={(e) => e.stopPropagation()} // évite de fermer si on clique sur l’image
    />
  </div>
)}

    </div>
  );
}

export default Gallery;
