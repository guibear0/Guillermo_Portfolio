import "../comp_styles/Proyectos.css";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiSupabase } from "react-icons/si";


function ProyectoCard({ image, name, description, technologies, link }) {
  return (
    <div className="proyecto-card">
      <img src={image} alt={name} className="proyecto-img" />
      <div className="card-content">
        <h3 className="proyecto-title">
          <a href={link || "#"} target="_blank" rel="noopener noreferrer">{name}</a>
        </h3>
        <div className="proyecto-technologies">
          {technologies.map((Tech, index) => (
            <Tech key={index} className="tech-icon" title={Tech.name} />
          ))}
        </div>
        <p className="proyecto-description">{description}</p>
      </div>
    </div>
  );
}

function Proyectos() {
  const projects = [
    {
      image: "/assets/TenaxGym.webp",
      name: "Tenax Gym",
      description: "Sitio web para un gimnasio, desarrollado con React y Supabase para la gestión de usuarios y ejercicios.",
      technologies: [
        { name: "React", icon: FaReact },
        { name: "GitHub", icon: FaGithub },
        { name: "Supabase", icon: SiSupabase },
      ],
      link: "https://tenax-gym.vercel.app/",
    },
    {
      image: "/assets/Wordle.webp",
      name: "React Wordle",
      description: "Web app que replica el juego Wordle, creada con React y recibiendo palabras desde una API externa.",
      technologies: [
        { name: "React", icon: FaReact },
        { name: "GitHub", icon: FaGithub },
        { name: "Supabase", icon: SiSupabase },
      ],
      link: "https://react-wordle-lac.vercel.app/",
    },
  ];

  return (
    <section id="proyectos">
      <h2>Proyectos</h2>
      <div className="proyectos-container">
        {projects.map((project, index) => (
          <ProyectoCard
            key={index}
            image={project.image}
            name={project.name}
            description={project.description}
            technologies={project.technologies.map(tech => tech.icon)}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Proyectos;