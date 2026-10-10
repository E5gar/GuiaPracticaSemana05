import PropTypes from 'prop-types'
import Etiqueta from '@components/Etiqueta'
import estilos from '@styles/MetricCard.module.css'

function MetricCard({ icono: Icono, etiqueta, valor, unidad, children }) {
  return (
    <article className={estilos.card}>
      <div className={estilos.cabecera}>
        <Etiqueta>{etiqueta}</Etiqueta>
        {Icono && <Icono size={22} strokeWidth={1.25} />}
      </div>
      <p className={estilos.valor}>
        {valor}
        {unidad && <span className={estilos.unidad}>{unidad}</span>}
      </p>
      <div className={estilos.detalle}>{children}</div>
    </article>
  )
}

MetricCard.propTypes = {
  icono: PropTypes.elementType,
  etiqueta: PropTypes.string.isRequired,
  valor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  unidad: PropTypes.string,
  children: PropTypes.node,
}

export default MetricCard