import { Check } from 'lucide-react'
import { planes } from '@data/contenido'
import Seccion from '@components/Seccion'
import Reveal from '@components/Reveal'
import Etiqueta from '@components/Etiqueta'
import Boton from '@components/Boton'
import estilos from '@styles/Planes.module.css'

function Planes() {
  return (
    <Seccion id="planes" tema="dark">
      <div className={estilos.cabecera}>
        <div className={estilos.titulo}>
          <Reveal>
            <Etiqueta>Planes</Etiqueta>
          </Reveal>
          <Reveal as="h2" retraso={100} className="heading-m">
            Mientras más noches, menos pagas por cada una.
          </Reveal>
        </div>
        <Reveal as="p" retraso={200} className={estilos.nota}>
          Los porcentajes se aplican sobre la tarifa por noche de cada consola. Los montos de ejemplo corresponden a una
          PlayStation 5 a S/ 45 por noche.
        </Reveal>
      </div>

      <div className={estilos.rejilla}>
        {planes.map((plan, indice) => (
          <Reveal
            key={plan.id}
            retraso={indice * 90}
            className={`${estilos.plan} ${plan.destacado ? estilos.destacado : ''}`}
          >
            <div className={estilos.encabezado}>
              <Etiqueta>{plan.duracion}</Etiqueta>
              {plan.destacado && <Etiqueta acento>Más pedido</Etiqueta>}
            </div>

            <div className={estilos.principal}>
              <h3 className={estilos.nombre}>{plan.nombre}</h3>
              <p className={estilos.descuento}>{plan.descuento}</p>
              <p className={estilos.ejemplo}>
                Ejemplo: <strong>{plan.ejemplo}</strong>
              </p>
            </div>

            <ul className={estilos.lista}>
              {plan.incluye.map((item) => (
                <li key={item}>
                  <Check size={16} strokeWidth={1.75} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className={estilos.pie}>
              <Boton href="#reserva" variante={plan.destacado ? 'primario' : 'contorno'}>
                Elegir plan
              </Boton>
            </div>
          </Reveal>
        ))}
      </div>
    </Seccion>
  )
}

export default Planes