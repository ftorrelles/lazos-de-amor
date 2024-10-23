import React from "react";
import "../styles/programs.css";

const programs = [
  {
    title: "Terapias Psicológicas",
    description:
      "Ofrecemos sesiones individuales y grupales para ayudar a los pacientes a comprender y enfrentar las causas de su adicción. Estas terapias promueven el bienestar emocional y mental durante el proceso de recuperación.",
    impact:
      "Impacto: Más del 80% de nuestros pacientes reportan mejoras significativas en su salud mental.",
    icon: "🧠",
  },
  {
    title: "Programas de Reintegración Social",
    description:
      "A través de talleres y actividades de reintegración, preparamos a nuestros pacientes para regresar a la sociedad con nuevas habilidades y una red de apoyo sólida.",
    impact:
      "Impacto: El 70% de los graduados del programa se reintegran exitosamente en su comunidad.",
    icon: "🏠",
  },
  {
    title: "Tratamiento Médico",
    description:
      "Brindamos atención médica integral para gestionar los síntomas físicos de la adicción y garantizar una recuperación segura y efectiva.",
    impact:
      "Impacto: Cientos de pacientes reciben tratamiento médico adecuado para superar las adicciones de manera saludable.",
    icon: "💊",
  },
  {
    title: "Actividades de Concientización",
    description:
      "Organizamos talleres y campañas de concientización dirigidas a jóvenes, adultos y familias, para prevenir el abuso de sustancias y fomentar estilos de vida saludables.",
    impact:
      "Impacto: Nuestras actividades han alcanzado a más de 1,000 personas en la comunidad.",
    icon: "📢",
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
