// src/components/Modal.jsx
import "../comp_styles/Modal.css";

function Modal({ children, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="cerrar" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
