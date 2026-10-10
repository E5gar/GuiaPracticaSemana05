import PropTypes from 'prop-types';
import useReveal from '@hooks/useReveal';

function Reveal({ as: Elemento = 'div', retraso = 0, className, children, ...resto }) {
  const [ref, visible] = useReveal();
  const clases = [className, visible ? 'is-visible' : ''].filter(Boolean).join(' ');

  return (
    <Elemento
      ref={ref}
      data-reveal
      className={clases || undefined}
      style={{ transitionDelay: `${retraso}ms` }}
      {...resto}
    >
      {children}
    </Elemento>
  );
}

Reveal.propTypes = {
  as: PropTypes.elementType,
  retraso: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Reveal;
