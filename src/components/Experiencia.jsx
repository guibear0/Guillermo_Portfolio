// src/components/Experiencia.jsx
import "../comp_styles/Experiencia.css";
import { useState } from "react";
import Modal from "./Modal";


function Experiencia() {
  const [modal, setModal] = useState(null);

  return (
    <section id="experiencia">
      <h2>Experiencia</h2>
      <div className="experiencias">
        <div className="experiencia-card" onClick={() => setModal("abril")}>
          <img src="/assets/aceites.webp" alt="Aceites Abril" className="experiencia-img" />
          <div className="experiencia-info">
            <h3>Aceites Abril</h3>
            <p>Técnico informático en <br/>Aceites Abril</p>
          </div>
        </div>
        <div className="experiencia-card" onClick={() => setModal("contratame")}>
          <img src="/src/assets/signo-de-interrogacion.webp" alt="Contrátame" className="experiencia-img" />
          <div className="experiencia-info">
            <h3>Tu empresa</h3>
            <p>¡Contrátame y verás de lo que soy capaz!</p>
          </div>
        </div>
      </div>

      {modal && (
  <>
    {modal === "abril" && (
      <Modal
        onClose={() => setModal(null)}
        company="Aceites Abril"
        dates=" Octubre 2023 – Diciembre 2023"
        tasks={[
          "Desarrollo de la web interna",
          "Gestión de redes",
          "Mantenimiento de equipos",
        ]}
      />
    )}

    {modal === "contratame" && (
      <Modal
        onClose={() => setModal(null)}
        company="¡Contrátame!"
        dates="Disponible ahora"
        tasks={[
          "Podría ayudarte con:",
          "Desarrollos web personalizados",
          "Optimización y mantenimiento",
          "Asesoría en proyectos tecnológicos",
          "Y mucho más...",
        ]}
        isContratame={true}
      />
    )}
  </>
)}

    </section>
  );
}

export default Experiencia;
