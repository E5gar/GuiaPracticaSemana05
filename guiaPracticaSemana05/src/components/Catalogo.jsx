import { Cable, Gamepad2, ShieldCheck, SprayCan } from 'lucide-react'
import { consolas, incluyeCatalogo } from '@data/contenido'
import Seccion from '@components/Seccion'
import Reveal from '@components/Reveal'
import Etiqueta from '@components/Etiqueta'
import Boton from '@components/Boton'
import TarjetaConsola from '@components/TarjetaConsola'
import estilos from '@styles/Catalogo.module.css'

const iconos = {
  mandos: Gamepad2,
  cables: Cable,
  limpieza: SprayCan,
  revision: ShieldCheck,
}

function Catalogo() {
  return (
    <Seccion id="catalogo" tema="light">
      <div className={estilos.rejilla}>
        <div className={estilos.intro}>
          <Reveal>
            <Etiqueta>Consolas</Etiqueta>
          </Reveal>
          <Reveal as="h2" retraso={100} className="heading-m">
            Seis equipos listos para tu sala.
          </Reveal>
          <Reveal as="p" retraso={200} className={estilos.texto}>
            Elige la plataforma que ya conoces o prueba una nueva. Cada alquiler sale completo, limpio y verificado.
          </Reveal>
          <Reveal as="ul" retraso={300} className={estilos.incluye}>
            {incluyeCatalogo.map((item) => {
              const Icono = iconos[item.icono]
              return (
                <li key={item.icono}>
                  <Icono size={18} strokeWidth={1.5} />
                  <span>{item.texto}</span>
                </li>
              )
            })}
          </Reveal>
        </div>

        <div className={estilos.lista}>
          {consolas.map((consola, indice) => (
            <Reveal key={consola.id} retraso={(indice % 2) * 120}>
              <TarjetaConsola consola={consola}>
                <Boton href="#reserva" variante="contorno">
                  Reservar
                </Boton>
              </TarjetaConsola>
            </Reveal>
          ))}
        </div>
      </div>
    </Seccion>
  )
}

export default Catalogo