import React from "react";
import CountUp from "react-countup";
import imageStats from "/numbers.svg";
import { useInView } from "react-intersection-observer";
import "../styles/numberssection.css";

const NumbersSection = () => {
  const recovery = 2600;
  const interns = 260;
  const professionals = 30;
  const expirience = 18;
  //logica libreria react-intersection-observer
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <>
      <section
        ref={ref}
        className={`stats ${inView ? "animate__animated " : ""}`}
        style={{
          backgroundImage: `url(${imageStats})`,
          filter: " brightness(1.2) contrast(1.2)",
        }}
      >
        <h4 className="info_stats">Porque los números nos respaldan</h4>
        {inView && (
          <div className="counter">
            <div className="counter__item">
              <i className="bx bx-check-square"></i>
              <CountUp
                start={0}
                end={expirience}
                duration={2.5}
                delay={0.5}
                separator=","
                decimals={0}
                prefix="+ de "
                suffix=" Años de experiencia"
              />
            </div>
            <div className="counter__item">
              <i className="bx bx-notepad"></i>
              <CountUp
                start={0}
                end={recovery}
                duration={2.5}
                delay={0.5}
                separator=","
                decimals={0}
                prefix="+ de "
                suffix=" Pacientes Recuperados"
              />
            </div>
            <div className="counter__item">
              <i className="bx bx-check-square"></i>
              <CountUp
                start={0}
                end={interns}
                duration={2.5}
                delay={0.5}
                separator=","
                decimals={0}
                prefix="+ de "
                suffix=" Pacientes Activos"
              />
            </div>
            <div className="counter__item">
              <i className="bx bx-check-square"></i>
              <CountUp
                start={0}
                end={professionals}
                duration={2.5}
                delay={0.5}
                separator=","
                decimals={0}
                prefix="+ de "
                suffix=" Profesionales Trabajando"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default NumbersSection;
