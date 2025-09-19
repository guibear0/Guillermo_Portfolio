import { Link } from "react-scroll";
import "../comp_styles/Header.css";
export default function Header() {
  return (
    <header>
        <div className="header_izquierda">Guillermo Bello Armada</div>
          <div className="header_derecha">
          <div className="items"><a href="#inicio">Inicio</a></div>
          <div className="items"><a href="#acerca">Acerca de</a></div> 
          <div className="items"><a href="#experiencia">Experiencia</a></div>
          <div className="items"><a href="#proyectos">Proyectos</a></div>
          <button><a href="#contacto">CONTACTO</a></button>
        </div>
      </header>
  );
}


