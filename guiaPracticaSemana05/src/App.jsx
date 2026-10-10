import Header from '@components/Header';
import Hero from '@components/Hero';
import Catalogo from '@components/Catalogo';
import Juegos from '@components/Juegos';
import Proceso from '@components/Proceso';
import Planes from '@components/Planes';
import Cobertura from '@components/Cobertura';
import Preguntas from '@components/Preguntas';
import Reserva from '@components/Reserva';
import Footer from '@components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Catalogo />
        <Juegos />
        <Proceso />
        <Planes />
        <Cobertura />
        <Preguntas />
        <Reserva />
      </main>
      <Footer />
    </>
  );
}

export default App;
