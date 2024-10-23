import React from "react";
import "../styles/partners.css";

const Partners = () => {
  const associations = [
    {
      name: "SENA",
      description: "Servicio Nacional de Aprendizaje (SENA).",
      logo: "/logo-sena-negro.svg", // Sustituir con la ruta correcta del logo
      link: "https://www.sena.edu.co/",
    },
    {
      name: "ENEBRAA",
      description: "Federación Nacional Brazos Abiertos.",
      logo: "ruta/logo_enebraa.png", // Sustituir con la ruta correcta del logo
      link: "#",
    },
    {
      name: "Iglesia Cristiana Lazos de Amor",
      description: "Nuestra comunidad cristiana aliada.",
      logo: "/logo iglesia.svg", // Sustituir con la ruta correcta del logo
      link: "#",
    },
  ];

  return (
    <section className="associations-alt-section">
      <div className="container">
        <h2 className="section-title">Asociaciones y Aliados</h2>
        <div className="associations-alt-grid">
          {associations.map((assoc, index) => (
            <div key={index} className="association-alt-card">
              <a href={assoc.link} target="_blank" rel="noopener noreferrer">
                <div className="logo-container">
                  <img
                    src={assoc.logo}
                    alt={`${assoc.name} logo`}
                    className="association-alt-logo"
                  />
                </div>
              </a>
              <div className="text-container">
                <h3 className="association-alt-name">{assoc.name}</h3>
                <p className="association-alt-description">
                  {assoc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
