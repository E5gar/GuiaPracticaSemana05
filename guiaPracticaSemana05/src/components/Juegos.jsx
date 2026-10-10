import { useState } from 'react'
import { Users } from 'lucide-react'
import { juegos, plataformas } from '@data/contenido'
import Seccion from '@components/Seccion'
import Reveal from '@components/Reveal'
import Etiqueta from '@components/Etiqueta'
import Boton from '@components/Boton'
import estilos from '@styles/Juegos.module.css'

function Juegos() {
  const [plataforma, setPlataforma] = useState('todos')
  const [activoId, setActivoId] = useState(juegos[0].id)

  const visibles = plataforma === 'todos' ? juegos : juegos.filter((juego) => juego.plataforma === plataforma)
  const activo = visibles.find((juego) => juego.id === activoId) ?? visibles[0]
  const datosPlataforma = plataformas.find((item) => item.id === activo.plataforma)

  const contar = (id) => (id === 'todos' ? juegos.length : juegos.filter((juego) => juego.plataforma === id).length)

  return (
    <Seccion id="juegos" tema="dark">
      <div className={estilos.cabecera}>
        <div className={estilos.titulo}>
          <Reveal>
            <Etiqueta>Biblioteca</Etiqueta>
          </Reveal>
          <Reveal as="h2" retraso={100} className="heading-m">
            Todo instalado. Tú solo eliges.
          </Reveal>
        </div>
        <Reveal retraso={200} className={estilos.tabs}>
          {plataformas.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`${estilos.tab} ${plataforma === item.id ? estilos.tabActiva : ''}`}
              aria-pressed={plataforma === item.id}
              onClick={() => setPlataforma(item.id)}
            >
              {item.nombre}
              <span>{contar(item.id)}</span>
            </button>
          ))}
        </Reveal>
      </div>

      <div className={estilos.cuerpo}>
        <Reveal as="ul" className={estilos.lista}>
          {visibles.map((juego, indice) => (
            <li key={juego.id}>
              <button
                type="button"
                className={`${estilos.fila} ${activo.id === juego.id ? estilos.filaActiva : ''}`}
                onMouseEnter={() => setActivoId(juego.id)}
                onFocus={() => setActivoId(juego.id)}
                onClick={() => setActivoId(juego.id)}
              >
                <span className={estilos.indice}>{String(indice + 1).padStart(2, '0')}</span>
                <span className={estilos.nombre}>{juego.titulo}</span>
                <span className={estilos.meta}>
                  <span>{juego.genero}</span>
                  <span className={estilos.jugadores}>
                    <Users size={14} strokeWidth={1.5} />
                    {juego.jugadores}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </Reveal>

        <Reveal retraso={150} className={estilos.panel}>
          <div className={estilos.foto}>
            <img key={datosPlataforma.imagen} src={datosPlataforma.imagen} alt="Lorem ipsum dolor sit amet" />
          </div>
          <div className={estilos.detalle}>
            <Etiqueta>{datosPlataforma.nombre}</Etiqueta>
            <h3 className="heading-s">{activo.titulo}</h3>
            <p className={estilos.nota}>{activo.nota}</p>
            <dl className={estilos.datos}>
              <div>
                <dt>Género</dt>
                <dd>{activo.genero}</dd>
              </div>
              <div>
                <dt>Jugadores</dt>
                <dd>{activo.jugadores}</dd>
              </div>
            </dl>
            <Boton href="#reserva" variante="contorno">
              Pedir este juego
            </Boton>
          </div>
        </Reveal>
      </div>
    </Seccion>
  )
}

export default Juegos