import { useEffect, useRef, useState } from 'react';

function useReveal(umbral = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const nodo = ref.current;
    if (!nodo) return undefined;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true);
          observador.disconnect();
        }
      },
      { threshold: umbral, rootMargin: '0px 0px -6% 0px' }
    );

    observador.observe(nodo);
    return () => observador.disconnect();
  }, [umbral]);

  return [ref, visible];
}

export default useReveal;
