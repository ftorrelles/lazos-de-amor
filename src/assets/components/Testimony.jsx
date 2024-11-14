import React from "react";
import "../styles/testimony.css";

const testimonios = [
  {
    nombre: "Juan Villarreal",
    cita: "Mi vida era una vida de caos y consumo... con la ayuda de Dios y de la fundación he logrado mi recuperación",
    videoUrl:
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61559318943462%2Fvideos%2F882373660310473%2F&show_text=false&width=560&t=0",
  },
  {
    nombre: "Arberol Carbonel",
    cita: "La fundación me dio las herramientas que necesitaba para reintegrarme a la sociedad y recuperar la confianza en mí mismo.",
    videoUrl:
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61559318943462%2Fvideos%2F1150134689963587%2F&show_text=false&width=560&t=0",
  },
  // {
  //   nombre: "Carlos Ramírez",
  //   cita: "Nunca pensé que podría vencer mi adicción, pero el apoyo que recibí aquí me cambió la vida.",
  //   videoUrl: "https://www.example.com/video3.mp4",
  // },
];

const Testimony = () => {
  return (
    <section className="testimonios-section">
      <div className="container">
        <h2 className="section-title">Testimonios de Éxito</h2>
        <div className="testimonios-grid">
          {testimonios.map((testimonio, index) => (
            <div key={index} className="testimonio-card">
              <div className="testimonio-content">
                <blockquote className="testimonio-cita">
                  “{testimonio.cita}”
                </blockquote>
                <p className="testimonio-nombre">- {testimonio.nombre}</p>
                {testimonio.videoUrl.includes("facebook.com") ? (
                  <iframe
                    src={testimonio.videoUrl}
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
                    <source src={testimonio.videoUrl} type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                  </video>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimony;
