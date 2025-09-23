//eslint-disable-next-line
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../comp_styles/Footer.css"

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-container">
        {/* Logo / Nombre */}
        <div className="footer-brand">
          <h3>Guillermo Bello Armada</h3>
          <p>¡Gracias por visitar la página!</p>
        </div>

        {/* Navegación */}
        <nav className="footer-nav">
          <a href="#inicio">Inicio</a>
          <a href="#acerca">Acerca de</a>    
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>

        {/* Redes sociales */}
        <div className="footer-social">
          <a
            href="https://github.com/guibear0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/guillermo-bello-armada/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Copy */}
      <div className="footer-copy">
        <p>© {new Date().getFullYear()} Guillermo Bello Armada</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
