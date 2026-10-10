import { useState } from 'react'
import { PackageCheck, Route, Timer } from 'lucide-react'
import { metricasCobertura, zonas } from '@data/contenido'
import Seccion from '@components/Seccion'
import Reveal from '@components/Reveal'
import Etiqueta from '@components/Etiqueta'
import Dashboard from '@components/Dashboard'
import MetricCard from '@components/MetricCard'

const iconos = {
  tiempo: Timer,
  distritos: Route,
  alquileres: PackageCheck,
}

function Cobertura() {
  const [zonaId, setZonaId] = useState(zonas[0].id)
  const zona = zonas.find((item) => item.id === zonaId)

  return (
    <Seccion id="cobertura" tema="light">
      <div className="flex flex-col gap-(--space-xl)">
        <div className="flex flex-col items-start gap-(--space-m) min-[961px]:max-w-[62%]">
          <Reveal>
            <Etiqueta>Cobertura</Etiqueta>
          </Reveal>
          <Reveal as="h2" retraso={100} className="heading-m">
            Llegamos a las zonas donde más se juega en Lima.
          </Reveal>
        </div>

        <Reveal>
          <Dashboard
            titulo="El servicio en cifras"
            descripcion="Datos reales de operación que usamos para prometer tiempos que sí cumplimos."
          >
            {metricasCobertura.map((metrica) => (
              <MetricCard
                key={metrica.id}
                icono={iconos[metrica.icono]}
                etiqueta={metrica.etiqueta}
                valor={metrica.valor}
                unidad={metrica.unidad}
              >
                <p>{metrica.detalle}</p>
              </MetricCard>
            ))}
          </Dashboard>
        </Reveal>

        <div className="grid grid-cols-1 gap-(--gap-l) min-[961px]:grid-cols-12 min-[961px]:gap-(--gap)">
          <Reveal as="ul" className="border-t border-(--border) min-[961px]:col-span-5">
            {zonas.map((item) => (
              <li key={item.id} className="border-b border-(--border)">
                <button
                  type="button"
                  aria-pressed={item.id === zonaId}
                  onClick={() => setZonaId(item.id)}
                  onMouseEnter={() => setZonaId(item.id)}
                  className={`flex w-full cursor-pointer items-center justify-between gap-(--space-s) bg-transparent py-(--space-s) text-left transition-opacity duration-300 ${
                    item.id === zonaId ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <span className="heading-xs">{item.nombre}</span>
                  <span className="flex items-center gap-(--space-s) text-(--text-muted)">
                    <span className="text-[length:var(--fs-body-xs)]">{item.envio}</span>
                    <span className="text-[length:var(--fs-body-s)]">{item.tiempo} min</span>
                  </span>
                </button>
              </li>
            ))}
          </Reveal>

          <Reveal className="min-[961px]:col-span-6 min-[961px]:col-start-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[4px] border border-(--border) bg-(--bg-alt) bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:12.5%_16.66%]">
              <div className="absolute inset-y-0 left-0 flex w-[16%] items-center justify-center border-r border-(--border) bg-(--tag-bg)">
                <span className="text-[length:var(--fs-tag)] font-semibold tracking-[0.2em] text-(--text-muted) uppercase [writing-mode:vertical-rl]">
                  Océano Pacífico
                </span>
              </div>

              {zonas.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={item.nombre}
                  onClick={() => setZonaId(item.id)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full p-2"
                  style={{ left: `${item.x}%`, top: `${item.y}%` }}
                >
                  <span
                    className={`block rounded-full border border-(--text) transition-all duration-300 ${
                      item.id === zonaId
                        ? 'size-4 scale-125 bg-(--color-accent)'
                        : 'size-2.5 bg-(--bg)'
                    }`}
                  />
                </button>
              ))}

              <div className="absolute right-(--space-s) bottom-(--space-s) left-[calc(16%+var(--space-s))] flex items-center justify-between gap-(--space-s) rounded-[4px] border border-(--border) bg-(--bg) p-(--space-s)">
                <div className="flex flex-col">
                  <span className="text-[length:var(--fs-tag)] font-semibold tracking-[0.06em] text-(--text-muted) uppercase">
                    Zona seleccionada
                  </span>
                  <strong className="subheading">{zona.nombre}</strong>
                </div>
                <div className="flex flex-col items-end">
                  <strong className="subheading">{zona.tiempo} min</strong>
                  <span className="text-[length:var(--fs-body-xs)] text-(--text-muted)">Envío: {zona.envio}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Seccion>
  )
}

export default Cobertura