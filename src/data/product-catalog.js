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
 * @property {string} price - Precio por bulto actual
 * @property {string} minimumPrice - Precio mínimo garantizado (100k)
 * @property {string} image - URL de la imagen principal
 * @property {string[]} gallery - URLs de las imágenes de la galería
 * @property {string} category - ID de la categoría
 * @property {string} subcategory - ID de la subcategoría
 */

// Estructura de categorías y subcategorías
/** @type {Category[]} */
export const categories = [
  {
    id: "liquidacion",
    name: "Liquidación",
    subcategories: [],
  },
  {
    id: "combo",
    name: "Combos",
    subcategories: [],
  },
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
      { id: "mouse", name: "Mouse" },
      { id: "lamparas", name: "Lamparas" },
      { id: "soportes", name: "Soportes" },
    ],
  },
];

// Datos de productos
/** @type {Product[]} */
export const products = [
  {
    id: "liquidacion-1001",
    name: "CONSOLA RETRO",
    description: "Consola Retro con Controles Inalámbricos 2.4G. Revive la nostalgia de los videojuegos clásicos con esta mini consola plug & play que convierte cualquier TV en un centro de entretenimiento retro.",
    detailedDescription:
      "Empareja fácilmente tu dispositivo mediante Bluetooth para una experiencia inalámbrica. Incluye control inalámbrico 2.4G (estilo PS2).",
    price: "",
    minimumPrice: "$27900 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/liquidacion/liquidacion-1001.webp",
    gallery: [
      "/images/productos/liquidacion/liquidacion-1001.webp",
    ],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-1002",
    name: "Cargador Tipo C 30W",
    description: "Optimiza la carga de tus dispositivos con este cargador tipo C de 30 watts",
    detailedDescription:
      "Diseñado para ofrecer una potencia óptima y segura. Ideal para smartphones, tablets y otros dispositivos compatibles con USB Tipo C, garantiza una carga rápida que te permite estar siempre conectado sin largas esperas.",
    price: "",
    minimumPrice: "$5100 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/liquidacion/liquidacion-1002.webp",
    gallery: [
      "/images/productos/liquidacion/liquidacion-1002.webp",
    ],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-1003",
    name: "CARGADOR 2.6A V8 IBEK",
    description: "Cargador de Viaje IBEK IB-2603",
    detailedDescription:
      "El cargador IBEK modelo IB-2603 es la solución ideal para mantener tus dispositivos cargados de forma rápida y segura. Diseñado para un rendimiento eficiente, este cargador incluye un cable Micro USB de 1 metro de longitud, lo que te brinda comodidad y libertad de movimiento mientras cargas tu dispositivo.",
    price: "",
    minimumPrice: "$2000 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/liquidacion/liquidacion-1003.webp",
    gallery: [
      "/images/productos/liquidacion/liquidacion-1003.webp",
    ],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-1004",
    name: "AURICULAR MANOS LIBRES X83",
    description: "AURICULAR MANOS LIBRES X83",
    detailedDescription:
      "Disfrutá de una experiencia auditiva clara y cómoda con el Auricular Manos Libres X83. Ideal para quienes buscan practicidad y buen sonido en un solo accesorio.",
    price: "",
    minimumPrice: "$1100 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/liquidacion/liquidacion-1004.webp",
    gallery: [
      "/images/productos/liquidacion/liquidacion-1004.webp",
    ],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-1005",
    name: "Cables Auxiliares de Audio ORYX",
    description: " Cables Auxiliares de Audio 3.5 mm Alta Fidelidad y Estilo",
    detailedDescription:
      "Conecta tu música donde quieras con estos prácticos y coloridos cables de audio auxiliar de 3.5 mm. Compatibles con celulares, bocinas, laptops, autos y más. ¡Llévalos siempre contigo y dale estilo a tu conexión! 🔥",
    price: "",
    minimumPrice: "$800 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/liquidacion/liquidacion-1005.webp",
    gallery: [
      "/images/productos/liquidacion/liquidacion-1005.webp",
    ],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-1006",
    name: "CARGADOR 3.8 V8 IBEK",
    description: "CARGADOR 3.8 V8 IBEK",
    detailedDescription:
      "Este cargador ofrece una potencia constante y segura de 3.8V, ideal para una variedad de aparatos electrónicos. Su diseño compacto facilita su transporte y uso en cualquier lugar, desde el hogar hasta la oficina.",
    price: "",
    minimumPrice: "$2300 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/liquidacion/liquidacion-1006.webp",
    gallery: [
      "/images/productos/liquidacion/liquidacion-1006.webp",
    ],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-1007",
    name: "CARGADOR 2.1 BOLSA TIPO C AITECH",
    description: "Cargador AITECH Fast Charge 2.1A con Cable Tipo CK",
    detailedDescription:
      "Potente y compacto, ideal para una carga rápida y segura de tus dispositivos. Este cargador AITECH cuenta con tecnología de carga rápida 2.1A, perfecto para celulares, tablets y otros dispositivos compatibles con conector Tipo C.",
    price: "",
    minimumPrice: "$1900 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/liquidacion/liquidacion-1007.webp",
    gallery: [
      "/images/productos/liquidacion/liquidacion-1007.webp",
    ],
    category: "liquidacion",
    subcategory: "",
  },
  // EXCLUSIVO liquidacion WHATSAPP lo de arriba
  {
    id: "1002",
    name: "Auriculares Inalambricos P47",
    description:
      "Bluetooth 5.0, resistente al agua, 15h batería, incluye micrófono integrado",
    detailedDescription:
      "Auriculares P47 con cancelación activa de ruido. Con hasta 15 horas de batería. Resistentes al agua. Incluye micrófono integrado para llamadas manos libres.",
    price: "$2.25 USD X 100 UNIDADES",
    minimumPrice: "$3400 ARS (MINIMO $100K)",
    image: "/images/productos/audio/auriculares/p47/p47.webp",
    gallery: ["/images/productos/audio/auriculares/p47/p47.webp"],
    category: "audio",
    subcategory: "auriculares",
  },
  {
    id: "1003",
    name: "Auriculares Inalambricos A6S",
    description: "Bluetooth 5.0, resistente al agua, 2h batería continua",
    detailedDescription:
      "Los auriculares inalámbricos A6s son la elección ideal para quienes buscan libertad de movimiento. Con su tecnología Bluetooth 5.0,estos auriculares funcionan con una amplia variedad de dispositivos. Con una duración máxima de batería de 2 horas y un estuche de carga, siempre estarás listo para seguir disfrutando. Además, son resistentes al agua y al polvo. No te pierdas la oportunidad de sumergirte en el mundo digital con estos auriculares que combinan funcionalidad y elegancia.",
    price: "$3.00 USD X 100 UNIDADES",
    minimumPrice: "$4800 ARS (MINIMO $100K)",
    image: "/images/productos/audio/auriculares/a6s/a6s.webp",
    gallery: [
      "/images/productos/audio/auriculares/a6s/a6s.webp",
      "/images/productos/audio/auriculares/a6s/a6s_01.webp",
    ],
    category: "audio",
    subcategory: "auriculares",
  },
  {
    id: "1004",
    name: "Auriculares Inalambricos F9",
    description:
      "Con luz led, bluetooth 5.0, resistente al agua, 2h batería continua",
    detailedDescription:
      "Escuchar tu música favorita con estos auriculares in-ear inalámbricos F9. Su diseño te brinda comodidad y un ajuste seguro, mientras que la tecnología Bluetooth 5.0 te permite conectarlos fácilmente a tus dispositivos sin enredos de cables. Con el micrófono incorporado, podrás realizar llamadas con claridad y utilizar el modo manos libres para mayor comodidad en tus actividades diarias. Además, estos auriculares son resistentes al agua, lo que te permite usarlos en cualquier situación, incluso en días lluviosos.",
    price: "$3.50 USD X 100 UNIDADES",
    minimumPrice: "$5400 ARS (MINIMO $100K)",
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
    id: "1005",
    name: "Auriculares Inalambricos M10",
    description:
      "Bluetooth 5.0, resistente al agua, 2h batería continua, luz led integrado",
    detailedDescription:
      "Escuchar tu música favorita con estos auriculares in-ear inalámbricos M10. Su diseño te brinda comodidad y un ajuste seguro, mientras que la tecnología Bluetooth 5.0 te permite conectarlos fácilmente a tus dispositivos sin enredos de cables. Con el micrófono incorporado, podrás realizar llamadas con claridad y utilizar el modo manos libres para mayor comodidad en tus actividades diarias. Además, estos auriculares son resistentes al agua, lo que te permite usarlos en cualquier situación, incluso en días lluviosos.",
    price: "$3.93 USD X 100 UNIDADES",
    minimumPrice: "7100 ARS (MINIMO $100K)",
    image: "/images/productos/audio/auriculares/m10/m10.webp",
    gallery: ["/images/productos/audio/auriculares/m10/m10.webp"],
    category: "audio",
    subcategory: "auriculares",
  },
  {
    id: "1006",
    name: "Auriculares Inalambricos Airpods Colores PRO3",
    description: "Bluetooth 5.0, resistente al agua, 2h batería continua",
    detailedDescription:
      "Escuchar tu música favorita con estos auriculares in-ear inalámbricos Airpods Colores PRO3. Su diseño te brinda comodidad y un ajuste seguro, mientras que la tecnología Bluetooth 5.0 te permite conectarlos fácilmente a tus dispositivos sin enredos de cables. Con el micrófono incorporado, podrás realizar llamadas con claridad y utilizar el modo manos libres para mayor comodidad en tus actividades diarias.",
    price: "$3.40 USD X 100 UNIDADES",
    minimumPrice: "$5400 ARS (MINIMO $100K)",
    image: "/images/productos/audio/auriculares/pro3/pro3.webp",
    gallery: ["/images/productos/audio/auriculares/pro3/pro3.webp"],
    category: "audio",
    subcategory: "auriculares",
  },
  {
    id: "1007",
    name: "Auriculares Inalambricos PRO 80",
    description: "Bluetooth 5.0, resistente al agua, 2h batería continua",
    detailedDescription:
      "Escuchar tu música favorita con estos auriculares in-ear inalámbricos PRO 80. Su diseño te brinda comodidad y un ajuste seguro, mientras que la tecnología Bluetooth 5.0 te permite conectarlos fácilmente a tus dispositivos sin enredos de cables. Con el micrófono incorporado, podrás realizar llamadas con claridad y utilizar el modo manos libres para mayor comodidad en tus actividades diarias.",
    price: "$4.50 USD X 100 UNIDADES",
    minimumPrice: "$6900 ARS (MINIMO $100K)",
    image: "/images/productos/audio/auriculares/pro80/pro80.webp",
    gallery: ["/images/productos/audio/auriculares/pro80/pro80.webp"],
    category: "audio",
    subcategory: "auriculares",
  },
  {
    id: "1008",
    name: "Auriculares Inalambricos inpods i12",
    description: "Bluetooth 5.0, resistente al agua, 2h batería continua",
    detailedDescription:
      "Escuchar tu música favorita con estos auriculares in-ear inalámbricos inpods i12. Su diseño te brinda comodidad y un ajuste seguro, mientras que la tecnología Bluetooth 5.0 te permite conectarlos fácilmente a tus dispositivos sin enredos de cables. Con el micrófono incorporado, podrás realizar llamadas con claridad y utilizar el modo manos libres para mayor comodidad en tus actividades diarias.",
    price: "$3.60 USD X 100 UNIDADES",
    minimumPrice: "$5500 ARS (MINIMO $100K)",
    image: "/images/productos/audio/auriculares/i12/i12.webp",
    gallery: ["/images/productos/audio/auriculares/i12/i12.webp"],
    category: "audio",
    subcategory: "auriculares",
  },
  {
    id: "1009",
    name: "Auriculares Inalambricos inpods PG580",
    description: "Bluetooth 5.0, resistente al agua, 2h batería continua",
    detailedDescription:
      "Escuchar tu música favorita con estos auriculares in-ear inalámbricos PG580. Su diseño te brinda comodidad y un ajuste seguro, mientras que la tecnología Bluetooth 5.0 te permite conectarlos fácilmente a tus dispositivos sin enredos de cables. Con el micrófono incorporado, podrás realizar llamadas con claridad y utilizar el modo manos libres para mayor comodidad en tus actividades diarias.",
    price: "$6.90 USD X 80 UNIDADES",
    minimumPrice: "$10400 ARS (MINIMO $100K)",
    image: "/images/productos/audio/auriculares/pg580/pg580.webp",
    gallery: ["/images/productos/audio/auriculares/pg580/pg580.webp"],
    category: "audio",
    subcategory: "auriculares",
  },
  {
    id: "1010",
    name: "Auriculares Inalambricos BASS 900",
    description: "Bluetooth 5.0, resistente al agua, 2h batería continua",
    detailedDescription:
      "Escuchar tu música favorita con estos auriculares in-ear inalámbricos BASS 900. Su diseño te brinda comodidad y un ajuste seguro, mientras que la tecnología Bluetooth 5.0 te permite conectarlos fácilmente a tus dispositivos sin enredos de cables. Con el micrófono incorporado, podrás realizar llamadas con claridad y utilizar el modo manos libres para mayor comodidad en tus actividades diarias.",
    price: "$7.80 USD X 80 UNIDADES",
    minimumPrice: "$12000 ARS (MINIMO $100K)",
    image: "/images/productos/audio/auriculares/bass900/bass900.webp",
    gallery: ["/images/productos/audio/auriculares/bass900/bass900.webp"],
    category: "audio",
    subcategory: "auriculares",
  },
  {
    id: "1011",
    name: "Auriculares S5830",
    description: "Bluetooth 5.0, resistente al agua, 2h batería continua",
    detailedDescription:
      "Escuchar tu música favorita con estos auriculares S5830. Su diseño te brinda comodidad y un ajuste seguro. Con el micrófono incorporado, podrás realizar llamadas con claridad.",
    price: "$0.65 USD X 1000 UNIDADES",
    minimumPrice: "$1000 ARS (MINIMO $100K)",
    image: "/images/productos/audio/auriculares/s5830/s5830.webp",
    gallery: ["/images/productos/audio/auriculares/s5830/s5830.webp"],
    category: "audio",
    subcategory: "auriculares",
  },
  {
    id: "1012",
    name: "Auriculares Inalambricos 5 COLORES",
    description: "Bluetooth 5.0, resistente al agua, 2h batería continua",
    detailedDescription:
      "Escuchar tu música favorita con estos auriculares in-ear inalámbricos 5 COLORES SURTIDOS S. Su diseño te brinda comodidad y un ajuste seguro, mientras que la tecnología Bluetooth 5.0 te permite conectarlos fácilmente a tus dispositivos sin enredos de cables. Con el micrófono incorporado, podrás realizar llamadas con claridad y utilizar el modo manos libres para mayor comodidad en tus actividades diarias.",
    price: "$3.55 USD X 100 UNIDADES",
    minimumPrice: "$8000 ARS (MINIMO $100K)",
    image: "/images/productos/audio/auriculares/5colores/5colores.webp",
    gallery: ["/images/productos/audio/auriculares/5colores/5colores.webp"],
    category: "audio",
    subcategory: "auriculares",
  },
  {
    id: "1013",
    name: "Cable 5A MALLADO TIPO C",
    description: "Cable mallado con conexión Tipo C para celulares",
    detailedDescription:
      "Cable marca Volt con conexión tipo c ofrece carga rapida a todos sus dispositivos compatibles, el cable esta mallado para garantizar más resistencia.",
    price: "$0.45 USD X 500 UNIDADES",
    minimumPrice: "$700 ARS (MINIMO $100K)",
    image: "/images/productos/volt/cables/tipoc/mallado_5a.webp",
    gallery: [
      "/images/productos/volt/cables/tipoc/mallado_5a.webp",
      "/images/productos/volt/cables/tipoc/mallado_5a_01.webp",
    ],
    category: "volt",
    subcategory: "cables_volt",
  },
  {
    id: "1014",
    name: "Cable 5A TIPO C",
    description: "Carga rapida con conexión Tipo C para celulares",
    detailedDescription:
      "Cable marca Volt con conexión tipo c ofrece carga rapida a todos sus dispositivos compatibles.",
    price: "$0.37 USD X 500 UNIDADES",
    minimumPrice: "$550 ARS (MINIMO $100K)",
    image: "/images/productos/volt/cables/tipoc/caja_5a.webp",
    gallery: ["/images/productos/volt/cables/tipoc/caja_5a.webp"],
    category: "volt",
    subcategory: "cables_volt",
  },
  {
    id: "1015",
    name: "Cable 5A Micro V8",
    description: "Carga rapida con conexión Micro V8 para celulares",
    detailedDescription:
      "Cable marca Volt con conexión micro v8 ofrece carga rapida a todos sus dispositivos compatibles.",
    price: "$0.47 USD X 500 UNIDADES",
    minimumPrice: "$900 ARS (MINIMO $100K)",
    image: "/images/productos/volt/cables/microv8/caja_5a.webp",
    gallery: ["/images/productos/volt/cables/microv8/caja_5a.webp"],
    category: "volt",
    subcategory: "cables_volt",
  },
  {
    id: "1016",
    name: "Cable 5A IPHONE",
    description: "Carga rapida con conexión Lightning para iPhone",
    detailedDescription:
      "Cable marca Volt con conexión lightning para iPhone está diseñada para ofrecer carga rapida a los dispositivos de la marca iPhone.",
    price: "$0.56 USD X 500 UNIDADES",
    minimumPrice: "$1000 ARS (MINIMO $100K)",
    image: "/images/productos/volt/cables/lightning/caja_5a.webp",
    gallery: ["/images/productos/volt/cables/lightning/caja_5a.webp"],
    category: "volt",
    subcategory: "cables_volt",
  },
  {
    id: "1017",
    name: "Cable Tipo C A C IPHONE 15",
    description: "Cable C-C para iPhone 15 y superior",
    detailedDescription:
      "Cable para iPhone diseñado para ofrecer carga rapida a los dispositivos de la marca iPhone.",
    price: "$1.04 USD X 500 UNIDADES",
    minimumPrice: "$1900 ARS (MINIMO $100K)",
    image: "/images/productos/volt/cables/tipoc/cc15.webp",
    gallery: ["/images/productos/volt/cables/tipoc/cc15.webp"],
    category: "volt",
    subcategory: "cables_volt",
  },
  {
    id: "1018",
    name: "Cable Tipo C A LIGHTNING IPHONE 12",
    description: "Cable C-Lightning para iPhone",
    detailedDescription:
      "Cable para iPhone diseñado para ofrecer carga rapida a los dispositivos de la marca iPhone.",
    price: "$0.93 USD X 500 UNIDADES",
    minimumPrice: "$1800 ARS (MINIMO $100K)",
    image: "/images/productos/volt/cables/lightning/cl12.webp",
    gallery: ["/images/productos/volt/cables/lightning/cl12.webp"],
    category: "volt",
    subcategory: "cables_volt",
  },
  {
    id: "1019",
    name: "SOPORTE WATERPROOF",
    description: "Funda y soporte de celular para bici o moto",
    detailedDescription:
      "Soporte con funda diseñado aprueba de agua, protege tu celular de lluvias suaves o intensas, no filtra agua y no deja pasar la humedad.",
    price: "$2.33 USD X 100 UNIDADES",
    minimumPrice: "$3800 ARS (MINIMO $100K)",
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
    id: "1020",
    name: "SOPORTE UNDER",
    description: "Soporte de celular para auto modelo under",
    detailedDescription:
      "Un accesorio esencial para aquellos que buscan comodidad y seguridad al usar su dispositivo móvil en el coche.",
    price: "$1.30 USD X 100 UNIDADES",
    minimumPrice: "$1900 ARS (MINIMO $100K)",
    image: "/images/productos/accesorios/soporte/auto/under/under.webp",
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
    id: "1021",
    name: "SOPORTE DS25",
    description: "Soporte de celular para auto modelo DS25",
    detailedDescription:
      "Un accesorio esencial para aquellos que buscan comodidad y seguridad al usar su dispositivo móvil en el coche.",
    price: "$2.90 USD X 100 UNIDADES",
    minimumPrice: "$4400 ARS (MINIMO $100K)",
    image: "/images/productos/accesorios/soporte/auto/ds25/ds25.webp",
    gallery: ["/images/productos/accesorios/soporte/auto/ds25/ds25.webp"],
    category: "accesorios",
    subcategory: "soportes",
  },
  {
    id: "1022",
    name: "SOPORTE D48-1",
    description: "Soporte de celular para auto modelo D48-1",
    detailedDescription:
      "Un accesorio esencial para aquellos que buscan comodidad y seguridad al usar su dispositivo móvil en el coche.",
    price: "$2.88 USD X 100 UNIDADES",
    minimumPrice: "$5100 ARS (MINIMO $100K)",
    image: "/images/productos/accesorios/soporte/auto/d48/d48-1.webp",
    gallery: ["/images/productos/accesorios/soporte/auto/d48/d48-1.webp"],
    category: "accesorios",
    subcategory: "soportes",
  },
  {
    id: "1023",
    name: "SOPORTE D41-1",
    description: "Soporte de celular para auto modelo D41-1",
    detailedDescription:
      "Un accesorio esencial para aquellos que buscan comodidad y seguridad al usar su dispositivo móvil en el coche.",
    price: "$2.97 USD X 100 UNIDADES",
    minimumPrice: "$6000 ARS (MINIMO $100K)",
    image: "/images/productos/accesorios/soporte/auto/d41/d41-1.webp",
    gallery: ["/images/productos/accesorios/soporte/auto/d41/d41-1.webp"],
    category: "accesorios",
    subcategory: "soportes",
  },
  {
    id: "1024",
    name: "SOPORTE ES06",
    description: "Soporte de celular para auto modelo ES06",
    detailedDescription:
      "Un accesorio esencial para aquellos que buscan comodidad y seguridad al usar su dispositivo móvil en el coche.",
    price: "$3.28 USD X 100 UNIDADES",
    minimumPrice: "$5500 ARS (MINIMO $100K)",
    image: "/images/productos/accesorios/soporte/auto/es06/es06.webp",
    gallery: ["/images/productos/accesorios/soporte/auto/es06/es06.webp"],
    category: "accesorios",
    subcategory: "soportes",
  },
  {
    id: "1025",
    name: "SOPORTE A7S",
    description: "Soporte de celular para auto modelo A7S",
    detailedDescription:
      "Un accesorio esencial para aquellos que buscan comodidad y seguridad al usar su dispositivo móvil en el coche.",
    price: "$6.90 USD X 50 UNIDADES",
    minimumPrice: "$10400 ARS (MINIMO $100K)",
    image: "/images/productos/accesorios/soporte/auto/a7s/a7s.webp",
    gallery: ["/images/productos/accesorios/soporte/auto/a7s/a7s.webp"],
    category: "accesorios",
    subcategory: "soportes",
  },
  {
    id: "1026",
    name: "KIT MICROFONO CON LUZ",
    description: "SOPORTE KIT DE MICROFONO CON LUZ",
    detailedDescription:
      "Un accesorio esencial para aquellos que buscan hacer directos o grabaciones.",
    price: "$5.59 USD X 60 UNIDADES",
    minimumPrice: "$12600 ARS (MINIMO $100K)",
    image:
      "/images/productos/accesorios/soporte/kit/microfono-luz/microfono-luz.webp",
    gallery: [
      "/images/productos/accesorios/soporte/kit/microfono-luz/microfono-luz.webp",
      "/images/productos/accesorios/soporte/kit/microfono-luz/microfono-luz_01.webp",
    ],
    category: "accesorios",
    subcategory: "soportes",
  },
  {
    id: "1027",
    name: "MOUSE INALAMBRICO COLORES",
    description: "Mouse con bluetooth",
    detailedDescription: "Un mouse inalambrico para computadoras o portatiles.",
    price: "$2.43 USD X 100 UNIDADES",
    minimumPrice: "$4400 ARS (MINIMO $100K)",
    image:
      "/images/productos/accesorios/mouse/colores-inalambrico/colores-inalambrico.webp",
    gallery: [
      "/images/productos/accesorios/mouse/colores-inalambrico/colores-inalambrico.webp",
    ],
    category: "accesorios",
    subcategory: "mouse",
  },
  {
    id: "1028",
    name: "SOPORTE CARGADOR JOYSTICK PS5",
    description: "Soporte para cargar mandos de PS5",
    detailedDescription:
      "Un accesorio esencial para aquellos que buscan comodidad.",
    price: "$3.20 USD X 200 UNIDADES",
    minimumPrice: "$4800 ARS (MINIMO $100K)",
    image:
      "/images/productos/accesorios/soporte/cargador/ps5/cargador-ps5.webp",
    gallery: [
      "/images/productos/accesorios/soporte/cargador/ps5/cargador-ps5.webp",
    ],
    category: "accesorios",
    subcategory: "soportes",
  },
  {
    id: "1029",
    name: "SOPORTE CARGADOR JOYSTICK PS4",
    description: "Soporte para cargar mandos de PS4",
    detailedDescription:
      "Un accesorio esencial para aquellos que buscan comodidad.",
    price: "$3.00 USD X 60 UNIDADES",
    minimumPrice: "$4500 ARS (MINIMO $100K)",
    image:
      "/images/productos/accesorios/soporte/cargador/ps4/cargador-ps4.webp",
    gallery: [
      "/images/productos/accesorios/soporte/cargador/ps4/cargador-ps4.webp",
      "/images/productos/accesorios/soporte/cargador/ps4/cargador-ps4_01.webp",
    ],
    category: "accesorios",
    subcategory: "soportes",
  },
  {
    id: "1030",
    name: "RECEPTOR BLUETOOTH VOLT",
    description: "Receptor bluetooth",
    detailedDescription:
      "Un accesorio esencial para aquellos que buscan comodidad.",
    price: "$0.92 USD X 500 UNIDADES",
    minimumPrice: "$1700 ARS (MINIMO $100K)",
    image: "/images/productos/volt/cables/receptorbluetooth/receptor-volt.webp",
    gallery: [
      "/images/productos/volt/cables/receptorbluetooth/receptor-volt.webp",
    ],
    category: "volt",
    subcategory: "cables_volt",
  },
  {
    id: "1031",
    name: "RECEPTOR BLUETOOTH IMEG",
    description: "Receptor bluetooth",
    detailedDescription:
      "Un accesorio esencial para aquellos que buscan comodidad.",
    price: "$1.23 USD X 500 UNIDADES",
    minimumPrice: "$2400 ARS (MINIMO $100K)",
    image: "/images/productos/volt/cables/receptorbluetooth/receptor-imeg.webp",
    gallery: [
      "/images/productos/volt/cables/receptorbluetooth/receptor-imeg.webp",
    ],
    category: "volt",
    subcategory: "cables_volt",
  },
  {
    id: "1033",
    name: "SMARTWATCH 3 MALLAS",
    description: "SMARTWATCH CON 3 MALLAS",
    detailedDescription:
      "Un accesorio esencial para aquellos que buscan comodidad.",
    price: "$5.56 USD X 100 UNIDADES",
    minimumPrice: "$19300 ARS (MINIMO $100K)",
    image:
      "/images/productos/dispositivo/inteligente/smartwatch/3mallas/3mallas.webp",
    gallery: [
      "/images/productos/dispositivo/inteligente/smartwatch/3mallas/3mallas.webp",
    ],
    category: "dispositivo_inteligente",
    subcategory: "smartwatch",
  },
  {
    id: "1034",
    name: "PARLANTE K12",
    description: "Parlante inalambrico con luz.",
    detailedDescription:
      "Empareja fácilmente tu dispositivo mediante Bluetooth para una experiencia inalámbrica. Disfruta de la libertad de movimiento sin cables molestos.",
    price: "$4.80 USD X 100 UNIDADES",
    minimumPrice: "$10800 ARS (MINIMO $100K)",
    image: "/images/productos/audio/parlantes/k12/k12.webp",
    gallery: ["/images/productos/audio/parlantes/k12/k12.webp"],
    category: "audio",
    subcategory: "parlantes",
  },
  {
    id: "1035",
    name: "PARLANTE M400",
    description: "Parlante inalambrico con luz.",
    detailedDescription:
      "Empareja fácilmente tu dispositivo mediante Bluetooth para una experiencia inalámbrica. Disfruta de la libertad de movimiento sin cables molestos.",
    price: "$3.10 USD X 100 UNIDADES",
    minimumPrice: "$4800 ARS (MINIMO $100K)",
    image: "/images/productos/audio/parlantes/m400/m400.webp",
    gallery: [
      "/images/productos/audio/parlantes/m400/m400.webp",
      "/images/productos/audio/parlantes/m400/m400_01.webp",
    ],
    category: "audio",
    subcategory: "parlantes",
  },
  {
    id: "1036",
    name: "PARLANTE PORTATIL 3",
    description: "Parlante bluetooth",
    detailedDescription:
      "Empareja fácilmente tu dispositivo mediante Bluetooth para una experiencia inalámbrica. Disfruta de la libertad de movimiento sin cables molestos.",
    price: "$3.25 USD X 80 UNIDADES",
    minimumPrice: "$8000 ARS (MINIMO $100K)",
    image: "/images/productos/audio/parlantes/portatil3/portatil3.webp",
    gallery: [
      "/images/productos/audio/parlantes/portatil3/portatil3.webp",
      "/images/productos/audio/parlantes/portatil3/portatil3_01.webp",
    ],
    category: "audio",
    subcategory: "parlantes",
  },
  {
    id: "1037",
    name: "PARLANTE LAMPARA G",
    description: "Parlante bluetooth",
    detailedDescription:
      "Empareja fácilmente tu dispositivo mediante Bluetooth para una experiencia inalámbrica. Disfruta de la libertad de movimiento sin cables molestos.",
    price: "$5.65 USD X 30 UNIDADES",
    minimumPrice: "$8300 ARS (MINIMO $100K)",
    image: "/images/productos/audio/parlantes/lamparag/lamparag.webp",
    gallery: ["/images/productos/audio/parlantes/lamparag/lamparag.webp"],
    category: "audio",
    subcategory: "parlantes",
  },
  {
    id: "1042",
    name: "Lampara Escritorio LED",
    description:
      "Crea un ambiente relajante en tu dormitorio o cualquier otra habitación de tu hogar",
    detailedDescription:
      "Esta excelente luz de noche ideal para iluminar escritorios.",
    price: "$7.00 USD X 12 UNIDADES",
    minimumPrice: "$11600 ARS (MINIMO $100K)",
    image:
      "/images/productos/accesorios/lampara/escritorio/lampara-escritorio.webp",
    gallery: [
      "/images/productos/accesorios/lampara/escritorio/lampara-escritorio.webp",
    ],
    category: "accesorios",
    subcategory: "lamparas",
  },

  // Combos ORDENADOS DE MENOR A MAYOR PRECIO POR MI

  {
    id: "combo-01",
    name: "COMBO ACCESIBLE",
    description: "¡Un combo diseñado para vos!.",
    detailedDescription:
      "3 CABLE 5A IPHONE VOLT, 3 CABLE 5A V8 VOLT, 3 CABLE 5ATIPO C VOLT, 3 CARGADOR 2.4 BOLSA TIPO C AITECH, 3 CARGADOR BOLSA 2.1A V8 AITECH, 3 AURICULAR MANOS LIBRES X83, 3 AURICULAR TIPO C 15, 3 AURICULAR INALAMBRICO F9 Y 2 CABLE AUXILIAR SOLMA",
    price: "",
    minimumPrice: "$50000 ARS (MINIMO $100K)",
    image: "/images/productos/combo/combo-01.webp",
    gallery: ["/images/productos/combo/combo-01.webp"],
    category: "combo",
    subcategory: "",
  },
  {
    id: "combo-02",
    name: "COMBO AHORRO PANGEA",
    description: "¡Un combo diseñado para vos!.",
    detailedDescription:
      "3 CARGADOR TIPO C 3.8A IBEK, 3 CARGADOR 4.8 V8 LEGATUS, 2 AURICULAR INALAMBRICO F9, 2 AURICULAR LH-P47, 2 AURICULAR INALAMBRICO AIRPODS COLOR Y 4 AURICULAR SAM BOLSA",
    price: "",
    minimumPrice: "$55000 ARS (MINIMO $100K)",
    image: "/images/productos/combo/combo-02.webp",
    gallery: ["/images/productos/combo/combo-02.webp"],
    category: "combo",
    subcategory: "",
  },
  {
    id: "combo-03",
    name: "COMBO PRECIO AMIGO",
    description: "¡Un combo diseñado para vos!.",
    detailedDescription:
      "3 CARGADOR 4.8 V8 LEGATUS, 3 CARGADOR 4.8 TIPO C LEGATUS, 3 CABLE 6A CAJA V8 IBEK, 4 CABLE BOLSA V8 VOLT, 4 CABLE BOLSA TIPO C VOLT, 4 CABEZAL SUELTO IMEGA, 5 AURICULAR ER-19 VOLT, 1 AURICULAR LH-P9 Y 2 AURICULAR TWS 31 APRO",
    price: "",
    minimumPrice: "$59900 ARS (MINIMO $100K)",
    image: "/images/productos/combo/combo-03.webp",
    gallery: ["/images/productos/combo/combo-03.webp"],
    category: "combo",
    subcategory: "",
  },
  {
    id: "combo-04",
    name: "COMBO CABLES INICIAL",
    description: "¡Un combo diseñado para vos!.",
    detailedDescription:
      "10 CABLE VOLT BOLSA V8, 10 CABLE VOLT BOLSA TIPOC, 5 CABLE VOLT 5A V8, 5 CABLE VOLT 5A TIPOC, 5 CABLE VOLT 5A IPH,15 CABLE VOLT MALLADO TIPOC",
    price: "",
    minimumPrice: "$69900 ARS (MINIMO $100K)",
    image: "/images/productos/combo/combo-04.webp",
    gallery: ["/images/productos/combo/combo-04.webp"],
    category: "combo",
    subcategory: "",
  },
  {
    id: "combo-05",
    name: "COMBO GAMER Y OFFICE INICIAL",
    description: "¡Un combo diseñado para vos!.",
    detailedDescription:
      "4 MOUSEPAD, 1 CABLE POWER PARA PC, 3 MOUSE PILA INALAMBRICO, 1 AURICULAR EXTRA BASS 900, 2 MOUSE INALAMBRICO APRO, 2 CABLE HDMI 3M,3 PILA LITHIUM, 3 CABLE AUXILIAR SOLMA, 4 MOUSE INALAMBRICO COLORES",
    price: "",
    minimumPrice: "$79000 ARS (MINIMO $100K)",
    image: "/images/productos/combo/combo-05.webp",
    gallery: ["/images/productos/combo/combo-05.webp"],
    category: "combo",
    subcategory: "",
  },
  {
    id: "combo-06",
    name: "COMBO AURICULARES PREMIUM INTERMEDIO",
    description: "¡Un combo diseñado para vos!.",
    detailedDescription:
      "10 AURICULAR CABLE SAM BOLSA, 15 AURICULAR ER-19 VOLT, 15 AURICULAR MANOS LIBRES X83, 10 AURICULAR TIPO C15, 3 AURICULAR P9, 3 LH-P47",
    price: "",
    minimumPrice: "$79900 ARS (MINIMO $100K)",
    image: "/images/productos/combo/combo-06.webp",
    gallery: ["/images/productos/combo/combo-06.webp"],
    category: "combo",
    subcategory: "",
  },
  {
    id: "combo-07",
    name: "COMBO EMPRENDEDOR INTERMEDIO",
    description: "¡Un combo diseñado para vos!.",
    detailedDescription: "",
    price: "",
    minimumPrice: "$99900 ARS (MINIMO $100K)",
    image: "/images/productos/combo/combo-07.webp",
    gallery: ["/images/productos/combo/combo-07.webp"],
    category: "combo",
    subcategory: "",
  },
  {
    id: "combo-08",
    name: "COMBO KIDS TECH INTERMEDIO",
    description: "¡Un combo diseñado para vos!.",
    detailedDescription:
      "1 MINI IMPRESORAS, 2 CAMARA VIDEO RECARGABLE,1 LAPIZ 3D, 1 CAMARA IMPRESORA",
    price: "",
    minimumPrice: "$109900 ARS (MINIMO $100K)",
    image: "/images/productos/combo/combo-08.webp",
    gallery: ["/images/productos/combo/combo-08.webp"],
    category: "combo",
    subcategory: "",
  },
  {
    id: "combo-09",
    name: "COMBO MEGA LUZ Y SONIDO INTERMEDIO",
    description: "¡Un combo diseñado para vos!.",
    detailedDescription:
      "2 KIT MICROFONO, 4 FOCO GIRATORIOS, 3 LAMPARA PARLANTE, 1 LINTERNA MINERA, 1 CARRUSEL PROYECTOR, 2 LED VIDEO",
    price: "",
    minimumPrice: "$109900 ARS (MINIMO $100K)",
    image: "/images/productos/combo/combo-09.webp",
    gallery: ["/images/productos/combo/combo-09.webp"],
    category: "combo",
    subcategory: "",
  },
  {
    id: "combo-10",
    name: "COMBO SMARTWATCH PLUS INTERMEDIO",
    description: "¡Un combo diseñado para vos!.",
    detailedDescription:
      "2 SMARTWATCH ULTRA TBX-Y66, 1 SMARTWATCH H33 7 EN 1, 1 SMARTWATCH W26 PRO MAX Y 1 SMARTWATCH TW1000",
    price: "",
    minimumPrice: "$139000 ARS (MINIMO $100K)",
    image: "/images/productos/combo/combo-10.webp",
    gallery: ["/images/productos/combo/combo-10.webp"],
    category: "combo",
    subcategory: "",
  },
  {
    id: "combo-11",
    name: "COMBO SUPER GAMES INTERMEDIO",
    description: "¡Un combo diseñado para vos!.",
    detailedDescription:
      "1 CONSOLA RETRO, 2 GAME STICK PRO, 2 CARGADOR JOYSTICK PS4, 2 CARGADOR JOYSTICK PS5 ",
    price: "",
    minimumPrice: "$159000 ARS (MINIMO $100K)",
    image: "/images/productos/combo/combo-11.webp",
    gallery: ["/images/productos/combo/combo-11.webp"],
    category: "combo",
    subcategory: "",
  },
  {
    id: "combo-12",
    name: "COMBO MIX EXPERIMENTADO",
    description: "¡Un combo diseñado para vos!.",
    detailedDescription:
      "3 PLANCHA FLEQUILLERA, 5 DEPILADORA DE CRISTAL UNISEX, 2 DEPILADORA ELECTRICA 4 EN 1, 1 BOTELLA TERMICA PERSONAJES, 2 MASAJEADOR PAPADA, 2 PLANCHA 2EN1, 1 SECADOR 5EN1 MOLDEADOR Y 2 ESPEJO MAQUILLAJE LED ",
    price: "",
    minimumPrice: "$169000 ARS (MINIMO $100K)",
    image: "/images/productos/combo/combo-12.webp",
    gallery: ["/images/productos/combo/combo-12.webp"],
    category: "combo",
    subcategory: "",
  },
  {
    id: "combo-13",
    name: "COMBO TIRA LED EXPERIMENTADO",
    description: "¡Un combo diseñado para vos!.",
    detailedDescription:
      "4 TIRA LED NEON, 3 TIRA LED 5 METROS, 5 TIRA LED 5 METROS C/BLUETOOTH Y 3 TIRA LED 10 METROS C/BLUETOOTH",
    price: "",
    minimumPrice: "$190000 ARS (MINIMO $100K)",
    image: "/images/productos/combo/combo-13.webp",
    gallery: ["/images/productos/combo/combo-13.webp"],
    category: "combo",
    subcategory: "",
  },
  {
    id: "combo-14",
    name: "COMBO AURICULARES EXPERIMENTADO",
    description: "¡Un combo diseñado para vos!.",
    detailedDescription:
      "5 AURICULAR P9, 5 AURICULAR INALÁMBRICO M90, 1 AURICULAR T-12, 2 AURICULAR EXTRA BASS 900, 3 AURICULAR PRO80, 2 AURICULAR TWS 31 APRO, 3 AURICULAR INALAMBRICO AIRPODS, 3 AURICULAR LH-P47 Y 2 M10 AURICULARES INALAMBRICOS",
    price: "",
    minimumPrice: "$199900 ARS (MINIMO $100K)",
    image: "/images/productos/combo/combo-14.webp",
    gallery: ["/images/productos/combo/combo-14.webp"],
    category: "combo",
    subcategory: "",
  },
  {
    id: "combo-15",
    name: "COMBO PARLANTES PRO",
    description: "¡Un combo diseñado para vos!.",
    detailedDescription:
      "3 PARLANTES A360 PRO, 3 PARLANTE PENSILVANIA, 3 PARLANTE KITS-1678, 1 CACTUS BAILARIN, 2 LAMPARA PARLANTE, 2 PARLANTE RUEDA, 1 PARLANTE CON LUZ BX-39 MINI, 2 PARLANTE SPLASH PROOF Y 1 PARLANTE PLUSE 4 MINI",
    price: "",
    minimumPrice: "$210000 ARS (MINIMO $100K)",
    image: "/images/productos/combo/combo-15.webp",
    gallery: ["/images/productos/combo/combo-15.webp"],
    category: "combo",
    subcategory: "",
  },
  {
    id: "combo-16",
    name: "COMBO HOME PRO",
    description: "¡Un combo diseñado para vos!.",
    detailedDescription:
      "2 RAQUETA MATAMOSQUITOS A PILA, 1 CARRUSEL PROYECTOR, 1 AFEITADORA DRAGON, 1 SELLADORA AL VACIO, 2 MINI ASPIRADORA 3 EN 1, 1 HUMIFICADOR HONGO, 2 MINI LICUADORA PORTATIL, 1 DIFUSOR AROMATICO C/LLAMA, 1 HUMIFICADOR HOGUERA, 2 RAQUETA MATAMOSQUITO, 1 LAMPARA DE ESCRITORIO Y 1 REPETIDOR DE WIFI",
    price: "",
    minimumPrice: "$259900 ARS (MINIMO $100K)",
    image: "/images/productos/combo/combo-16.webp",
    gallery: ["/images/productos/combo/combo-16.webp"],
    category: "combo",
    subcategory: "",
  },
  {
    id: "combo-17",
    name: "COMBO CAMARAS TORO",
    description: "¡Un combo diseñado para vos!.",
    detailedDescription:
      "2 CAMARA AUTO, 3 CAMARA IP EXTERIOR, 2 CAMARA IP DOBLE Y 3 CAMARA IP SIMPLE",
    price: "",
    minimumPrice: "$295500 ARS (MINIMO $100K)",
    image: "/images/productos/combo/combo-17.webp",
    gallery: ["/images/productos/combo/combo-17.webp"],
    category: "combo",
    subcategory: "",
  },

  // Liquidacion de stock VOLT

  {
    id: "liquidacion-01",
    name: "CARGADOR 2.1 BOLSA TIPO C AITECH",
    description: "",
    detailedDescription: "",
    price: "",
    minimumPrice: "$2400 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/liquidacion/liquidacion-01.webp",
    gallery: ["/images/productos/liquidacion/liquidacion-01.webp"],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-02",
    name: "Auriculares Inalambricos LH-P47",
    description:
      "¡AURICULARES INALAMBRICOS LH-P47 EN LIQUIDACIÓN!",
    detailedDescription:
      "Auriculares LH-P47 con cancelación activa de ruido. Con hasta 15 horas de batería. Resistentes al agua. Incluye micrófono integrado para llamadas manos libres.",
    price: "",
    minimumPrice: "$3400 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/audio/auriculares/p47/p47.webp",
    gallery: ["/images/productos/audio/auriculares/p47/p47.webp"],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-03",
    name: "Auriculares Inalambricos PRO 80",
    description: "AURICULARES INALAMBRICOS PRO 80 EN LIQUIDACIÓN!",
    detailedDescription:
      "Colores disponibles: Negro elegante - Blanco clásico - Azul vibrante",
    price: "",
    minimumPrice: "$6900 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/audio/auriculares/pro80/pro80.webp",
    gallery: ["/images/productos/audio/auriculares/pro80/pro80.webp"],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-04",
    name: "Auriculares Inalambricos LH-P9",
    description: "¡AURICULARES INALAMBRICOS LH-P9 EN LIQUIDACIÓN!",
    detailedDescription:
      "Auriculares P9 con cancelación activa de ruido te permiten sumergirte completamente en tu música. Con hasta 10 horas de batería, son buenos para viajes largos. Resistentes al agua. Incluye micrófono integrado",
    price: "",
    minimumPrice: "$5900 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/audio/auriculares/p9/p9.webp",
    gallery: ["/images/productos/audio/auriculares/p9/p9.webp"],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-05",
    name: "RECEPTOR BLUETOOTH VOLT",
    description: "Receptor bluetooth volt EN LIQUIDACIÓN!",
    detailedDescription:
      "Un accesorio esencial para aquellos que buscan comodidad.",
    price: "",
    minimumPrice: "$1700 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/volt/cables/receptorbluetooth/receptor-volt.webp",
    gallery: [
      "/images/productos/volt/cables/receptorbluetooth/receptor-volt.webp",
    ],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-06",
    name: "CABEZAL 20W TIPO C",
    description: "Cabezal Tipo C",
    detailedDescription: "Un accesorio esencial para cargar tu dispositivo.",
    price: "",
    minimumPrice: "$3200 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/liquidacion/liquidacion-06.webp",
    gallery: ["/images/productos/liquidacion/liquidacion-06.webp"],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-07",
    name: "DEPILADORA DE CRISTAL UNISEX",
    description: "DEPILADORA DE CRISTAL UNISEX",
    detailedDescription: "",
    price: "",
    minimumPrice: "$2500 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/liquidacion/liquidacion-07.webp",
    gallery: ["/images/productos/liquidacion/liquidacion-07.webp"],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-08",
    name: "PARLANTE LAMPARA G LED",
    description: "Lampara G LED Parlante en liquidación",
    detailedDescription:
      "Iluminación y sonido en un solo dispositivo. Conectividad Bluetooth para una experiencia inalámbrica. Diseño moderno y elegante que se adapta a cualquier espacio.",
    price: "",
    minimumPrice: "$8300 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/audio/parlantes/lamparag/lamparag.webp",
    gallery: ["/images/productos/audio/parlantes/lamparag/lamparag.webp"],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-09",
    name: "Cable 5A Bolsa TIPO C",
    description: "Carga rapida con conexión Tipo C para celulares EN LIQUIDACIÓN",
    detailedDescription:
      "Cable marca Volt con conexión tipo c ofrece carga rapida a todos sus dispositivos compatibles.",
    price: "",
    minimumPrice: "$890 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/volt/cables/tipoc/bolsa_5a.webp",
    gallery: [
      "/images/productos/volt/cables/tipoc/bolsa_5a.webp",
      "/images/productos/volt/cables/tipoc/bolsa_5a_01.webp",
    ],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-10",
    name: "Cable 5A TIPO C",
    description: "Carga rapida con conexión Tipo C para celulares EN LIQUIDACIÓN",
    detailedDescription:
      "Cable marca Volt con conexión tipo c ofrece carga rapida a todos sus dispositivos compatibles.",
    price: "",
    minimumPrice: "$600 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/volt/cables/tipoc/caja_5a.webp",
    gallery: ["/images/productos/volt/cables/tipoc/caja_5a.webp"],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-11",
    name: "Auriculares ER-19",
    description: "Conector de audio de 3,5 mm, manos libres, con microfono",
    detailedDescription:
      "Auriculares marca Volt, modelo ER-19 con microfono integrado. 5 horas de bateria",
    price: "",
    minimumPrice: "$700 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/volt/auriculares/er19/er19.webp",
    gallery: [
      "/images/productos/volt/auriculares/er19/er19.webp",
      "/images/productos/volt/auriculares/er19/er19_01.webp",
    ],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-12",
    name: "Auriculares Inalambricos F9",
    description:
      "Con luz led, bluetooth 5.0, resistente al agua, 2h batería continua",
    detailedDescription:
      "Escuchar tu música favorita con estos auriculares in-ear inalámbricos F9. Su diseño te brinda comodidad y un ajuste seguro, mientras que la tecnología Bluetooth 5.0 te permite conectarlos fácilmente a tus dispositivos sin enredos de cables. Con el micrófono incorporado, podrás realizar llamadas con claridad y utilizar el modo manos libres para mayor comodidad en tus actividades diarias. Además, estos auriculares son resistentes al agua, lo que te permite usarlos en cualquier situación, incluso en días lluviosos.",
    price: "",
    minimumPrice: "$4500 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/audio/auriculares/f9/f9.webp",
    gallery: [
      "/images/productos/audio/auriculares/f9/f9.webp",
      "/images/productos/audio/auriculares/f9/f9_01.webp",
      "/images/productos/audio/auriculares/f9/f9_02.webp",
    ],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-13",
    name: "SOPORTE HOLDER UNDER",
    description: "!SOPORTE UNIVERSAL HOLDER UNDER PARA AUTO EN LIQUIDACIÓN!",
    detailedDescription:
      "Un accesorio esencial para aquellos que buscan comodidad y seguridad al usar su dispositivo móvil en el coche.",
    price: "",
    minimumPrice: "$1800 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/accesorios/soporte/auto/under/under.webp",
    gallery: [
      "/images/productos/accesorios/soporte/auto/under/under.webp",
      "/images/productos/accesorios/soporte/auto/under/under_01.webp",
      "/images/productos/accesorios/soporte/auto/under/under_02.webp",
      "/images/productos/accesorios/soporte/auto/under/under_03.webp",
    ],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-14",
    name: "TECLADO INALAMBRICO VOLT S/BATERIA I8",
    description: "¡Mini teclado inalambrico EN LIQUIDACIÓN!",
    detailedDescription:
      "Este teclado inalambrico modelo i8 es el mejor complemento para hacer todo tipo de actividades. Es cómodo y práctico al momento de redactar documentos, navegar y hacer búsquedas por internet, ya sea en tu trabajo o en la comodidad del hogar.",
    price: "",
    minimumPrice: "$1800 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/accesorios/teclado/i8/i8.webp",
    gallery: [
      "/images/productos/accesorios/teclado/i8/i8_01.webp",
    ],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-15",
    name: "CAMARA INTELIGENTE DOMO",
    description: "¡Camara Panorámica 360° en liquidación!",
    detailedDescription:
      "Mantén tu hogar siempre vigilado con esta innovadora cámara de seguridad con forma de foco. Fácil de instalar, simplemente enrosca en una base E27 y conéctala al WiFi. ¡Vigila todo desde tu celular en tiempo real!",
    price: "",
    minimumPrice: "$15800 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/liquidacion/liquidacion-15.webp",
    gallery: [
      "/images/productos/liquidacion/liquidacion-07.webp",
    ],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-16",
    name: "PACK X5 TV STICK",
    description: "¡Convierte cualquier pantalla en un Smart TV de tu hogar con este pack x5 en liquidación!.",
    detailedDescription:
      "Disfrutá de una experiencia multimedia completa con TV STICK, el aliado ideal para tus momentos de entretenimiento.",
    price: "",
    minimumPrice: "$139500 ARS ($27900 ARS c/u) ¡LIQUIDACIÓN!",
    image: "/images/productos/liquidacion/liquidacion-16.webp",
    gallery: [
      "/images/productos/liquidacion/liquidacion-16.webp",
    ],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-17",
    name: "CARGADOR IMANTADO MAGSAFE",
    description: "¡CARGADOR PORTÁTIL MAGNETICO AHORA EN LIQUIDACÓN!.",
    detailedDescription:
      "Disfrutá de una experiencia multimedia completa con TV STICK, el aliado ideal para tus momentos de entretenimiento.",
    price: "",
    minimumPrice: "$10900 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/liquidacion/liquidacion-17.webp",
    gallery: [
      "/images/productos/liquidacion/liquidacion-17.webp",
    ],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-18",
    name: "LAMPARA MATAMOSQUITOS",
    description: "¡LAMPARA MATAMOSQUITOS EN LIQUIDACÓN!.",
    detailedDescription:
      "Lampara electrica Mata Mosquitos recargable USB.",
    price: "",
    minimumPrice: "$10400 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/liquidacion/liquidacion-18.webp",
    gallery: [
      "/images/productos/liquidacion/liquidacion-18.webp",
    ],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-19",
    name: "PARLANTE KITS-1678",
    description: "¡PARLANTE KITS-1678 EN LIQUIDACÓN!.",
    detailedDescription:
      "Mini Parlante portátil con Altavoz y bluetooth.",
    price: "",
    minimumPrice: "$6100 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/liquidacion/liquidacion-19.webp",
    gallery: [
      "/images/productos/liquidacion/liquidacion-19.webp",
    ],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-20",
    name: "GAME STICK PRO",
    description: " GAME STICK PRO EN LIQUIDACÓN!.",
    detailedDescription:
      "Control inalambrico 2.4G para videojuegos.",
    price: "",
    minimumPrice: "$36000 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/liquidacion/liquidacion-20.webp",
    gallery: [
      "/images/productos/liquidacion/liquidacion-20.webp",
    ],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-21",
    name: "PACK X5 TVBOX 8K",
    description: "PACK X5 TV BOX 8K EN LIQUIDACÓN!.",
    detailedDescription:
      "Smart TV Box 8k Ultra HD 6GB RAM / 128GB ROM.",
    price: "",
    minimumPrice: "$144500 ARS ($28900 ARS c/u) ¡LIQUIDACIÓN!",
    image: "/images/productos/liquidacion/liquidacion-21.webp",
    gallery: [
      "/images/productos/liquidacion/liquidacion-21.webp",
    ],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-22",
    name: "Auriculares Inalambricos M10",
    description:
      "Auriculares Inalambricos M10 EN LIQUIDACIÓN!",
    detailedDescription:
      "Escuchar tu música favorita con estos auriculares in-ear inalámbricos M10. Su diseño te brinda comodidad y un ajuste seguro, mientras que la tecnología Bluetooth 5.0 te permite conectarlos fácilmente a tus dispositivos sin enredos de cables. Con el micrófono incorporado, podrás realizar llamadas con claridad y utilizar el modo manos libres para mayor comodidad en tus actividades diarias. Además, estos auriculares son resistentes al agua, lo que te permite usarlos en cualquier situación, incluso en días lluviosos.",
    price: "",
    minimumPrice: "7100 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/audio/auriculares/m10/m10.webp",
    gallery: ["/images/productos/audio/auriculares/m10/m10.webp"],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-23",
    name: "KIT MICROFONO CON LUZ",
    description: "SOPORTE KIT DE MICROFONO CON LUZ EN LIQUIDACIÓN!",
    detailedDescription:
      "Un accesorio esencial para aquellos que buscan hacer directos o grabaciones.",
    price: "",
    minimumPrice: "$12600 ARS ¡LIQUIDACIÓN!",
    image:
      "/images/productos/accesorios/soporte/kit/microfono-luz/microfono-luz.webp",
    gallery: [
      "/images/productos/accesorios/soporte/kit/microfono-luz/microfono-luz.webp",
      "/images/productos/accesorios/soporte/kit/microfono-luz/microfono-luz_01.webp",
    ],
    category: "liquidacion",
    subcategory: "",
  },
  {
    id: "liquidacion-24",
    name: "PARLANTE PORTATIL 3",
    description: "PARLANTE PORTATIL 3 EN LIQUIDACIÓN!.",
    detailedDescription:
      "Empareja fácilmente tu dispositivo mediante Bluetooth para una experiencia inalámbrica. Disfruta de la libertad de movimiento sin cables molestos.",
    price: "",
    minimumPrice: "$8000 ARS ¡LIQUIDACIÓN!",
    image: "/images/productos/audio/parlantes/portatil3/portatil3.webp",
    gallery: [
      "/images/productos/audio/parlantes/portatil3/portatil3.webp",
      "/images/productos/audio/parlantes/portatil3/portatil3_01.webp",
    ],
    category: "liquidacion",
    subcategory: "",
  },

  /** 
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
*/
];
