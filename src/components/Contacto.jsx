// src/components/Contacto.jsx
import "../comp_styles/Contacto.css";
import { useState } from "react";
//eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";
import { FaSpinner, FaCheck } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [exito, setExito] = useState(false);
  const [error, setError] = useState(false);
  const [copiado, setCopiado] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setEnviando(true);
    setExito(false);
    setError(false);

    try {
      await emailjs.send(
        "service_r8bafxc",
        "template_wsf4enu",
        {
          nombre: form.nombre,
          email: form.email,
          asunto: form.asunto,
          mensaje: form.mensaje,
        },
        "12HwG1Tl8upDYKWkd"
      );

      setExito(true);
      setForm({ nombre: "", email: "", asunto: "", mensaje: "" });
      setTimeout(() => setExito(false), 2000);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setEnviando(false);
    }
  }

  function copiarCorreo() {
    navigator.clipboard.writeText("guibear0@gmail.com").then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000); // lo quitamos después de 2s
    });
  }

  return (
    <motion.section
      id="contacto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Contacto</h2>
      <p style={{ marginBottom: "15px", color: "#4e4e4e" }} >¿Quieres contactar conmigo? Envíame un mensaje.</p>

      <form className="form-contacto" onSubmit={handleSubmit}>
        <input
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Tu nombre"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Tu correo"
          required
        />
        <input
          name="asunto"
          value={form.asunto}
          onChange={handleChange}
          placeholder="Asunto"
          required
        />
        <textarea
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          placeholder="Escribe tu mensaje..."
          required
        />

        <motion.button
          type="submit"
          disabled={enviando}
          whileHover={!enviando && !exito ? { scale: 1.05 } : {}}
          whileTap={!enviando && !exito ? { scale: 0.95 } : {}}
          className="btn-enviar"
        >
          {enviando ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <FaSpinner />
            </motion.div>
          ) : exito ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <FaCheck />
            </motion.div>
          ) : (
            <p>Enviar</p>
          )}
        </motion.button>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ color: "red", marginTop: "1rem" }}
          >
            Hubo un error al enviar el mensaje.
          </motion.p>
        )}
      </form>

      {/* Texto alternativo con copia */}
      <p style={{ marginTop: "1.5rem", color: "#4e4e4e" }}>
        O si lo prefieres copia mi correo con un click:{" "}
        <span onClick={copiarCorreo} className="correo-link">
          guibear0@gmail.com
        </span>
      </p>

      {/* Aviso de copiado con AnimatePresence */}
      <AnimatePresence>
        {copiado && (
          <motion.p
            key="copiado"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            style={{ color: "#32ab26", marginTop: "0.5rem" }}
          >
            📋 Copiado al portapapeles
          </motion.p>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default Contacto;
