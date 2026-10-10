import { CalendarDays, MousePointerClick, PackageCheck, Timer, Truck } from 'lucide-react'
import { pasos } from '@data/contenido'
import Seccion from '@components/Seccion'
import Reveal from '@components/Reveal'
import Etiqueta from '@components/Etiqueta'
import Boton from '@components/Boton'

const iconos = {
  seleccion: MousePointerClick,
  calendario: CalendarDays,
  entrega: Truck,
  recojo: PackageCheck,
}

function Proceso() {
  return (
    <Seccion id="proceso" tema="light-alt">
      <div className="grid grid-cols-1 gap-(--space-xl) min-[961px]:grid-cols-12 min-[961px]:gap-(--gap)">
        <div className="flex flex-col items-start gap-(--space-m) min-[961px]:sticky min-[961px]:top-[calc(var(--nav-height)+var(--space-m))] min-[961px]:col-span-4 min-[961px]:self-start">
          <Reveal>
            <Etiqueta>Proceso</Etiqueta>
          </Reveal>
          <Reveal as="h2" retraso={100} className="heading-m">
            Cuatro pasos y la consola ya está en tu sala.
          </Reveal>
          <Reveal as="p" retraso={200} className="body-l max-w-[36ch] text-(--text-muted)">
            Sin ir a ningún local, sin cargar cajas y sin configurar nada. Nosotros nos encargamos de la parte difícil.
          </Reveal>
          <Reveal retraso={300} className="flex items-center gap-(--space-s) text-(--text-muted)">
            <Timer size={18} strokeWidth={1.5} />
            <span className="text-[length:var(--fs-body-s)]">Entrega en 35 a 70 minutos</span>
          </Reveal>
          <Reveal retraso={400}>
            <Boton href="#reserva">Empezar mi reserva</Boton>
          </Reveal>
        </div>

        <ol className="flex flex-col border-t border-(--border) min-[961px]:col-span-7 min-[961px]:col-start-6">
          {pasos.map((paso, indice) => {
            const Icono = iconos[paso.icono]
            return (
              <Reveal
                key={paso.id}
                as="li"
                retraso={indice * 80}
                className="grid grid-cols-[auto_1fr] gap-x-(--gap-l) gap-y-(--space-s) border-b border-(--border) py-(--space-l)"
              >
                <span className="heading-l w-[2ch] text-(--text-muted)">{String(indice + 1).padStart(2, '0')}</span>
                <div className="flex flex-col items-start gap-(--space-s)">
                  <div className="flex items-center gap-(--space-s)">
                    <Icono size={22} strokeWidth={1.25} />
                    <h3 className="heading-s">{paso.titulo}</h3>
                  </div>
                  <p className="max-w-[48ch] text-(--text-muted)">{paso.texto}</p>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </Seccion>
  )
}

export default Proceso