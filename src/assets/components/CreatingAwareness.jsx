import "../styles/creatingAwareness.css";
import React from "react";
import Slider from "react-slick";

const videosConsciencia = [
  {
    titulo: "Mitos y Realidades de la Adicción",
    videoUrl:
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61559318943462%2Fvideos%2F1105138483850665%2F&show_text=false&width=560&t=0",
  },
  {
    titulo: "Cruda realidad del consumo de Drogas",
    videoUrl:
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61559318943462%2Fvideos%2F2255037708203769%2F&show_text=false&width=560&t=0",
  },
  // {
  //   titulo: "Estrategias de Superación",
  //   videoUrl: "https://www.youtube.com/watch?v=opUySGrwwj8&t=143s",
  // },
];

const CreatingAwareness = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,

    nextArrow: <button className="carousel-control next">⏩</button>,
    prevArrow: <button className="carousel-control prev">⏪</button>,
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
