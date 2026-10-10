import { useEffect, useState } from 'react'

function useScrollHeader(ids) {
  const [estado, setEstado] = useState({ oculto: false, progreso: 0, activa: '' })

  useEffect(() => {
    let ultimo = window.scrollY
    let oculto = false
    let cuadro = 0

    const calcular = () => {
      cuadro = 0
      const actual = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      const progreso = total > 0 ? Math.min(actual / total, 1) : 0
      const marca = actual + window.innerHeight * 0.4
      let activa = ''

      ids.forEach((id) => {
        const nodo = document.getElementById(id)
        if (nodo && nodo.offsetTop <= marca) activa = id
      })

      if (Math.abs(actual - ultimo) > 6) {
        oculto = actual > ultimo && actual > 120
        ultimo = actual
      }

      setEstado((previo) =>
        previo.oculto === oculto &&
        previo.activa === activa &&
        Math.abs(previo.progreso - progreso) < 0.003
          ? previo
          : { oculto, progreso, activa },
      )
    }

    const alScroll = () => {
      if (!cuadro) cuadro = requestAnimationFrame(calcular)
    }

    alScroll()
    window.addEventListener('scroll', alScroll, { passive: true })
    window.addEventListener('resize', alScroll)

    return () => {
      window.removeEventListener('scroll', alScroll)
      window.removeEventListener('resize', alScroll)
      cancelAnimationFrame(cuadro)
    }
  }, [ids])

  return estado
}

export default useScrollHeader