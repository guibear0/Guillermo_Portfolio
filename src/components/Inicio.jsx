import "../comp_styles/Inicio.css";
//eslint-disable-next-line
import { motion } from "framer-motion";
function Inicio() {
  return (
    <section id="inicio" className="inicio">
      {/* Nombre */}
      <motion.h1
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
      >
        Guillermo Bello<br />Armada
      </motion.h1>

      {/* Barra / con rotación */}
      <motion.h1
        animate={{
          y: [0, -10, 0],
          rotate: [0, 360], // Rotación infinita
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear", // Rotación uniforme
        }}
      >
        |
      </motion.h1>

      {/* Puesto */}
      <motion.h1
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, delay: 0.6, repeat: Infinity, repeatType: "loop" }}
      >
        Desarrollador Web
      </motion.h1>
    </section>
  );
}

export default Inicio;
