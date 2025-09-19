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
        <div className="experiencia-item" onClick={() => setModal("abril")}>
          <img src="/img/aceites.webp" alt="Aceites Abril" className="experiencia-img" />
          <p>Técnico informático en Aceites Abril</p>
        </div>
        <div className="experiencia-item" onClick={() => setModal("contratame")}>
          <img src="/img/signo-de-interrogacion.png" alt="Contrátame" className="experiencia-img" />
          <p>Contrátame y lo sabré</p>
        </div>
      </div>
      {modal && (
        <Modal onClose={() => setModal(null)}>
          {modal === "abril" && (
            <>
              <h3>Aceites Abril</h3>
              <ul>
                <li>Desarrollo de la web interna</li>
                <li>Gestión de redes</li>
                <li>Mantenimiento de equipos</li>
              </ul>
            </>
          )}
          {modal === "contratame" && (
            <p>Si quieres mis servicios, contáctame al final de esta página.</p>
          )}
        </Modal>
      )}
    </section>
  );
}

export default Experiencia;
