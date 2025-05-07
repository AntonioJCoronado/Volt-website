// Definir tipos para TypeScript
/**
 * @typedef {Object} Subcategory
 * @property {string} id - ID de la subcategoría
 * @property {string} name - Nombre de la subcategoría
 */

/**
 * @typedef {Object} Category
 * @property {string} id - ID de la categoría
 * @property {string} name - Nombre de la categoría
 * @property {Subcategory[]} subcategories - Lista de subcategorías
 */

/**
 * @typedef {Object} Product
 * @property {string} id - ID del producto
 * @property {string} name - Nombre del producto
 * @property {string} description - Descripción corta
 * @property {string} detailedDescription - Descripción detallada
 * @property {string} price - Precio formateado
 * @property {string} image - URL de la imagen principal
 * @property {string[]} gallery - URLs de las imágenes de la galería
 * @property {string} category - ID de la categoría
 * @property {string} subcategory - ID de la subcategoría
 */

// Estructura de categorías y subcategorías
/** @type {Category[]} */
export const categories = [
  {
    id: "volt",
    name: "Volt",
    subcategories: [
      { id: "auriculares_volt", name: "Auriculares Volt" },
      { id: "cables_volt", name: "Cables Volt" },
    ],
  },
  {
    id: "audio",
    name: "Audio",
    subcategories: [
      { id: "auriculares", name: "Auriculares" },
      { id: "parlantes", name: "Parlantes" },
      { id: "microfonos", name: "Micrófonos" },
    ],
  },
  {
    id: "dispositivo_inteligente",
    name: "Dispositivos Inteligentes",
    subcategories: [{ id: "smartwatch", name: "Smartwatch" }],
  },
  {
    id: "accesorios",
    name: "Accesorios",
    subcategories: [
      { id: "teclados", name: "Teclados" },
      { id: "mousepad", name: "Mousepad" },
      { id: "lamparas", name: "Lamparas" },
      { id: "soportes", name: "Soportes" },
    ],
  },
];

