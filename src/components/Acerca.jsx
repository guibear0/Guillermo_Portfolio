import "../comp_styles/Acerca.css";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaGitAlt,
  FaPhp,
  FaWordpress,
} from "react-icons/fa";
import { SiMysql, SiLaravel, SiCsswizardry } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";

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
          <p>
            Graduado en Desarrollo de Aplicaciones Web <br/>            
            Estudiando Desarrollo de Aplicaciones Multiplataforma
          </p>
          <h2>Certificados</h2>
          <p>Ciberseguridad Avanzada en Entornos de <br/>las Tecnologías de la Operación</p>
        </div>

        <div className="bloque-tecnologias">
          <h2>Tecnologías</h2>
          <h3>Uso habitual</h3>
          <div className="tecnologias">
            <FaHtml5 className="iconos html" title="HTML" />
            <SiCsswizardry className="iconos css" title="CSS" />
            <FaJs className="iconos js" title="JavaScript" />
            <FaReact className="iconos react" title="React" />
            <FaGitAlt className="iconos git" title="Git"/>
            <FaPhp className="iconos php" title="PHP" />
            <RiSupabaseFill className="iconos supabase" title="Supabase"/>
            <FaWordpress className="iconos wordpress" title="WordPress" />
            <SiLaravel className="iconos laravel" title="Laravel"/>
          </div>

          {/* Bloque de CV */}
          <div className="bloque-cv">
            <h2>Mi CV</h2>
            <h3>Descarga mi CV si lo prefieres</h3>
            <div className="cv-contenido">
              <img 
                src="https://via.placeholder.com/150x200.png?text=PDF+Preview" 
                alt="Vista previa CV" 
              />
              <a href="assets/CV_Guillermo_Bello_Armada.pdf" download className="btn-cv">
                Descargar PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Acerca;
