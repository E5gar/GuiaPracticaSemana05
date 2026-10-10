import PropTypes from 'prop-types'
import { ArrowUpRight } from 'lucide-react'
import estilos from '@styles/Boton.module.css'

function Boton({
  href,
  onClick,
  tipo = 'button',
  variante = 'primario',
  externo = false,
  icono: Icono = ArrowUpRight,
  children,
}) {
  const clases = `${estilos.boton} ${estilos[variante]}`

  const contenido = (
    <>
      <span className={estilos.fondo} />
      <span className={estilos.texto}>{children}</span>
      <span className={estilos.icono}>
        <Icono size={16} strokeWidth={1.75} />
      </span>
    </>
  )

  if (href) {
    return (
      <a
        className={clases}
        href={href}
        onClick={onClick}
        {...(externo ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {contenido}
      </a>
    )
  }

  return (
    <button className={clases} type={tipo} onClick={onClick}>
      {contenido}
    </button>
  )
}

Boton.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  tipo: PropTypes.oneOf(['button', 'submit']),
  variante: PropTypes.oneOf(['primario', 'contorno', 'acento']),
  externo: PropTypes.bool,
  icono: PropTypes.elementType,
  children: PropTypes.node.isRequired,
}

export default Boton