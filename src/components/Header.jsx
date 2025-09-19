import { Link } from "react-scroll";
import "../comp_styles/Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="header_izquierda">Guillermo Bello Armada</div>
      <nav className="header_derecha">
        <div className="items"><a href="#inicio">Inicio</a></div>
        <div className="items"><a href="#acerca">Acerca</a></div>
        <div className="items"><a href="#proyectos">Proyectos</a></div>
        <div className="items"><a href="#experiencia">Experiencia</a></div>
          <button>CONTACTO</button>
      </nav>
    </header>
  );
}


