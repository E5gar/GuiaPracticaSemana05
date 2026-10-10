import { useState } from 'react'
import { Gamepad2, Menu, X } from 'lucide-react'
import { idsSecciones, marca, navegacion } from '@data/contenido'
import useScrollHeader from '@hooks/useScrollHeader'
import Boton from '@components/Boton'
import estilos from '@styles/Header.module.css'

function Header() {
  const [abierto, setAbierto] = useState(false)
  const { oculto, progreso, activa } = useScrollHeader(idsSecciones)

  const cerrar = () => setAbierto(false)
  const clasesHeader = [estilos.header, oculto && !abierto ? estilos.oculto : ''].filter(Boolean).join(' ')
  const clasesNav = [estilos.nav, abierto ? estilos.navAbierto : ''].filter(Boolean).join(' ')

  return (
    <header className={clasesHeader} data-theme="dark">
      <div className={estilos.barra}>
        <a className={estilos.marca} href="#inicio" onClick={cerrar}>
          <Gamepad2 size={26} strokeWidth={1.5} />
          <span>{marca.nombre}</span>
        </a>

        <nav id="menu-principal" className={clasesNav} aria-label="Principal">
          <ul className={estilos.lista}>
            {navegacion.map((item) => (
              <li key={item.id}>
                <a
                  className={`${estilos.enlace} ${activa === item.id ? estilos.activo : ''}`}
                  href={`#${item.id}`}
                  data-texto={item.etiqueta}
                  aria-current={activa === item.id ? 'location' : undefined}
                  onClick={cerrar}
                >
                  {item.etiqueta}
                </a>
              </li>
            ))}
            <li className={estilos.itemMovil}>
              <Boton href="#reserva" variante="acento" onClick={cerrar}>
                Reservar
              </Boton>
            </li>
          </ul>
        </nav>

        <div className={estilos.acciones}>
          <div className={estilos.cta}>
            <Boton href="#reserva" variante="acento">
              Reservar
            </Boton>
          </div>
          <button
            type="button"
            className={estilos.menu}
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={abierto}
            aria-controls="menu-principal"
            onClick={() => setAbierto((previo) => !previo)}
          >
            {abierto ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <div className={estilos.progreso} aria-hidden="true">
        <div className={estilos.relleno} style={{ transform: `scaleX(${progreso})` }} />
      </div>
    </header>
  )
}

export default Header