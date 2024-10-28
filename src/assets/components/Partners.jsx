import React from "react";
import "../styles/partners.css";
import { Container } from "react-bootstrap";
//libreria de animaciones
import "animate.css";
//libreria para detectar cuando la seccion este en el vh
import { useInView } from "react-intersection-observer";

const partners = [
  {
    options: [
      {
        titleOption: "SENA",
        descritionOption:
          "Institución educativa y técnica que colabora ofreciendo cursos y programas de capacitación para los participantes.",
        url: "/sena.svg",
      },
      {
        titleOption: "FENEBRAA",
        descritionOption:
          "Federación Nacional Brazos Abiertos, con quienes colaboramos en proyectos de apoyo a las personas en rehabilitación.",
        url: "/logoFenabraa.jpg",
      },
      {
        titleOption: "Iglesia Cristiana Lazos de Amor",
        descritionOption:
          "Aliado espiritual que brinda apoyo emocional y acompañamiento a los internos y sus familias.",
        url: "/logoIglesia.jpg",
      },
    ],
  },
];

const Partners = () => {
  //logica libreria react-intersection-observer
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <Container style={{ maxWidth: "1300px" }} fluid>
      <div>
        <div
          className={`title_section animate__animated ${
            inView ? "animate__zoomIn" : ""
          }`}
          ref={ref}
        >
          <h2>Nuestros aliados</h2>
          <p>Nuestros aliados nos respaldan y apoyan en esta mision.</p>
        </div>

        {partners.map((section, index) => (
          <div key={index} className="services-section ">
            <div className="options-container curved">
              {section.options.map((option, index) => (
                <div
                  key={index}
                  className={`option animate__animated animate__delay-1s ${
                    inView ? "animate__zoomIn" : ""
                  }`}
                >
                  <div className="option-content">
                    <h3>{option.titleOption}</h3>
                    <p>{option.descritionOption}</p>
                  </div>
                  <div className="option-img">
                    <img
                      src={option.url}
                      loading="lazy"
                      alt={option.titleOption}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Partners;
