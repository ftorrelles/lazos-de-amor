import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import "../styles/businessCard.css";

const BusinessCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-logo">
          <img src="/logoNav.svg" alt="Logo" className="logo" />
        </div>
        <h4 className="card-title">Fundación Lazos de amor</h4>
        <p className="card-subtitle">
          Síguenos en nuestras redes sociales y visita nuestro sitio web
        </p>
        <div className="card-buttons card-icons">
          <a
            href="https://www.facebook.com/profile.php?id=61559318943462"
            target="_blank"
            className="card-button"
          >
            <FaFacebook className="icon" /> Síguenos en Facebook
          </a>
          <a
            href="https://www.instagram.com/adicciones_lazosdeamor/"
            target="_blank"
            className="card-button"
          >
            <FaInstagram className="icon" />
            Síguenos en Instagram
          </a>
          <Link to="/" className="card-button">
            <CgWebsite className="icon" />
            Visita nuestro sitio web
          </Link>
          <a
            href="https://wa.me/573106942538"
            target="_blank"
            className="card-button"
          >
            <FaWhatsapp className="icon" />
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
