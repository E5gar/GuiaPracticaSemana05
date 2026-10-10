import PropTypes from 'prop-types'
import estilos from '@styles/Dashboard.module.css'

function Dashboard({ titulo, descripcion, children }) {
  return (
    <div className={estilos.dashboard}>
      <header className={estilos.cabecera}>
        <h3 className="heading-s">{titulo}</h3>
        {descripcion && <p className={estilos.descripcion}>{descripcion}</p>}
      </header>
      <div className={estilos.rejilla}>{children}</div>
    </div>
  )
}

Dashboard.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string,
  children: PropTypes.node,
}

export default Dashboard