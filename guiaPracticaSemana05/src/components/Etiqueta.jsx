import PropTypes from 'prop-types';
import estilos from '@styles/Etiqueta.module.css';

function Etiqueta({ icono: Icono, acento = false, children }) {
  const clases = `${estilos.etiqueta} ${acento ? estilos.acento : ''}`;

  return (
    <span className={clases}>
      {Icono && <Icono size={12} strokeWidth={2} />}
      {children}
    </span>
  );
}

Etiqueta.propTypes = {
  icono: PropTypes.elementType,
  acento: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Etiqueta;
