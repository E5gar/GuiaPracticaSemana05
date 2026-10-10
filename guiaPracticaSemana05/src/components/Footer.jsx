import { ArrowUp } from 'lucide-react';
import { marca, navegacion } from '@data/contenido';
import Reveal from '@components/Reveal';
import Boton from '@components/Boton';
import estilos from '@styles/Footer.module.css';

function Footer() {
  return (
    <footer className={estilos.footer} data-theme="dark">
      <div className={estilos.contenedor}>
        <div className={estilos.superior}>
          <div className={estilos.llamado}>
            <Reveal as="h2" className="heading-m">
              ¿Lista la próxima noche de juegos?
            </Reveal>
            <Reveal retraso={150}>
              <Boton href="#reserva" variante="acento">
                Reservar ahora
              </Boton>
            </Reveal>
          </div>

          <Reveal retraso={200} className={estilos.columnas}>
            <div className={estilos.columna}>
              <h3 className={estilos.titulo}>Navegar</h3>
              <ul>
                {navegacion.map((item) => (
                  <li key={item.id}>
                    <a className="link link-weight" href={`#${item.id}`}>
                      {item.etiqueta}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={estilos.columna}>
              <h3 className={estilos.titulo}>Contacto</h3>
              <ul>
                <li>{marca.telefono}</li>
                <li>{marca.correo}</li>
                <li>{marca.direccion}</li>
              </ul>
            </div>
            <div className={estilos.columna}>
              <h3 className={estilos.titulo}>Horario</h3>
              <ul>
                <li>{marca.horario}</li>
                <li>Entregas programadas y express</li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal as="p" className={estilos.marcaGrande} aria-hidden="true">
          {marca.nombre}
        </Reveal>

        <div className={estilos.base}>
          <p>© 2026 {marca.nombre}. Todos los derechos reservados. Facultad de Ingeniería de Sistemas - Desarrollo de Aplicaciones Web - IX Semestre - Gago Uribe Edgar Robert</p>
          <a className={`link ${estilos.subir}`} href="#inicio">
            Volver arriba
            <ArrowUp size={16} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
