import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import "../styles/info.css";

const ContentInfo = () => {
  return (
    <Container fluid className="elegant-contact-section py-5">
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
          <h2 className="section-title">Conéctate con Nosotros</h2>
          <p className="section-subtitle">
            Estamos aquí para ofrecerte la mejor experiencia. ¡Contáctanos y
            síguenos en redes!
          </p>
        </Col>
      </Row>
      <Row className="gx-5">
        {/* Información de contacto */}
        <Col xs={12} md={6} className="contact-info-column">
          <div className="contact-item">
            <FaPhoneAlt size={40} className="contact-icon" />
            <div>
              <h5>Teléfono</h5>
              <p>+57 313 2173288</p>
            </div>
          </div>
          <div className="contact-item">
            <FaWhatsapp size={40} className="contact-icon" />
            <div>
              <h5>WhatsApp</h5>
              <p>
                <a
                  href="https://wa.me/573106942538"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chatea con nosotros
                </a>
              </p>
            </div>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt size={40} className="contact-icon" />
            <div>
              <h5>Dirección oficina</h5>
              <p>Av Carrera 50 #37-27 sur, Barrio Santa Rita, Bogota</p>
            </div>
          </div>
        </Col>
        {/* Redes sociales */}
        <Col xs={12} md={6} className="d-flex align-items-center">
          <div className="social-section text-center w-100">
            <h5 className="mb-4">Síguenos en Redes Sociales</h5>
            <div className="social-icons d-flex justify-content-center">
              <a
                href="https://www.facebook.com/profile.php?id=61559318943462"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={50} className="social-icon" />
              </a>
              <a
                href="https://www.instagram.com/adicciones_lazosdeamor/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={50} className="social-icon" />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContentInfo;
