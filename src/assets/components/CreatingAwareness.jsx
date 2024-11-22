import React from "react";
import Slider from "react-slick";
import "../styles/creatingAwareness.css";

// Creamos componentes de flechas personalizados
const CustomArrow = ({
  currentSlide,
  slideCount,
  className,
  style,
  onClick,
  direction,
}) => (
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
    titulo: "1ra entrega, Mitos y realidades adicciones",
    videoUrl:
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61559318943462%2Fvideos%2F1105138483850665%2F&show_text=false&width=560&t=0",
  },
  // {
  //   titulo: "2da entrega, Comportamiento en adicciones",
  //   videoUrl:
  //     "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61559318943462%2Fvideos%2F1242010370437639%2F&show_text=false&width=560&t=0",
  // },
  {
    titulo: "3ra entrega, Síndrome de abstinencia",
    videoUrl:
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61559318943462%2Fvideos%2F3896610743956815%2F&show_text=false&width=560&t=0",
  },
  {
    titulo: "4ta entrega, Señales de riesgo",
    videoUrl:
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61559318943462%2Fvideos%2F445283331628639%2F&show_text=false&width=560&t=0",
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
  };

  return (
    <section className="consciencia-section">
      <h2 className="consciencia-title">Creando Conciencia</h2>
      <div className="breaking-news-frame">
        <Slider {...settings} className="video-carousel">
          {videosConsciencia.map((video, index) => (
            <div key={index} className="video-container">
              <h3 className="video-title">{video.titulo}</h3>
              {video.videoUrl.includes("facebook.com") ? (
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
                ></iframe>
              ) : (
                <video controls className="testimonio-video">
                  <source src={video.videoUrl} type="video/mp4" />
                  Tu navegador no soporta la etiqueta de video.
                </video>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CreatingAwareness;
