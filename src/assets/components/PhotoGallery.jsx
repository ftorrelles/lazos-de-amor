import Slider from "react-slick";
import "../styles/gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "animate.css/animate.min.css";
//libreria para detectar cuando la seccion este en el vh
import { useInView } from "react-intersection-observer";

const PhotoGallery = () => {
  //logica libreria react-intersection-observer
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const PhotosChinauta = [
    { title: "1", URL: "chinauta1.svg" },
    { title: "2", URL: "chinauta2.svg" },
    { title: "3", URL: "chinauta3.svg" },
    { title: "4", URL: "chinauta4.svg" },
    { title: "5", URL: "chinauta5.svg" },
    { title: "6", URL: "chinauta6.svg" },
    { title: "7", URL: "chinauta7.svg" },
    { title: "8", URL: "chinauta8.svg" },
    { title: "9", URL: "chinauta9.svg" },
    { title: "10", URL: "chinauta10.svg" },
    { title: "11", URL: "chinauta11.svg" },
    { title: "12", URL: "chinauta12.svg" },
    { title: "13", URL: "chinauta13.svg" },
    { title: "14", URL: "chinauta14.svg" },
    { title: "15", URL: "chinauta15.svg" },
    { title: "16", URL: "chinauta16.svg" },
    { title: "17", URL: "chinauta17.svg" },
    { title: "18", URL: "chinauta18.svg" },
    { title: "19", URL: "chinauta19.svg" },
    { title: "20", URL: "chinauta20.svg" },
    { title: "21", URL: "chinauta21.svg" },
  ];
  const PhotosSilvania = [
    { title: "1", URL: "silvania1.svg" },
    { title: "2", URL: "silvania2.svg" },
    { title: "3", URL: "silvania3.svg" },
    { title: "4", URL: "silvania4.svg" },
    { title: "5", URL: "silvania5.svg" },
    { title: "6", URL: "silvania6.svg" },
    { title: "7", URL: "silvania7.svg" },
    { title: "8", URL: "silvania8.svg" },
    { title: "9", URL: "silvania9.svg" },
    { title: "10", URL: "silvania10.svg" },
    { title: "11", URL: "silvania11.svg" },
    { title: "12", URL: "silvania12.svg" },
  ];
  const PhotosBogota = [
    { title: "1", URL: "bogota1.svg" },
    { title: "2", URL: "bogota2.svg" },
    { title: "3", URL: "bogota3.svg" },
    { title: "4", URL: "bogota4.svg" },
    { title: "5", URL: "bogota5.svg" },
    { title: "6", URL: "bogota6.svg" },
    { title: "7", URL: "bogota7.svg" },
    { title: "8", URL: "bogota8.svg" },
    { title: "9", URL: "bogota9.svg" },
    { title: "10", URL: "bogota10.svg" },
    { title: "11", URL: "bogota11.svg" },
    { title: "12", URL: "bogota12.svg" },
    { title: "13", URL: "bogota13.svg" },
    { title: "14", URL: "bogota14.svg" },
  ];

  return (
    <>
      <div className="photo-gallery-container">
        <h2
          className={`photo-gallery-title animate__animated ${
            inView ? "animate__fadeInDown" : ""
          }`}
          ref={ref}
        >
          Sede Chinauta
        </h2>
        <p style={{ textAlign: "center" }}>📌 Km 65 Santropel Acropolis </p>
        <Slider {...settings}>
          {PhotosChinauta.map((photochinauta, index) => (
            <div className="photo-gallery-slide" key={index}>
              <img src={`/${photochinauta.URL}`} alt={photochinauta.title} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="photo-gallery-container">
        <h2
          className={`photo-gallery-title animate__animated ${
            inView ? "animate__fadeInDown" : ""
          }`}
          ref={ref}
        >
          Sede Silvania
        </h2>
        <p style={{ textAlign: "center" }}>
          📌 Entrada vereda Tibacuy-finca la muralla{" "}
        </p>
        <Slider {...settings}>
          {PhotosSilvania.map((photochinauta, index) => (
            <div className="photo-gallery-slide" key={index}>
              <img src={`/${photochinauta.URL}`} alt={photochinauta.title} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="photo-gallery-container">
        <h2
          className={`photo-gallery-title animate__animated ${
            inView ? "animate__fadeInDown" : ""
          }`}
          ref={ref}
        >
          Sede Bogota
        </h2>
        <p style={{ textAlign: "center" }}>
          📌 Avda, cra 50 sur #37-27, Barrio Santa Rita{" "}
        </p>
        <Slider {...settings}>
          {PhotosBogota.map((photochinauta, index) => (
            <div className="photo-gallery-slide" key={index}>
              <img src={`/${photochinauta.URL}`} alt={photochinauta.title} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default PhotoGallery;
