import { Truck } from 'lucide-react'
import { hero } from '@data/contenido'
import Reveal from '@components/Reveal'
import Etiqueta from '@components/Etiqueta'
import Boton from '@components/Boton'
import estilos from '@styles/Hero.module.css'

function Hero() {
  return (
    <section id="inicio" className={estilos.hero} data-theme="dark">
      <video
        className={estilos.video}
        src={hero.video}
        poster={hero.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Lorem ipsum dolor sit amet"
      />
      <div className={estilos.velo} />

      <div className={estilos.contenido}>
        <Reveal>
          <Etiqueta icono={Truck}>{hero.etiqueta}</Etiqueta>
        </Reveal>
        <Reveal as="h1" retraso={120} className={estilos.titular}>
          {hero.titular}
        </Reveal>
        <Reveal as="p" retraso={240} className={estilos.subtitulo}>
          {hero.subtitulo}
        </Reveal>
        <Reveal retraso={360} className={estilos.acciones}>
          <Boton href="#catalogo">Ver consolas</Boton>
          <Boton href="#reserva" variante="contorno">
            Reservar ahora
          </Boton>
        </Reveal>
      </div>

      <ul className={estilos.datos}>
        {hero.datos.map((dato) => (
          <li key={dato.valor} className={estilos.dato}>
            <strong>{dato.valor}</strong>
            <span>{dato.texto}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Hero