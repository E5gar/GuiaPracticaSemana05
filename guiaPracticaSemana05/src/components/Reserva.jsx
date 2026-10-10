import { useState } from 'react'
import PropTypes from 'prop-types'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { consolas, marca, planes, zonas } from '@data/contenido'
import Seccion from '@components/Seccion'
import Reveal from '@components/Reveal'
import Etiqueta from '@components/Etiqueta'
import Boton from '@components/Boton'
import estilos from '@styles/Reserva.module.css'

const inicial = {
  nombre: '',
  telefono: '',
  distrito: zonas[0].nombre,
  consola: consolas[0].id,
  plan: planes[1].id,
  fecha: '',
  direccion: '',
  notas: '',
}

function Campo({ id, etiqueta, completo = false, children }) {
  return (
    <div className={`${estilos.campo} ${completo ? estilos.completo : ''}`}>
      <label className={estilos.etiquetaCampo} htmlFor={id}>
        {etiqueta}
      </label>
      {children}
    </div>
  )
}

Campo.propTypes = {
  id: PropTypes.string.isRequired,
  etiqueta: PropTypes.string.isRequired,
  completo: PropTypes.bool,
  children: PropTypes.node,
}

function Reserva() {
  const [datos, setDatos] = useState(inicial)
  const [codigo, setCodigo] = useState('')

  const cambiar = (evento) => {
    const { name, value } = evento.target
    setDatos((previo) => ({ ...previo, [name]: value }))
  }

  const enviar = (evento) => {
    evento.preventDefault()
    setCodigo(`LB-${Math.floor(1000 + Math.random() * 9000)}`)
  }

  const reiniciar = () => {
    setDatos(inicial)
    setCodigo('')
  }

  const consola = consolas.find((item) => item.id === datos.consola)
  const plan = planes.find((item) => item.id === datos.plan)
  const fechaTexto = datos.fecha
    ? new Date(`${datos.fecha}T00:00:00`).toLocaleDateString('es-PE', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
      })
    : 'Por definir'

  return (
    <Seccion id="reserva" tema="light">
      <div className={estilos.rejilla}>
        <div className={estilos.intro}>
          <Reveal>
            <Etiqueta>Reserva</Etiqueta>
          </Reveal>
          <Reveal as="h2" retraso={100} className="heading-m">
            Cuéntanos cuándo y dónde. Nosotros llevamos el juego.
          </Reveal>
          <Reveal as="p" retraso={200} className={estilos.texto}>
            Confirmamos tu pedido por WhatsApp en menos de 15 minutos, dentro del horario de atención.
          </Reveal>
          <Reveal as="ul" retraso={300} className={estilos.contactos}>
            <li>
              <Phone size={18} strokeWidth={1.5} />
              <span>{marca.telefono}</span>
            </li>
            <li>
              <Mail size={18} strokeWidth={1.5} />
              <span>{marca.correo}</span>
            </li>
            <li>
              <Clock size={18} strokeWidth={1.5} />
              <span>{marca.horario}</span>
            </li>
            <li>
              <MapPin size={18} strokeWidth={1.5} />
              <span>{marca.direccion}</span>
            </li>
          </Reveal>
        </div>

        {codigo ? (
          <Reveal retraso={100} className={estilos.confirmacion}>
            <Etiqueta acento>Reserva recibida</Etiqueta>
            <p className={estilos.codigo}>{codigo}</p>
            <p className={estilos.texto}>
              Gracias, {datos.nombre}. Te escribiremos al {datos.telefono} para confirmar la entrega.
            </p>
            <dl className={estilos.resumen}>
              <div>
                <dt>Consola</dt>
                <dd>{consola.nombre}</dd>
              </div>
              <div>
                <dt>Plan</dt>
                <dd>
                  {plan.nombre} · {plan.duracion}
                </dd>
              </div>
              <div>
                <dt>Entrega</dt>
                <dd>{fechaTexto}</dd>
              </div>
              <div>
                <dt>Zona</dt>
                <dd>{datos.distrito}</dd>
              </div>
            </dl>
            <div>
              <Boton variante="contorno" onClick={reiniciar}>
                Hacer otra reserva
              </Boton>
            </div>
          </Reveal>
        ) : (
          <Reveal as="form" retraso={100} className={estilos.formulario} onSubmit={enviar}>
            <Campo id="nombre" etiqueta="Nombre completo">
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                autoComplete="name"
                className={estilos.control}
                value={datos.nombre}
                onChange={cambiar}
              />
            </Campo>
            <Campo id="telefono" etiqueta="Celular">
              <input
                id="telefono"
                name="telefono"
                type="tel"
                required
                autoComplete="tel"
                className={estilos.control}
                value={datos.telefono}
                onChange={cambiar}
              />
            </Campo>
            <Campo id="consola" etiqueta="Consola">
              <select id="consola" name="consola" className={estilos.control} value={datos.consola} onChange={cambiar}>
                {consolas.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.nombre}
                  </option>
                ))}
              </select>
            </Campo>
            <Campo id="plan" etiqueta="Plan">
              <select id="plan" name="plan" className={estilos.control} value={datos.plan} onChange={cambiar}>
                {planes.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.nombre} · {item.duracion}
                  </option>
                ))}
              </select>
            </Campo>
            <Campo id="distrito" etiqueta="Distrito">
              <select
                id="distrito"
                name="distrito"
                className={estilos.control}
                value={datos.distrito}
                onChange={cambiar}
              >
                {zonas.map((item) => (
                  <option key={item.id} value={item.nombre}>
                    {item.nombre}
                  </option>
                ))}
              </select>
            </Campo>
            <Campo id="fecha" etiqueta="Fecha de entrega">
              <input
                id="fecha"
                name="fecha"
                type="date"
                required
                className={estilos.control}
                value={datos.fecha}
                onChange={cambiar}
              />
            </Campo>
            <Campo id="direccion" etiqueta="Dirección" completo>
              <input
                id="direccion"
                name="direccion"
                type="text"
                required
                autoComplete="street-address"
                className={estilos.control}
                value={datos.direccion}
                onChange={cambiar}
              />
            </Campo>
            <Campo id="notas" etiqueta="Notas para el repartidor" completo>
              <textarea
                id="notas"
                name="notas"
                rows="2"
                className={estilos.control}
                value={datos.notas}
                onChange={cambiar}
              />
            </Campo>
            <div className={estilos.acciones}>
              <p className={estilos.aviso}>La garantía reembolsable se coordina por WhatsApp.</p>
              <Boton tipo="submit" variante="acento">
                Enviar reserva
              </Boton>
            </div>
          </Reveal>
        )}
      </div>
    </Seccion>
  )
}

export default Reserva