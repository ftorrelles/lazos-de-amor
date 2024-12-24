import React from "react";
import Slider from "react-slick";
import "../styles/creatingAwareness.css";

// Creamos componentes de flechas personalizados
const CustomArrow = ({ className, style, onClick, direction }) => (
  <button
    className={className}
    style={{ ...style, display: "block", background: "transparent" }}
    onClick={onClick}
  >
    {direction === "next" ? ">" : "<"}
  </button>
);

const videosConsciencia = [
  {
    titulo: "10ma entrega, Éxtasis (MDMA)",
    videoUrl: "https://www.youtube.com/embed/pKAAdf-03QM?si=goenaZRm2YdptgTI",
  },
  {
    titulo: "9na entrega, Pegante",
    videoUrl: "https://www.youtube.com/embed/5-NJohCASaw?si=hAIe6cky7sdNk4Et",
  },
  {
    titulo: "8va entrega, Cocaína",
    videoUrl: "https://www.youtube.com/embed/Z8knbcpagH8?si=cDFGTaaSi244a0GS",
  },
];

const CreatingAwareness = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    lazyLoad: "ondemand",
  };

  return (
    <section className="consciencia-section">
      <h2 className="consciencia-title">Creando Conciencia</h2>
      <div className="breaking-news-frame">
        <Slider {...settings} className="video-carousel">
          {videosConsciencia.map((video, index) => (
            <div key={index} className="video-container">
              <h3 className="video-title">{video.titulo}</h3>
              <iframe
                src={video.videoUrl}
                width="100%"
                height="100%"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                className="testimonio-video"
                loading="lazy" // Este atributo mejora el rendimiento
              ></iframe>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CreatingAwareness;
