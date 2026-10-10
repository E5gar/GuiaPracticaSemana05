const foto = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70`;

export const marca = {
  nombre: 'Lobby',
  telefono: '+51 900 123 456',
  whatsapp: 'https://wa.me/51900123456',
  correo: 'hola@lobbyjuegos.pe',
  horario: 'Todos los días, de 9:00 a 23:00',
  direccion: 'Perú',
};

export const navegacion = [
  { id: 'catalogo', etiqueta: 'Consolas' },
  { id: 'juegos', etiqueta: 'Juegos' },
  { id: 'proceso', etiqueta: 'Proceso' },
  { id: 'planes', etiqueta: 'Planes' },
  { id: 'cobertura', etiqueta: 'Cobertura' },
  { id: 'preguntas', etiqueta: 'Preguntas' },
];

export const idsSecciones = [...navegacion.map((item) => item.id), 'reserva'];

export const hero = {
  etiqueta: 'Alquiler con entrega a domicilio',
  titular: 'La consola llega. El resto es jugar.',
  subtitulo:
    'Alquila PlayStation, Xbox, Nintendo y más por noche, fin de semana o mes. Te la llevamos, la instalamos en tu TV y la recogemos cuando termines.',
  video: 'https://videos.pexels.com/video-files/7915639/7915639-hd_1920_1080_25fps.mp4',
  poster: foto('photo-1511512578047-dfb367046420'),
  datos: [
    { valor: 'S/ 28', texto: 'Desde, por noche' },
    { valor: '2 mandos', texto: 'Incluidos en cada equipo' },
    { valor: '15+ títulos', texto: 'Instalados y listos para jugar' },
  ],
};

export const incluyeCatalogo = [
  { icono: 'mandos', texto: 'Mandos cargados y probados' },
  { icono: 'cables', texto: 'Cables HDMI y de poder incluidos' },
  { icono: 'limpieza', texto: 'Desinfección entre cada alquiler' },
  { icono: 'revision', texto: 'Revisión técnica antes de salir' },
];

export const consolas = [
  {
    id: 'ps5',
    nombre: 'PlayStation 5',
    fabricante: 'Sony',
    plataforma: 'playstation',
    imagen: foto('photo-1606144042614-b2417e99c4e3'),
    resumen: 'La opción para estrenos en 4K con tiempos de carga casi inexistentes.',
    especificaciones: ['SSD de 825 GB', 'Hasta 4K a 120 Hz', 'Dos mandos DualSense'],
    tarifa: 45,
    disponibles: 6,
  },
  {
    id: 'xbox-x',
    nombre: 'Xbox Series X',
    fabricante: 'Microsoft',
    plataforma: 'xbox',
    imagen: foto('photo-1621259182978-fbf93132d53d'),
    resumen: 'Potencia de sobra para carreras y shooters a máxima fluidez.',
    especificaciones: ['SSD de 1 TB', 'Hasta 4K a 120 Hz', 'Dos mandos inalámbricos'],
    tarifa: 40,
    disponibles: 5,
  },
  {
    id: 'switch',
    nombre: 'Nintendo Switch OLED',
    fabricante: 'Nintendo',
    plataforma: 'nintendo',
    imagen: foto('photo-1578303512597-81e6cc155b3e'),
    resumen: 'Para jugar en el sofá o en la cama, solo o con toda la familia.',
    especificaciones: ['Pantalla OLED de 7 pulgadas', 'Modo TV y portátil', 'Dos Joy-Con y base'],
    tarifa: 30,
    disponibles: 8,
  },
  {
    id: 'xbox-s',
    nombre: 'Xbox Series S',
    fabricante: 'Microsoft',
    plataforma: 'xbox',
    imagen: foto('photo-1612287230202-1ff1d85d1bdf'),
    resumen: 'Compacta, silenciosa y rápida para conectar en cualquier TV.',
    especificaciones: ['SSD de 512 GB', 'Hasta 1440p a 120 Hz', 'Dos mandos inalámbricos'],
    tarifa: 30,
    disponibles: 4,
  },
  {
    id: 'ps4',
    nombre: 'PlayStation 4 Pro',
    fabricante: 'Sony',
    plataforma: 'playstation',
    imagen: foto('photo-1486401899868-0e435ed85128'),
    resumen: 'Una biblioteca enorme a la tarifa más baja del catálogo.',
    especificaciones: ['Disco de 1 TB', 'Juegos en 4K escalado', 'Dos mandos DualShock 4'],
    tarifa: 28,
    disponibles: 3,
  },
  {
    id: 'quest',
    nombre: 'Meta Quest 3',
    fabricante: 'Meta',
    plataforma: 'realidad-virtual',
    imagen: foto('photo-1622979135225-d2ba269cf1ac'),
    resumen: 'Realidad virtual y mixta sin cables, con espacio de juego a tu medida.',
    especificaciones: [
      'Sin cables ni sensores externos',
      '128 GB de almacenamiento',
      'Dos controles y correa',
    ],
    tarifa: 50,
    disponibles: 2,
  },
];

export const plataformas = [
  { id: 'todos', nombre: 'Todos', imagen: foto('photo-1511512578047-dfb367046420') },
  { id: 'playstation', nombre: 'PlayStation', imagen: foto('photo-1493711662062-fa541adb3fc8') },
  { id: 'xbox', nombre: 'Xbox', imagen: foto('photo-1542751371-adc38448a05e') },
  { id: 'nintendo', nombre: 'Nintendo', imagen: foto('photo-1550745165-9bc0b252726f') },
];

export const juegos = [
  {
    id: 'gow',
    titulo: 'God of War Ragnarök',
    plataforma: 'playstation',
    genero: 'Acción y aventura',
    jugadores: '1',
    nota: 'Una travesía nórdica de combate pesado y una historia de padre e hijo.',
  },
  {
    id: 'spiderman',
    titulo: "Marvel's Spider-Man 2",
    plataforma: 'playstation',
    genero: 'Mundo abierto',
    jugadores: '1',
    nota: 'Nueva York a toda velocidad, con dos héroes y mucho columpio.',
  },
  {
    id: 'gt7',
    titulo: 'Gran Turismo 7',
    plataforma: 'playstation',
    genero: 'Carreras',
    jugadores: '1-2',
    nota: 'Simulación de autos con pantalla dividida para duelos en casa.',
  },
  {
    id: 'astro',
    titulo: 'Astro Bot',
    plataforma: 'playstation',
    genero: 'Plataformas',
    jugadores: '1',
    nota: 'Plataformas coloridas que aprovechan cada función del DualSense.',
  },
  {
    id: 'ittakestwo',
    titulo: 'It Takes Two',
    plataforma: 'playstation',
    genero: 'Cooperativo',
    jugadores: '2',
    nota: 'Diseñado para dos: ideal para pareja, hermanos o amigos.',
  },
  {
    id: 'forza',
    titulo: 'Forza Horizon 5',
    plataforma: 'xbox',
    genero: 'Carreras',
    jugadores: '1 + online',
    nota: 'Un México abierto para correr, explorar y coleccionar autos.',
  },
  {
    id: 'halo',
    titulo: 'Halo Infinite',
    plataforma: 'xbox',
    genero: 'Shooter',
    jugadores: '1 + online',
    nota: 'Campaña de mundo abierto y multijugador competitivo.',
  },
  {
    id: 'gears',
    titulo: 'Gears 5',
    plataforma: 'xbox',
    genero: 'Acción cooperativa',
    jugadores: '1-3',
    nota: 'Cobertura, escopetas y una campaña pensada para jugar acompañado.',
  },
  {
    id: 'cuphead',
    titulo: 'Cuphead',
    plataforma: 'xbox',
    genero: 'Plataformas',
    jugadores: '1-2',
    nota: 'Dibujo animado de los años treinta con jefes que no perdonan.',
  },
  {
    id: 'sot',
    titulo: 'Sea of Thieves',
    plataforma: 'xbox',
    genero: 'Aventura',
    jugadores: '1-4',
    nota: 'Una tripulación, un barco y un mar lleno de tesoros por encontrar.',
  },
  {
    id: 'mk8',
    titulo: 'Mario Kart 8 Deluxe',
    plataforma: 'nintendo',
    genero: 'Carreras',
    jugadores: '1-4',
    nota: 'El clásico para reunir a toda la sala alrededor de una pantalla.',
  },
  {
    id: 'smash',
    titulo: 'Super Smash Bros. Ultimate',
    plataforma: 'nintendo',
    genero: 'Lucha',
    jugadores: '1-8',
    nota: 'Un plantel gigante de personajes para torneos entre amigos.',
  },
  {
    id: 'zelda',
    titulo: 'Zelda: Tears of the Kingdom',
    plataforma: 'nintendo',
    genero: 'Aventura',
    jugadores: '1',
    nota: 'Hyrule, el cielo y el subsuelo para explorar sin prisa.',
  },
  {
    id: 'overcooked',
    titulo: 'Overcooked! 2',
    plataforma: 'nintendo',
    genero: 'Cooperativo',
    jugadores: '1-4',
    nota: 'Cocinas caóticas donde la comunicación lo es todo.',
  },
  {
    id: 'party',
    titulo: 'Mario Party Superstars',
    plataforma: 'nintendo',
    genero: 'Fiesta',
    jugadores: '1-4',
    nota: 'Minijuegos rápidos para cualquier reunión y cualquier edad.',
  },
];

export const pasos = [
  {
    id: 'elige',
    icono: 'seleccion',
    titulo: 'Elige tu equipo',
    texto:
      'Escoge la consola y los juegos que quieres desde el catálogo. Si dudas, te recomendamos según cuántos van a jugar.',
  },
  {
    id: 'agenda',
    icono: 'calendario',
    titulo: 'Agenda la entrega',
    texto:
      'Indica distrito, dirección y la franja horaria que te acomode. Confirmamos por WhatsApp en minutos.',
  },
  {
    id: 'recibe',
    icono: 'entrega',
    titulo: 'Recibe e instala',
    texto:
      'El repartidor llega con la consola desinfectada, la conecta a tu TV y deja todo probado antes de irse.',
  },
  {
    id: 'devuelve',
    icono: 'recojo',
    titulo: 'Juega y nosotros recogemos',
    texto:
      'Al terminar el plazo pasamos a recogerla. Sin filas, sin traslados y sin llevar nada a ningún local.',
  },
];

export const planes = [
  {
    id: 'noche',
    nombre: 'Noche',
    duracion: '1 noche',
    descuento: 'Base',
    ejemplo: 'S/ 45',
    destacado: false,
    incluye: [
      'Tarifa de catálogo',
      '1 juego instalado',
      'Entrega y recojo sin costo en zona gratuita',
    ],
  },
  {
    id: 'fin-de-semana',
    nombre: 'Fin de semana',
    duracion: '3 noches',
    descuento: '-15%',
    ejemplo: 'S/ 115',
    destacado: false,
    incluye: [
      '3 juegos instalados',
      'Un cambio de juego sin costo',
      'Entrega el viernes, recojo el lunes',
    ],
  },
  {
    id: 'semana',
    nombre: 'Semana',
    duracion: '7 noches',
    descuento: '-30%',
    ejemplo: 'S/ 221',
    destacado: true,
    incluye: ['5 juegos instalados', 'Cambios de juego ilimitados', 'Mando extra sin costo'],
  },
  {
    id: 'mes',
    nombre: 'Mes',
    duracion: '30 noches',
    descuento: '-55%',
    ejemplo: 'S/ 608',
    destacado: false,
    incluye: [
      'Hasta 10 juegos instalados',
      'Revisión técnica a mitad de mes',
      'Soporte prioritario por WhatsApp',
    ],
  },
];

export const metricasCobertura = [
  {
    id: 'tiempo',
    icono: 'tiempo',
    etiqueta: 'Entrega',
    valor: '58',
    unidad: 'min',
    detalle: 'Tiempo promedio desde que confirmas hasta que el equipo está conectado en tu TV.',
  },
  {
    id: 'distritos',
    icono: 'distritos',
    etiqueta: 'Zonas',
    valor: '10',
    unidad: 'distritos',
    detalle: 'Cobertura completa.',
  },
  {
    id: 'alquileres',
    icono: 'alquileres',
    etiqueta: 'Historial',
    valor: '2 340',
    unidad: 'alquileres',
    detalle: 'Pedidos entregados y recogidos sin incidencias desde nuestra apertura.',
  },
];

export const zonas = [
  { id: 'san-isidro', nombre: 'San Isidro', x: 46, y: 46, tiempo: 35, envio: 'Gratis' },
  { id: 'jesus-maria', nombre: 'Jesús María', x: 38, y: 30, tiempo: 40, envio: 'Gratis' },
  { id: 'miraflores', nombre: 'Miraflores', x: 42, y: 62, tiempo: 40, envio: 'Gratis' },
  { id: 'san-borja', nombre: 'San Borja', x: 62, y: 52, tiempo: 45, envio: 'Gratis' },
  { id: 'magdalena', nombre: 'Magdalena', x: 30, y: 42, tiempo: 45, envio: 'Gratis' },
  { id: 'barranco', nombre: 'Barranco', x: 40, y: 78, tiempo: 50, envio: 'S/ 5' },
  { id: 'pueblo-libre', nombre: 'Pueblo Libre', x: 28, y: 24, tiempo: 50, envio: 'S/ 5' },
  { id: 'surco', nombre: 'Santiago de Surco', x: 64, y: 70, tiempo: 55, envio: 'S/ 5' },
  { id: 'lince', nombre: 'Lince', x: 38, y: 40, tiempo: 40, envio: 'Gratis' },
  { id: 'la-molina', nombre: 'La Molina', x: 84, y: 58, tiempo: 70, envio: 'S/ 10' },
];

export const preguntas = [
  {
    id: 'requisitos',
    pregunta: '¿Qué necesito para alquilar?',
    respuesta:
      'Tu DNI vigente, una dirección de entrega y una garantía reembolsable que se devuelve al recoger el equipo en buen estado.',
  },
  {
    id: 'tiempo',
    pregunta: '¿Cuánto demora la entrega?',
    respuesta:
      'En las zonas centrales, entre 35 y 70 minutos desde la confirmación. También puedes programar una fecha y una franja horaria con anticipación.',
  },
  {
    id: 'danos',
    pregunta: '¿Qué pasa si algo se daña?',
    respuesta:
      'El desgaste normal por uso no tiene costo. Si hay golpes, líquidos o piezas faltantes, el arreglo se descuenta de la garantía y te mostramos el detalle.',
  },
  {
    id: 'cambios',
    pregunta: '¿Puedo cambiar de juego durante el alquiler?',
    respuesta:
      'Sí. El plan Fin de semana incluye un cambio y el plan Semana tiene cambios ilimitados. Te enviamos el juego nuevo en el siguiente reparto del día.',
  },
  {
    id: 'cuenta',
    pregunta: '¿Necesito internet o una cuenta propia?',
    respuesta:
      'Los juegos llegan instalados y se pueden jugar sin cuenta propia. Para el modo en línea sí necesitas tu conexión y tu suscripción.',
  },
  {
    id: 'limpieza',
    pregunta: '¿Cómo higienizan los equipos?',
    respuesta:
      'Después de cada alquiler desinfectamos consola y mandos, renovamos fundas y entregamos cables sellados. Todo se revisa antes de salir.',
  },
];
