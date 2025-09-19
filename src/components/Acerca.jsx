// src/components/Acerca.jsx
import "../comp_styles/Acerca.css";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaGitAlt,
  FaPhp,
  FaWordpress
} from "react-icons/fa";
import { SiMysql, SiLaravel, SiCsswizardry } from "react-icons/si";

function Acerca() {
  return (
    <section id="acerca">
      <div className="contenido-acerca">
        <div className="sobre-mi">
          <h2>Sobre mí</h2>
          <h3>Introducción</h3>
          <p>
            Hola, soy Guillermo Bello Armada, un desarrollador web apasionado por la tecnología y el diseño. 
            Me encanta crear soluciones innovadoras y funcionales que mejoren la experiencia del usuario.
          </p>
          <h2>Estudios</h2>
          <h3>Formación en CIFP A Carballeira</h3>
          <ul>
            <li>Graduado en Desarrollo de Aplicaciones Web</li>
            <li>Estudiando Desarrollo de Aplicaciones Multiplataforma</li>
          </ul>
          <h2>Certificados</h2>
            <li>Ciberseguridad Avanzada en Entornos de <br/>las Tecnologías de la Operación</li>
        </div>

        <div className="bloque-tecnologias">
          <h2>Tecnologías</h2>
          <div className="tecnologias">
            <FaHtml5 className="iconos html" title="HTML" />
            <SiCsswizardry className="iconos css" title="CSS" />
            <FaJs className="iconos js" title="JavaScript" />
            <FaReact className="iconos react" title="React" />
            <FaGitAlt className="iconos git" title="Git"/>
            <FaPhp className="iconos php" title="PHP" />
            <SiMysql className="iconos mysql" title="MySQL"/>
            <FaWordpress className="iconos wordpress" title="WordPress" />
            <SiLaravel className="iconos laravel" title="Laravel"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Acerca;
