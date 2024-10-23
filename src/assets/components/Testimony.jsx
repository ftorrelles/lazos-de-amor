import React from "react";
import "../styles/testimony.css";

const testimonios = [
  {
    nombre: "Juan Pérez",
    cita: "Gracias a la Fundación Lazos de Amor, logré superar mi adicción y ahora puedo disfrutar de una vida plena y saludable.",
    videoUrl: "https://www.example.com/video1.mp4",
  },
  {
    nombre: "María Rodríguez",
    cita: "La fundación me dio las herramientas que necesitaba para reintegrarme a la sociedad y recuperar la confianza en mí misma.",
    videoUrl: "https://www.example.com/video2.mp4",
  },
  {
    nombre: "Carlos Ramírez",
    cita: "Nunca pensé que podría vencer mi adicción, pero el apoyo que recibí aquí me cambió la vida.",
    videoUrl: "https://www.example.com/video3.mp4",
  },
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
                <video controls className="testimonio-video">
                  <source src={testimonio.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimony;
