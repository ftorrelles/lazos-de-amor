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
              <img
                src="/home.webp"
                loading="lazy"
                alt="Persona en cambio"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <ComicSection />
      <Differential />
      <NumbersSection />
      <PhotoGallery />
      <Programs />
      {/* <Testimony /> */}
      <Partners />
      <ContentInfo />
    </>
  );
};

export default Home;
