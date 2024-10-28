import Slider from "react-slick";
import "../styles/gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PhotoGallery = () => {
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
    { title: "2", URL: "Chinauta2.jpg" },
    { title: "3", URL: "Chinauta3.jpg" },
    { title: "4", URL: "Chinauta4.jpg" },
    { title: "5", URL: "Chinauta5.jpg" },
    { title: "6", URL: "Chinauta6.jpg" },
    { title: "7", URL: "Chinauta7.jpg" },
    { title: "8", URL: "Chinauta8.jpg" },
    { title: "9", URL: "Chinauta9.jpg" },
    { title: "10", URL: "Chinauta10.jpg" },
    { title: "11", URL: "Chinauta11.jpg" },
    { title: "12", URL: "Chinauta12.jpg" },
    { title: "13", URL: "Chinauta13.jpg" },
    { title: "14", URL: "Chinauta14.jpg" },
    { title: "17", URL: "Chinauta17.jpg" },
    { title: "18", URL: "Chinauta18.jpg" },
    { title: "19", URL: "Chinauta19.jpg" },
    { title: "20", URL: "Chinauta20.jpg" },
    { title: "21", URL: "Chinauta21.jpg" },
  ];
  const PhotosSilvania = [
    { title: "1", URL: "Silvania1.jpg" },
    { title: "2", URL: "Silvania2.jpg" },
    { title: "3", URL: "Silvania3.jpg" },
    { title: "4", URL: "Silvania4.jpg" },
    { title: "5", URL: "Silvania5.jpg" },
    { title: "6", URL: "Silvania6.jpg" },
    { title: "7", URL: "Silvania7.jpg" },
    { title: "8", URL: "Silvania8.jpg" },
    { title: "9", URL: "Silvania9.jpg" },
    { title: "10", URL: "Silvania10.jpg" },
    { title: "11", URL: "Silvania11.jpg" },
    { title: "12", URL: "Silvania12.jpg" },
  ];
  const PhotosBogota = [
    { title: "1", URL: "Bogota1.jpg" },
    { title: "7", URL: "Bogota7.jpg" },
    { title: "3", URL: "Bogota3.jpg" },
    { title: "8", URL: "Bogota8.jpg" },
    { title: "9", URL: "Bogota9.jpg" },
    { title: "10", URL: "Bogota10.jpg" },
    { title: "11", URL: "Bogota11.jpg" },
    { title: "12", URL: "Bogota12.jpg" },
    { title: "13", URL: "Bogota13.jpg" },
    { title: "14", URL: "Bogota14.jpg" },
  ];
  const PhotosGirs = [
    { title: "1", URL: "Chinauta1.jpg" },
    { title: "2", URL: "Chinauta15.jpg" },
    { title: "3", URL: "Chinauta16.jpg" },
    { title: "4", URL: "Bogota2.jpg" },
    { title: "5", URL: "Bogota4.jpg" },
    { title: "6", URL: "Bogota5.jpg" },
    { title: "7", URL: "Bogota6.jpg" },
    { title: "8", URL: "Bogota15.jpg" },
  ];

  return (
    <>
      <div className="photo-gallery-container">
        <h2 className="photo-gallery-title">Sede Chinauta</h2>
        <p style={{ textAlign: "center" }}>📌 Km 65 Santropel Acropolis </p>
        <Slider {...settings}>
          {PhotosChinauta.map((photochinauta, index) => (
            <div className="photo-gallery-slide" key={index}>
              <img
                src={`/${photochinauta.URL}`}
                loading="lazy"
                alt={photochinauta.title}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="photo-gallery-container">
        <h2 className="photo-gallery-title">Sede Silvania</h2>
        <p style={{ textAlign: "center" }}>
          📌 Entrada vereda Tibacuy-finca la muralla{" "}
        </p>
        <Slider {...settings}>
          {PhotosSilvania.map((photochinauta, index) => (
            <div className="photo-gallery-slide" key={index}>
              <img
                src={`/${photochinauta.URL}`}
                loading="lazy"
                alt={photochinauta.title}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="photo-gallery-container">
        <h2 className="photo-gallery-title">Sede Bogota</h2>
        <p style={{ textAlign: "center" }}>
          📌 Avda, cra 50 sur #37-27, Barrio Santa Rita{" "}
        </p>
        <Slider {...settings}>
          {PhotosBogota.map((photochinauta, index) => (
            <div className="photo-gallery-slide" key={index}>
              <img
                src={`/${photochinauta.URL}`}
                loading="lazy"
                alt={photochinauta.title}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="photo-gallery-container">
        <h2 className="photo-gallery-title">
          Programas especiales para mujeres
        </h2>
        <p style={{ textAlign: "center" }}>
          {/* 📌 Avda, cra 50 sur #37-27, Barrio Santa Rita{" "} */}
        </p>
        <Slider {...settings}>
          {PhotosGirs.map((photochinauta, index) => (
            <div className="photo-gallery-slide" key={index}>
              <img
                src={`/${photochinauta.URL}`}
                loading="lazy"
                alt={photochinauta.title}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default PhotoGallery;
