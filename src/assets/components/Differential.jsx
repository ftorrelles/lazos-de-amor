import "../styles/differential.css";
import { Card, Col, Container, Row } from "react-bootstrap";

const Differential = () => {
  return (
    <section className="differential">
      <div className="differential__content">
        <h2 className="differential__title">Que nos hace diferentes</h2>
        <Container>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card className="differential__feature">
                <Card.Body>
                  <i className="bx bx-first-aid"></i>
                  <Card.Title>Enfoque Teoterapéutico</Card.Title>
                  <Card.Text>
                    Implementamos un enfoque teoterapéutico que combina
                    espiritualidad y ayuda psicológica, brindando un camino
                    integral hacia la sanación emocional. Esto permite a los
                    usuarios hallar un propósito y sentido en sus vidas,
                    complementando las terapias con prácticas que fomentan la
                    recuperación completa de los usuarios.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="differential__feature">
                <Card.Body>
                  <i className="bx bxs-hard-hat"></i>
                  <Card.Title>Reintegración Social</Card.Title>
                  <Card.Text>
                    Nos enfocamos en la reintegración social, ofreciendo
                    herramientas y habilidades para que los usuarios regresen a
                    la sociedad de manera efectiva. Contamos con convenios con
                    el SENA, que brindan cursos de panadería y otros oficios,
                    facilitando la formación profesional y el desarrollo de
                    competencias.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="differential__feature">
                <Card.Body>
                  <i className="bx bx-male-female"></i>
                  <Card.Title>Apoyo Familiar Integral</Card.Title>
                  <Card.Text>
                    Brindamos apoyo familiar continuo, ayudando a las familias a
                    comprender y gestionar los desafíos de la adicción. A través
                    de talleres y sesiones de orientación, fortalecemos la
                    dinámica familiar, creando un entorno favorable para la
                    recuperación y permitiendo a los seres queridos ser parte
                    del proceso de reintegración y sanación.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Differential;
