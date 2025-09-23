import { useState } from "react";
/*eslint-disable*/ 
import { motion } from "framer-motion";
import "../comp_styles/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const topVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 10 }
  };

  const middleVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  };

  const bottomVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 }
  };

  return (
    <header>
      <div className="header_izquierda">Guillermo Bello Armada</div>

      <nav className={`header_derecha ${menuOpen ? "open" : ""}`}>
        <div className="items"><a href="#inicio">Inicio</a></div>
        <div className="items"><a href="#acerca">Acerca de</a></div>
        <div className="items"><a href="#experiencia">Experiencia</a></div>
        <div className="items"><a href="#proyectos">Proyectos</a></div>
        <button><a href="#contacto">CONTACTO</a></button>
      </nav>

      {/* Botón hamburguesa */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <motion.span
          variants={topVariants}
          animate={menuOpen ? "open" : "closed"}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.span
          variants={middleVariants}
          animate={menuOpen ? "open" : "closed"}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          variants={bottomVariants}
          animate={menuOpen ? "open" : "closed"}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </div>
    </header>
  );
}