// Datos de productos
/** @type {Product[]} */
export const products = [
  {
    id: "VOLT-AU1",
    name: "Auriculares ER-19",
    description: "Conector de audio de 3,5 mm, manos libres, con microfono",
    detailedDescription:
      "Auriculares marca Volt, modelo ER-19 con microfono integrado. 5 horas de bateria",
    price: "$0.43 USD X 400 UNIDADES",
    image: "/images/productos/volt/auriculares/er19/er19.webp",
    gallery: [
      "/images/productos/volt/auriculares/er19/er19.webp",
      "/images/productos/volt/auriculares/er19/er19_01.webp",
    ],
    category: "volt",
    subcategory: "auriculares_volt",
  },
  {
    id: "VOLT-AU2",
    name: "Auriculares ER-22",
    description: "Conector de audio de 3,5 mm, manos libres, con microfono",
    detailedDescription:
      "Auriculares marca Volt, modelo ER-19 con microfono integrado.",
    price: "$0.60 USD X 400 UNIDADES",
    image: "/images/productos/volt/auriculares/er22/er22.webp",
    gallery: [
      "/images/productos/volt/auriculares/er22/er22.webp",
      "/images/productos/volt/auriculares/er22/er22_01.webp",
    ],
    category: "volt",
    subcategory: "auriculares_volt",
  },
  {
    id: "VOLT-CL1",
    name: "Cable 5A IPHONE",
    description: "Carga rapida con conexión Lightning para iPhone",
    detailedDescription:
      "Cable marca Volt con conexión lightning para iPhone está diseñada para ofrecer carga rapida a los dispositivos de la marca iPhone.",
    price: "$0.37 USD X 350 UNIDADES",
    image: "/images/productos/volt/cables/lightning/caja_5a.webp",
    gallery: [
      "/images/productos/volt/cables/lightning/caja_5a.webp",
    ],
    category: "volt",
    subcategory: "cables_volt",
  },
  {
    id: "VOLT-CV1",
    name: "Cable 5A V8",
    description: "Carga rapida con conexión Micro V8 para celulares",
    detailedDescription:
      "Cable marca Volt con conexión micro v8 ofrece carga rapida a todos sus dispositivos compatibles.",
    price: "$0.29 USD X 350 UNIDADES",
    image: "/images/productos/volt/cables/microv8/caja_5a.webp",
    gallery: [
      "/images/productos/volt/cables/microv8/caja_5a.webp",
    ],
    category: "volt",
    subcategory: "cables_volt",
  },
  {
    id: "VOLT-CTC1",
    name: "Cable 5A TIPO C",
    description: "Carga rapida con conexión Tipo C para celulares",
    detailedDescription:
      "Cable marca Volt con conexión tipo c ofrece carga rapida a todos sus dispositivos compatibles.",
    price: "$0.31 USD X 350 UNIDADES",
    image: "/images/productos/volt/cables/tipoc/caja_5a.webp",
    gallery: ["/images/productos/volt/cables/tipoc/caja_5a.webp"],
    category: "volt",
    subcategory: "cables_volt",
  },
  {
    id: "VOLT-CTC2",
    name: "Cable 5A Bolsa TIPO C",
    description: "Carga rapida con conexión Tipo C para celulares",
    detailedDescription:
      "Cable marca Volt con conexión tipo c ofrece carga rapida a todos sus dispositivos compatibles.",
    price: "$0.53 USD X 350 UNIDADES",
    image: "/images/productos/volt/cables/tipoc/bolsa_5a.webp",
    gallery: [
      "/images/productos/volt/cables/tipoc/bolsa_5a.webp",
      "/images/productos/volt/cables/tipoc/bolsa_5a_01.webp",
    ],
    category: "volt",
    subcategory: "cables_volt",
  },
  {
    id: "VOLT-CV2",
    name: "Cable 5A Bolsa V8",
    description: "Cable de carga rapida con conexión Micro V8 para celulares",
    detailedDescription:
      "Cable marca Volt con conexión micro v8 ofrece carga rapida a todos sus dispositivos compatibles.",
    price: "$0.51 USD X 350 UNIDADES",
    image: "/images/productos/volt/cables/microv8/bolsa_5a.webp",
    gallery: [
      "/images/productos/volt/cables/microv8/bolsa_5a.webp",
      "/images/productos/volt/cables/microv8/bolsa_5a_01.webp",
    ],
    category: "volt",
    subcategory: "",
  },
  {
    id: "VOLT-CTC3",
    name: "Cable 5.1A ENROLLADO TIPO C",
    description: "Cable enrollado con conexión Tipo C para celulares",
    detailedDescription:
      "Cable marca Volt con conexión tipo c ofrece carga rapida a todos sus dispositivos compatibles, cable enrollado.",
    price: "$0.55 USD X 350 UNIDADES",
    image:
      "/images/productos/volt/cables/tipoc/enrollado_5.1a.webp",
    gallery: [
      "/images/productos/volt/cables/tipoc/enrollado_5.1a.webp",
    ],
    category: "volt",
    subcategory: "cables_volt",
  },
  {
    id: "VOLT-CV3",
    name: "Cable 5.1A ENROLLADO V8",
    description: "Cable enrollado con conexión Micro V8 para celulares",
    detailedDescription:
      "Cable marca Volt con conexión micro v8 ofrece carga rapida a todos sus dispositivos compatibles, cable enrollado.",
    price: "$0.50 USD X 350 UNIDADES",
    image:
      "/images/productos/volt/cables/microv8/enrollado_5.1a.webp",
    gallery: [
      "/images/productos/volt/cables/microv8/enrollado_5.1a.webp",
    ],
    category: "volt",
    subcategory: "cables_volt",
  },
  {
    id: "VOLT-CTC4",
    name: "Cable 5A MALLADO TIPO C",
    description: "Cable mallado con conexión Tipo C para celulares",
    detailedDescription:
      "Cable marca Volt con conexión tipo c ofrece carga rapida a todos sus dispositivos compatibles, el cable esta mallado para garantizar más resistencia.",
    price: "$0.43 USD X 420 UNIDADES",
    image: "/images/productos/volt/cables/tipoc/mallado_5a.webp",
    gallery: [
      "/images/productos/volt/cables/tipoc/mallado_5a.webp",
      "/images/productos/volt/cables/tipoc/mallado_5a_01.webp",
    ],
    category: "volt",
    subcategory: "cables_volt",
  },
  {
    id: "VOLT-CV4",
    name: "Cable 5.1A de carga y datos V8",
    description: "Cable de carga y datos con conexión Micro V8 para celulares",
    detailedDescription:
      "Cable marca Volt con conexión micro v8 ofrece carga rapida a todos sus dispositivos compatibles, cable de carga y datos.",
    price: "$0.44 USD X 350 UNIDADES",
    image:
      "/images/productos/volt/cables/microv8/cargadatos_5.1a.webp",
    gallery: [
      "/images/productos/volt/cables/microv8/cargadatos_5.1a.webp",
    ],
    category: "volt",
    subcategory: "cables_volt",
  },
  {
    id: "VOLT-CTC5",
    name: "Cable 5.1A de carga y datos TIPO C",
    description: "Cable de carga y datos con conexión Tipo C para celulares",
    detailedDescription:
      "Cable marca Volt con conexión tipo c ofrece carga rapida a todos sus dispositivos compatibles, cable de carga y datos.",
    price: "$0.51 USD X 350 UNIDADES",
    image:
      "/images/productos/volt/cables/tipoc/cargadatos_5.1a.webp",
    gallery: [
      "/images/productos/volt/cables/tipoc/cargadatos_5.1a.webp",
    ],
    category: "volt",
    subcategory: "cables_volt",
  },
  {
    id: "AUD-H1",
    name: "Auriculares Inalambricos P9",
    description: "Cancelación de ruido, incluye micrófono integrado",
    detailedDescription:
      "Auriculares P9 con cancelación activa de ruido te permiten sumergirte completamente en tu música. Con hasta 10 horas de batería, son buenos para viajes largos. Resistentes al agua. Incluye micrófono integrado",
    price: "$4.00 USD X 80 UNIDADES",
    image: "/images/productos/audio/auriculares/p9/p9.webp",
    gallery: ["/images/productos/audio/auriculares/p9/p9.webp"],
    category: "audio",
    subcategory: "auriculares",
  },
  {
    id: "AUD-H2",
    name: "Auriculares Inalambricos P47",
    description:
      "Bluetooth 5.0, resistente al agua, 15h batería, incluye micrófono integrado",
    detailedDescription:
      "Auriculares P47 con cancelación activa de ruido. Con hasta 15 horas de batería. Resistentes al agua. Incluye micrófono integrado para llamadas manos libres.",
    price: "$2.37 USD X 100 UNIDADES",
    image: "/images/productos/audio/auriculares/p47/p47.webp",
    gallery: ["/images/productos/audio/auriculares/p47/p47.webp"],
    category: "audio",
    subcategory: "auriculares",
  },
  {
    id: "AUD-H3",
    name: "Auriculares Inalambricos A6S",
    description: "Bluetooth 5.0, resistente al agua, 2h batería continua",
    detailedDescription:
      "Los auriculares inalámbricos A6s son la elección ideal para quienes buscan libertad de movimiento. Con su tecnología Bluetooth 5.0,estos auriculares funcionan con una amplia variedad de dispositivos. Con una duración máxima de batería de 2 horas y un estuche de carga, siempre estarás listo para seguir disfrutando. Además, son resistentes al agua y al polvo. No te pierdas la oportunidad de sumergirte en el mundo digital con estos auriculares que combinan funcionalidad y elegancia.",
    price: "$2.90 USD X 100 UNIDADES",
    image: "/images/productos/audio/auriculares/a6s/a6s.webp",
    gallery: [
      "images/productos/audio/auriculares/a6s/a6s.webp",
      "/images/productos/audio/auriculares/a6s/a6s_01.webp",
    ],
    category: "audio",
    subcategory: "auriculares",
  },
  {
    id: "AUD-H4",
    name: "Auriculares Inalambricos E6S",
    description: "Bluetooth 5.0, resistente al agua, 2h batería continua",
    detailedDescription:
      "Los auriculares inalámbricos E6s son la elección ideal para quienes buscan libertad de movimiento. Con su tecnología Bluetooth 5.0,estos auriculares funcionan con una amplia variedad de dispositivos. Con una duración máxima de batería de 3 horas y un estuche de carga, siempre estarás listo para seguir disfrutando. Además, son resistentes al agua y al polvo. No te pierdas la oportunidad de sumergirte en el mundo digital con estos auriculares que combinan funcionalidad y elegancia.",
    price: "$3.14 USD X 100 UNIDADES",
    image: "/images/productos/audio/auriculares/e6s/e6s.webp",
    gallery: [
      "/images/productos/audio/auriculares/e6s/e6s.webp",
      "/images/productos/audio/auriculares/e6s/e6s_01.webp",
      "/images/productos/audio/auriculares/e6s/e6s_02.webp",
    ],
    category: "audio",
    subcategory: "auriculares",
  },
  {
    id: "AUD-H5",
    name: "Auriculares Inalambricos F9",
    description:
      "Con luz led, bluetooth 5.0, resistente al agua, 2h batería continua",
    detailedDescription:
      "Escuchar tu música favorita con estos auriculares in-ear inalámbricos F9. Su diseño te brinda comodidad y un ajuste seguro, mientras que la tecnología Bluetooth 5.0 te permite conectarlos fácilmente a tus dispositivos sin enredos de cables. Con el micrófono incorporado, podrás realizar llamadas con claridad y utilizar el modo manos libres para mayor comodidad en tus actividades diarias. Además, estos auriculares son resistentes al agua, lo que te permite usarlos en cualquier situación, incluso en días lluviosos.",
    price: "$3.49 USD X 100 UNIDADES",
    image: "/images/productos/audio/auriculares/f9/f9.webp",
    gallery: [
      "/images/productos/audio/auriculares/f9/f9.webp",
      "/images/productos/audio/auriculares/f9/f9_01.webp",
      "/images/productos/audio/auriculares/f9/f9_02.webp",
    ],
    category: "audio",
    subcategory: "auriculares",
  },
  {
    id: "AUD-H6",
    name: "Auriculares Inalambricos M10",
    description:
      "Bluetooth 5.0, resistente al agua, 2h batería continua, luz led integrado",
    detailedDescription:
      "Escuchar tu música favorita con estos auriculares in-ear inalámbricos M10. Su diseño te brinda comodidad y un ajuste seguro, mientras que la tecnología Bluetooth 5.0 te permite conectarlos fácilmente a tus dispositivos sin enredos de cables. Con el micrófono incorporado, podrás realizar llamadas con claridad y utilizar el modo manos libres para mayor comodidad en tus actividades diarias. Además, estos auriculares son resistentes al agua, lo que te permite usarlos en cualquier situación, incluso en días lluviosos.",
    price: "$3.49 USD X 100 UNIDADES",
    image: "/images/productos/audio/auriculares/m10/m10.webp",
    gallery: ["/images/productos/audio/auriculares/m10/m10.webp"],
    category: "audio",
    subcategory: "auriculares",
  },
  {
    id: "AUD-H7",
    name: "Auriculares Inalambricos Airpods PRO3",
    description: "Bluetooth 5.0, resistente al agua, 2h batería continua",
    detailedDescription:
      "Escuchar tu música favorita con estos auriculares in-ear inalámbricos Airpods PRO3. Su diseño te brinda comodidad y un ajuste seguro, mientras que la tecnología Bluetooth 5.0 te permite conectarlos fácilmente a tus dispositivos sin enredos de cables. Con el micrófono incorporado, podrás realizar llamadas con claridad y utilizar el modo manos libres para mayor comodidad en tus actividades diarias.",
    price: "$2.80 USD X 100 UNIDADES",
    image: "/images/productos/audio/auriculares/pro3/pro3.webp",
    gallery: [
      "/images/productos/audio/auriculares/pro3/pro3.webp",
    ],
    category: "audio",
    subcategory: "auriculares",
  },
  {
    id: "DIS-I1",
    name: "Smartwatch M7",
    description: "Ideal para hacer deporte.",
    detailedDescription:
      "El Smartwatch M7 incluye cargador magnético con extremo usb macho, podes conectarlo a cualquier cargador de celular tradicional que tengas en casa. Además, cuenta con una APP gratuita displonible para descargar a su dispositivo android o iOS para aprovechar al 100% su reloj.",
    price: "$2.07 USD",
    image:
      "/images/productos/dispositivo/inteligente/smartwatch/m7/m7.webp",
    gallery: [
      "/images/productos/dispositivo/inteligente/smartwatch/m7/m7.webp",
      "/images/productos/dispositivo/inteligente/smartwatch/m7/m7_01.webp",
    ],
    category: "dispositivo_inteligente",
    subcategory: "smartwatch",
  },
  {
    id: "DIS-I2",
    name: "Smartwatch D20",
    description: "Ideal para hacer deporte.",
    detailedDescription:
      "Este elegante reloj inteligente no solo marca la hora, sino que transforma tu rutina diaria en una experiencia futurista. Ideal para hacer deportes, perfecto para tu vida activa.",
    price: "$2.30 USD",
    image:
      "/images/productos/dispositivo/inteligente/smartwatch/d20/d20.webp",
    gallery: [
      "/images/productos/dispositivo/inteligente/smartwatch/d20/d20.webp",
    ],
    category: "dispositivo_inteligente",
    subcategory: "smartwatch",
  },
  {
    id: "MIC-1",
    name: "Micrófono WS-858",
    description: "Recomendado para karaoke.",
    detailedDescription:
      "Este micrófono inalámbrico de alta calidad ofrece conectividad bluetooth y una variedad de funciones. Cuenta con un botón ON/OFF para controlar el encendido, la detención o el play de la música, así como para aumentar o disminuir el volumen. También permite eliminar la voz de la canción que se esté reproduciendo.",
    price: "$2.63 USD",
    image: "/images/productos/audio/microfonos/ws858/ws858.webp",
    gallery: [
      "/images/productos/audio/microfonos/ws858/ws858.webp",
    ],
    category: "audio",
    subcategory: "microfonos",
  },
  {
    id: "PARL-1",
    name: "Parlante M400",
    description: "Parlante inalambrico con luz.",
    detailedDescription:
      "Empareja fácilmente tu dispositivo mediante Bluetooth para una experiencia inalámbrica. Disfruta de la libertad de movimiento sin cables molestos.",
    price: "$2.77 USD",
    image: "/images/productos/audio/parlantes/m400/m400.webp",
    gallery: [
      "/images/productos/audio/parlantes/m400/m400.webp",
      "/images/productos/audio/parlantes/m400/m400_01.webp",
    ],
    category: "audio",
    subcategory: "parlantes",
  },
  {
    id: "PARL-2",
    name: "Parlante BX39 MINI",
    description: "Parlante inalambrico con luz",
    detailedDescription:
      "Parlante BX-39 Mini, viene con cargador tipo c. Empareja fácilmente tu dispositivo mediante Bluetooth para una experiencia inalámbrica. Disfruta de la libertad de movimiento sin cables molestos.",
    price: "$4.53 USD",
    image:
      "/images/productos/audio/parlantes/bx39mini/bx39mini.webp",
    gallery: [
      "/images/productos/audio/parlantes/bx39mini/bx39mini.webp",
      "/images/productos/audio/parlantes/bx39mini/bx39mini_01.webp",
    ],
    category: "audio",
    subcategory: "parlantes",
  },
  {
    id: "PARL-3",
    name: "Parlante Splash Proof",
    description:
      "¡Sumergete en el ritmo! Con nuestro parlante para ducha con Bluetooth.",
    detailedDescription:
      " Diseñado para resistir salpicaduras y ambientes húmedos, este parlante te permite disfrutar de tu música favorita mientras te duchas. Empareja fácilmente tu dispositivo mediante Bluetooth para una experiencia inalámbrica. Disfruta de la libertad de movimiento sin cables molestos.",
    price: "$2.59 USD",
    image:
      "/images/productos/audio/parlantes/splashproof/splashproof.webp",
    gallery: [
      "/images/productos/audio/parlantes/splashproof/splashproof.webp",
      "/images/productos/audio/parlantes/splashproof/splashproof_01.webp",
    ],
    category: "audio",
    subcategory: "parlantes",
  },
  {
    id: "SOP-M1",
    name: "Soporte Moto WaterProof",
    description: "Funda y soporte de celular para bici y moto",
    detailedDescription:
      "Soporte con funda diseñado aprueba de agua, protege tu celular de lluvias suaves o intensas, no filtra agua y no deja pasar la humedad.",
    price: "$1.89 USD X 100 UNIDADES",
    image:
      "/images/productos/accesorios/soporte/moto/waterproof/waterproof.webp",
    gallery: [
      "/images/productos/accesorios/soporte/moto/waterproof/waterproof.webp",
      "/images/productos/accesorios/soporte/moto/waterproof/waterproof_01.webp",
    ],
    category: "accesorios",
    subcategory: "soportes",
  },
  {
    id: "SOP-A1",
    name: "Soporte para Auto Mount",
    description: "Soporte de celular para auto",
    detailedDescription:
      "Un accesorio esencial para aquellos que buscan comodidad y seguridad al usar su dispositivo móvil en el coche.",
    price: "$1.10 USD X 100 UNIDADES",
    image:
      "/images/productos/accesorios/soporte/auto/mount/mount.webp",
    gallery: [
      "/images/productos/accesorios/soporte/auto/mount/mount.webp",
      "/images/productos/accesorios/soporte/auto/mount/mount_01.webp",
      "/images/productos/accesorios/soporte/auto/mount/mount_02.webp",
    ],
    category: "accesorios",
    subcategory: "soportes",
  },
  {
    id: "SOP-A2",
    name: "Soporte Mobile Holder",
    description: "Soporte de celular para auto",
    detailedDescription:
      "Un accesorio esencial para aquellos que buscan comodidad y seguridad al usar su dispositivo móvil en el coche.",
    price: "$2.32 USD X 100 UNIDADES",
    image:
      "/images/productos/accesorios/soporte/auto/mobileholder/mobileholder.webp",
    gallery: [
      "/images/productos/accesorios/soporte/auto/mobileholder/mobileholder.webp",
      "/images/productos/accesorios/soporte/auto/mobileholder/mobileholder_01.webp",
      "/images/productos/accesorios/soporte/auto/mobileholder/mobileholder_02.webp",
    ],
    category: "accesorios",
    subcategory: "soportes",
  },
  {
    id: "SOP-A3",
    name: "Soporte Celular Auto Under",
    description: "Soporte de celular para auto",
    detailedDescription:
      "Un accesorio esencial para aquellos que buscan comodidad y seguridad al usar su dispositivo móvil en el coche.",
    price: "$1.20 USD X 100 UNIDADES",
    image:
      "/images/productos/accesorios/soporte/auto/under/under.webp",
    gallery: [
      "/images/productos/accesorios/soporte/auto/under/under.webp",
      "/images/productos/accesorios/soporte/auto/under/under_01.webp",
      "/images/productos/accesorios/soporte/auto/under/under_02.webp",
      "/images/productos/accesorios/soporte/auto/under/under_03.webp",
    ],
    category: "accesorios",
    subcategory: "soportes",
  },
  {
    id: "SOP-A4",
    name: "Soporte Celular Universal Holder",
    description: "Soporte de celular para auto tipo universal",
    detailedDescription:
      "Un accesorio esencial para aquellos que buscan comodidad y seguridad al usar su dispositivo móvil en el coche.",
    price: "$0.66 USD X 100 UNIDADES",
    image:
      "/images/productos/accesorios/soporte/auto/universalholder/universalholder.webp",
    gallery: [
      "/images/productos/accesorios/soporte/auto/universalholder/universalholder.webp",
    ],
    category: "accesorios",
    subcategory: "soportes",
  },
  {
    id: "TECL-I1",
    name: "Teclado Inalambrico i8",
    description: "Teclado con conexión Bluetooth",
    detailedDescription:
      "Este teclado inalambrico modelo i8 es el mejor complemento para hacer todo tipo de actividades. Es cómodo y práctico al momento de redactar documentos, navegar y hacer búsquedas por internet, ya sea en tu trabajo o en la comodidad del hogar.",
    price: "$2.25 USD",
    image: "/images/productos/accesorios/teclado/i8/i8.webp",
    gallery: [
      "/images/productos/accesorios/teclado/i8/i8_01.webp",
    ],
    category: "accesorios",
    subcategory: "teclados",
  },
  {
    id: "M-PAD1",
    name: "Mousepad de gel",
    description: "Mouse Pad Ergonomico Con Gel Varios Colores",
    detailedDescription:
      "Experimentá la comodidad definitiva con nuestros mousepads ergonómicos con apoyamuñecas. Diseñados para proteger tus muñecas durante largas sesiones de trabajo, estudio o gaming, combinan funcionalidad, estilo y salud en un solo accesorio.",
    price: "$1.15 USD",
    image: "/images/productos/accesorios/mousepad/gel/gel.webp",
    gallery: [
      "/images/productos/accesorios/mousepad/gel/gel.webp",
      "/images/productos/accesorios/mousepad/gel/gel_01.webp",
    ],
    category: "accesorios",
    subcategory: "mousepad",
  },
  {
    id: "LAMP-1",
    name: "Lampara Estrella",
    description:
      "Crea un ambiente relajante en tu dormitorio o cualquier otra habitación de tu hogar",
    detailedDescription:
      "Esta excelente luz de noche es un dispositivo innovador que te permitirá transformar cualquier habitación en un mágico cielo estrellado. Crea una atmósfera relajante y encantadora con esta lámpara proyectora de estrellas, ideal para momentos de relajación, eventos especiales o para ayudar a los niños a conciliar el sueño.",
    price: "$4.81 USD",
    image:
      "/images/productos/accesorios/lampara/starlight/starlight.webp",
    gallery: [
      "/images/productos/accesorios/lampara/starlight/starlight.webp",
      "/images/productos/accesorios/lampara/starlight/starlight_01.webp",
      "/images/productos/accesorios/lampara/starlight/starlight_02.webp",
    ],
    category: "accesorios",
    subcategory: "lamparas",
  },
];
