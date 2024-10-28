import React from "react";
import "../styles/comicsection.css";

const ComicSection = () => {
  return (
    <section className="comic-section">
      <h2 className="comic-title">
        Misión y Visión de la Fundación Lazos de Amor
      </h2>
      <div className="comic-container">
        <div className="comic-image-wrapper">
          <img
            src="comics1.jpg"
            loading="lazy"
            alt="Cómic 1"
            className="comic-image"
          />
          <p className="comic-caption">Primera parte</p>
        </div>
        <div className="comic-image-wrapper">
          <img
            src="comics2.jpg"
            loading="lazy"
            alt="Cómic 2"
            className="comic-image"
          />
          <p className="comic-caption">Segunda parte</p>
        </div>
      </div>
    </section>
  );
};

export default ComicSection;
