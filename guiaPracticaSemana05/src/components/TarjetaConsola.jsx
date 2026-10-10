import PropTypes from 'prop-types'
import Etiqueta from '@components/Etiqueta'
import estilos from '@styles/TarjetaConsola.module.css'

function TarjetaConsola({ consola, children }) {
  const pocas = consola.disponibles <= 3
  const textoStock = pocas ? `Quedan ${consola.disponibles}` : `${consola.disponibles} disponibles`

  return (
    <article className={estilos.tarjeta}>
      <div className={estilos.imagen}>
        <img src={consola.imagen} alt="Lorem ipsum dolor sit amet" loading="lazy" />
        <span className={`${estilos.stock} ${pocas ? estilos.stockBajo : ''}`}>{textoStock}</span>
      </div>

      <div className={estilos.cuerpo}>
        <Etiqueta>{consola.fabricante}</Etiqueta>
        <h3 className="heading-xs">{consola.nombre}</h3>
        <p className={estilos.resumen}>{consola.resumen}</p>
        <ul className={estilos.specs}>
          {consola.especificaciones.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        </ul>
      </div>

      <footer className={estilos.pie}>
        <p className={estilos.tarifa}>
          <strong>S/ {consola.tarifa}</strong>
          <span>por noche</span>
        </p>
        {children}
      </footer>
    </article>
  )
}

TarjetaConsola.propTypes = {
  consola: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    fabricante: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    resumen: PropTypes.string.isRequired,
    especificaciones: PropTypes.arrayOf(PropTypes.string).isRequired,
    tarifa: PropTypes.number.isRequired,
    disponibles: PropTypes.number.isRequired,
  }).isRequired,
  children: PropTypes.node,
}

export default TarjetaConsola