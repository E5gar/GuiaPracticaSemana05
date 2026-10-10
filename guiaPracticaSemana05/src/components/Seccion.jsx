import PropTypes from 'prop-types'
import estilos from '@styles/Seccion.module.css'

function Seccion({ id, tema = 'light', children }) {
  return (
    <section id={id} data-theme={tema} className={estilos.seccion}>
      <div className={estilos.contenedor}>{children}</div>
    </section>
  )
}

Seccion.propTypes = {
  id: PropTypes.string.isRequired,
  tema: PropTypes.oneOf(['light', 'light-alt', 'dark']),
  children: PropTypes.node,
}

export default Seccion