// src/components/Proyectos.jsx
import "../comp_styles/Proyectos.css";

function Proyectos() {
  return (
    <section id="proyectos">
      <h2>Proyectos</h2>
      <div className="card">
        <div className="wrapper">
          <div className="data">
            <div className="content">
              <h3 className="title"><a href="#">Portfolio Card</a></h3>
              <p className="text">Un ejemplo de proyecto en React con estilos modernos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
