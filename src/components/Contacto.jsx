// src/components/Contacto.jsx
import "../comp_styles/Contacto.css";
import { useState } from "react";

function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`¡Gracias ${form.nombre}! Me pondré en contacto contigo pronto.`);
    setForm({ nombre: "", email: "", mensaje: "" });
  }

  return (
    <section id="contacto">
      <h2>Contacto</h2>
      <p>¿Quieres trabajar conmigo? Envíame un mensaje.</p>
      <form className="form-contacto" onSubmit={handleSubmit}>
        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" required />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Tu correo" required />
        <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Escribe tu mensaje..." required />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contacto;
