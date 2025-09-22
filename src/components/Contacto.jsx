// src/components/Contacto.jsx
import "../comp_styles/Contacto.css";
import { useState } from "react";
//eslint-disable-next-line
import { motion } from "framer-motion";
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
  const [error, setError] = useState(false); // nuevo estado para error

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
      setError(true); // marca error
    } finally {
      setEnviando(false);
    }
  }

  return (
    <motion.section
      id="contacto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Contacto
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        ¿Quieres trabajar conmigo? Envíame un mensaje.
      </motion.p>

      <motion.form
        className="form-contacto"
        onSubmit={handleSubmit}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.input
          whileFocus={{ scale: 1.02 }}
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Tu nombre"
          required
        />
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Tu correo"
          required
        />
        <motion.input
          whileFocus={{ scale: 1.02 }}
          name="asunto"
          value={form.asunto}
          onChange={handleChange}
          placeholder="Asunto"
          required
        />
        <motion.textarea
          whileFocus={{ scale: 1.02 }}
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

        {/* Mensaje de error */}
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ color: "red", marginTop: "1rem" }}
          >
            Hubo un error al enviar el mensaje.
          </motion.p>
        )}
      </motion.form>
    </motion.section>
  );
}

export default Contacto;
