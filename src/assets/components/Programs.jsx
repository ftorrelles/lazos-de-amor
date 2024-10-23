import React from "react";
import "../styles/programs.css";

const programs = [
  {
    title: "Prevención",
    description:
      "Realizamos programas educativos y de concientización enfocados en prevenir la adicción, informando a las personas y a la comunidad sobre los riesgos del abuso de sustancias y cómo evitar caer en este tipo de comportamientos.",
    impact:
      "👨‍👩‍👧‍👧 Impacto: Nuestras actividades han alcanzado a más de 1,000 personas en la comunidad.",
    activity1:
      "Talleres en escuelas y comunidades sobre los riesgos del abuso de sustancias.",
    activity2:
      "Campañas de concientización a través de redes sociales y eventos comunitarios.",
    activity3:
      "Sesiones informativas para familias sobre cómo identificar señales de riesgo.",
    icon: "📢",
  },
  {
    title: "Rehabilitación",
    description:
      "Proporcionamos un entorno seguro y terapéutico donde las personas reciben tratamientos médicos y terapias psicológicas. Contamos con un enfoque integral que abarca tanto la salud física como la mental, ayudando a cada individuo a reconstruir su vida de manera saludable.",
    impact:
      "💊 Impacto: Cientos de pacientes reciben tratamiento médico adecuado para superar las adicciones de manera saludable.",
    activity1:
      "Desintoxicación: Programa supervisado para ayudar a los pacientes a eliminar sustancias de manera segura.",
    activity2:
      "Terapias: Sesiones grupales e individuales con psicólogos, psicopedagogos y terapeutas.",
    activity3:
      "Actividades recreativas y terapias alternativas (arte, deporte) para promover la salud mental y emocional.",
    icon: "🦾",
  },
  {
    title: "Educación",
    description:
      "Con la ayuda de nuestros aliados (SENA, FENEBRAA, Iglisia Cristiana Lazos de amor) Ofrecemos cursos y programas educativos que ayudan a los pacientes a desarrollar habilidades para su reintegración social y mejorar su calidad de vida. Estos programas están diseñados para proporcionar herramientas prácticas que les permitan enfrentar los desafíos cotidianos sin recurrir a sustancias.",
    impact:
      "🏠 Impacto: El 70% de los graduados del programa se reintegran exitosamente en su comunidad. ",
    activity1:
      "Implementación de talleres prácticos sobre habilidades laborales (ej. panadería, liderazgo, ofimatica).",
    activity2:
      "Programas de desarrollo personal que abordan habilidades de vida y manejo de estrés.",
    activity3: "Sesiones de consejería espiritual y apoyo emocional.",
    icon: "📚",
  },
];

const Programs = () => {
  return (
    <section className="programs-section">
      <div className="container">
        <h2 className="section-title">Programas y Servicios</h2>
        <div className="programs-list">
          {programs.map((program, index) => (
            <div key={index} className="program-item">
              <div className="icon">{program.icon}</div>
              <div className="program-content">
                <h3 className="program-title">{program.title}</h3>
                <p className="program-description">{program.description}</p>
                <ul>
                  <li>{program.activity1}</li>
                  <li>{program.activity2}</li>
                  <li>{program.activity3}</li>
                </ul>
                <p className="program-impact">{program.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
