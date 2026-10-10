import { useState } from 'react'
import { MessageCircle, Minus, Plus } from 'lucide-react'
import { marca, preguntas } from '@data/contenido'
import Seccion from '@components/Seccion'
import Reveal from '@components/Reveal'
import Etiqueta from '@components/Etiqueta'
import Boton from '@components/Boton'

function Preguntas() {
  const [abierta, setAbierta] = useState(preguntas[0].id)

  return (
    <Seccion id="preguntas" tema="dark">
      <div className="grid grid-cols-1 gap-(--space-xl) min-[961px]:grid-cols-12 min-[961px]:gap-(--gap)">
        <div className="flex flex-col items-start gap-(--space-m) min-[961px]:sticky min-[961px]:top-[calc(var(--nav-height)+var(--space-m))] min-[961px]:col-span-4 min-[961px]:self-start">
          <Reveal>
            <Etiqueta>Preguntas</Etiqueta>
          </Reveal>
          <Reveal as="h2" retraso={100} className="heading-m">
            Lo que casi todos preguntan antes de reservar.
          </Reveal>
          <Reveal as="p" retraso={200} className="max-w-[34ch] text-(--text-muted)">
            Si la tuya no está aquí, escríbenos y respondemos en minutos.
          </Reveal>
          <Reveal retraso={300}>
            <Boton href={marca.whatsapp} externo icono={MessageCircle} variante="contorno">
              Escribir por WhatsApp
            </Boton>
          </Reveal>
        </div>

        <Reveal as="ul" className="border-t border-(--border) min-[961px]:col-span-7 min-[961px]:col-start-6">
          {preguntas.map((item) => {
            const activa = abierta === item.id
            return (
              <li key={item.id} className="border-b border-(--border)">
                <button
                  type="button"
                  id={`pregunta-${item.id}`}
                  aria-expanded={activa}
                  aria-controls={`respuesta-${item.id}`}
                  onClick={() => setAbierta(activa ? '' : item.id)}
                  className="flex w-full cursor-pointer items-center justify-between gap-(--gap-l) bg-transparent py-(--space-m) text-left transition-opacity duration-300 hover:opacity-60"
                >
                  <span className="heading-xs">{item.pregunta}</span>
                  {activa ? <Minus size={22} strokeWidth={1.25} /> : <Plus size={22} strokeWidth={1.25} />}
                </button>
                <div
                  id={`respuesta-${item.id}`}
                  role="region"
                  aria-labelledby={`pregunta-${item.id}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    activa ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[58ch] pb-(--space-m) text-(--text-muted)">{item.respuesta}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </Reveal>
      </div>
    </Seccion>
  )
}

export default Preguntas