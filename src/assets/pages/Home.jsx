import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/home.css";
import Differential from "../components/Differential";
import NumbersSection from "../components/NumbersSection";
import PhotoGallery from "../components/PhotoGallery";
import Partners from "../components/Partners";
import Programs from "../components/Programs";
import Testimony from "../components/Testimony";
import ContentInfo from "../components/ContentInfo";
import ComicSection from "../components/ComicSection";
import CreatingAwareness from "../components/CreatingAwareness";

const Home = () => {
  return (
    <>
      <div className="home-section">
        <Container fluid>
          <Row className="align-items-center home-content">
            {/* Texto principal */}
            <Col lg={6} md={12} className="text-content">
              <h3 className="title">Un Nuevo Comienzo</h3>
              <p className="subtitle">
                Brindamos apoyo integral para superar las adicciones y promover
                la reintegración social. Un futuro libre de adicciones es
                posible.
              </p>
              <div className="Button">
                <a
                  href="https://wa.me/573106942538"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="light" className="cta-button">
                    Contáctanos
                  </Button>
                </a>
              </div>
            </Col>
            {/* Imagen */}
            <Col lg={6} md={12} className="image-content">
              {/* <img src="/home.webp" alt="Persona en cambio" /> */}
              <img
                src="/home-desktop.jpeg" // Imagen predeterminada para desktop
                srcSet="
                  /home-mobile.jpeg 600w,
                  /home-tablet.jpeg 1000w,
                  /home-desktop.jpeg 1600w"
                sizes="(max-width: 600px) 100vw, (max-width: 992px) 50vw, 50vw"
                alt="Persona en cambio"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <ComicSection />
      <CreatingAwareness />
      <Differential />
      <NumbersSection />
      <PhotoGallery />
      <Programs />
      <Testimony />

      <Partners />
      <ContentInfo />
    </>
  );
};

export default Home;
