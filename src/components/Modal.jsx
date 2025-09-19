import "../comp_styles/Modal.css";
//eslint-disable-next-line
import { motion } from "framer-motion";

function Modal({ onClose, company, dates, tasks, isContratame = false }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.8, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4 }}
      >
        <button className="cerrar" onClick={onClose}>
          ×
        </button>

        <h2 className="modal-title">{company}</h2>
        <p className="modal-dates">Duración: {dates}</p>

        {tasks && tasks.length > 0 && (
          <ul className="modal-tasks">
            {!isContratame && (
              <p>
                En mi tiempo en la empresa realicé las siguientes tareas:
                <br />
              </p>
            )}
            {tasks.map((t, idx) => (
              <li key={idx}>{t}</li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
}

export default Modal;
