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
    id: "smartphones",
    name: "Smartphones",
    subcategories: [
      { id: "android", name: "Android" },
      { id: "ios", name: "iOS" },
      { id: "otros", name: "Otros" },
    ],
  },
  {
    id: "accesorios",
    name: "Accesorios",
    subcategories: [
      { id: "teclados", name: "Teclados" },
      { id: "mouse", name: "Mouse" },
      { id: "adaptadores", name: "Adaptadores" },
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
]

// Datos de productos
/** @type {Product[]} */
export const products = [
  {
    id: "LAP-X1",
    name: "Laptop Pro X1",
    description: "Intel Core i7, 16GB RAM, 512GB SSD",
    detailedDescription:
      "La Laptop Pro X1 es perfecta para profesionales que necesitan potencia y portabilidad. Con su procesador Intel Core i7 de última generación, 16GB de memoria RAM y un rápido SSD de 512GB, podrás ejecutar aplicaciones exigentes sin problemas. Su pantalla de alta resolución ofrece colores vibrantes y detalles nítidos para tus proyectos creativos.",
    price: "$1,299.99",
    image: "/img/productos/laptop1.jpg",
    gallery: ["/img/productos/laptop1.jpg", "/img/productos/laptop1-2.jpg", "/img/productos/laptop1-3.jpg"],
    category: "laptops",
    subcategory: "ultrabook",
  },
  {
    id: "LAP-S3",
    name: "Laptop Air S3",
    description: "Intel Core i5, 8GB RAM, 256GB SSD",
    detailedDescription:
      "La Laptop Air S3 combina elegancia y rendimiento en un diseño ultradelgado. Con un procesador Intel Core i5, 8GB de RAM y 256GB de almacenamiento SSD, es ideal para trabajo y entretenimiento. Su batería de larga duración te permite trabajar todo el día sin preocupaciones.",
    price: "$899.99",
    image: "/img/productos/laptop2.jpg",
    gallery: ["/img/productos/laptop2.jpg", "/img/productos/laptop2-2.jpg", "/img/productos/laptop2-3.jpg"],
    category: "laptops",
    subcategory: "ultrabook",
  },
  {
    id: "LAP-G7",
    name: "Laptop Gaming G7",
    description: "AMD Ryzen 7, 32GB RAM, 1TB SSD, RTX 3070",
    detailedDescription:
      "La Laptop Gaming G7 está diseñada para ofrecer una experiencia de juego inmersiva. Con su potente procesador AMD Ryzen 7, 32GB de RAM y tarjeta gráfica RTX 3070, podrás disfrutar de los juegos más exigentes con gráficos fluidos y realistas. Su sistema de refrigeración avanzado mantiene el rendimiento óptimo incluso en sesiones intensas.",
    price: "$1,799.99",
    image: "/img/productos/laptop3.jpg",
    gallery: ["/img/productos/laptop3.jpg", "/img/productos/laptop3-2.jpg", "/img/productos/laptop3-3.jpg"],
    category: "laptops",
    subcategory: "gaming",
  },
  {
    id: "SP-X12",
    name: "Smartphone X12",
    description: '6.7" AMOLED, 128GB, 8GB RAM',
    detailedDescription:
      'El Smartphone X12 combina tecnología de vanguardia con un diseño elegante. Su pantalla AMOLED de 6.7" ofrece colores vibrantes y negros profundos. Con 128GB de almacenamiento y 8GB de RAM, tendrás espacio y velocidad para todas tus aplicaciones. Su sistema de cámaras múltiples te permite capturar momentos con calidad profesional.',
    price: "$799.99",
    image: "/img/productos/phone1.jpg",
    gallery: ["/img/productos/phone1.jpg", "/img/productos/phone1-2.jpg", "/img/productos/phone1-3.jpg"],
    category: "smartphones",
    subcategory: "android",
  },
  {
    id: "SP-Y8",
    name: "Smartphone Y8",
    description: '6.4" LCD, 64GB, 6GB RAM',
    detailedDescription:
      'El Smartphone Y8 ofrece gran rendimiento a un precio accesible. Con su pantalla LCD de 6.4", 64GB de almacenamiento y 6GB de RAM, es perfecto para usuarios que buscan un equilibrio entre funcionalidad y costo. Su batería de larga duración te acompaña durante todo el día.',
    price: "$499.99",
    image: "/img/productos/phone2.jpg",
    gallery: ["/img/productos/phone2.jpg", "/img/productos/phone2-2.jpg"],
    category: "smartphones",
    subcategory: "android",
  },
  {
    id: "SP-PRO",
    name: "Smartphone Pro Z",
    description: '6.8" AMOLED, 256GB, 12GB RAM',
    detailedDescription:
      'El Smartphone Pro Z representa lo último en tecnología móvil. Su pantalla AMOLED de 6.8" ofrece una experiencia visual incomparable. Con 256GB de almacenamiento y 12GB de RAM, es capaz de manejar cualquier tarea con facilidad. Su sistema de cámaras desarrollado en colaboración con expertos en fotografía te permite capturar imágenes de calidad profesional en cualquier condición de luz.',
    price: "$1,099.99",
    image: "/img/productos/phone3.jpg",
    gallery: ["/img/productos/phone3.jpg", "/img/productos/phone3-2.jpg", "/img/productos/phone3-3.jpg"],
    category: "smartphones",
    subcategory: "ios",
  },
  {
    id: "ACC-M1",
    name: "Mouse Inalámbrico",
    description: "Ergonómico, 6 botones, 4000 DPI",
    detailedDescription:
      "Este mouse inalámbrico ergonómico está diseñado para largas horas de uso sin fatiga. Con 6 botones programables y sensor de 4000 DPI, ofrece precisión y versatilidad para trabajo o gaming. Su batería recargable dura hasta 3 meses con una sola carga.",
    price: "$49.99",
    image: "/img/productos/accesorio1.jpg",
    gallery: ["/img/productos/accesorio1.jpg", "/img/productos/accesorio1-2.jpg"],
    category: "accesorios",
    subcategory: "mouse",
  },
  {
    id: "ACC-T1",
    name: "Teclado Mecánico",
    description: "RGB, switches Blue, layout español",
    detailedDescription:
      "Teclado mecánico con retroiluminación RGB personalizable y switches Blue que ofrecen una respuesta táctil satisfactoria. Diseñado con layout español y teclas de función programables para aumentar tu productividad. Su construcción en aluminio garantiza durabilidad y estabilidad durante el uso intensivo.",
    price: "$89.99",
    image: "/img/productos/accesorio2.jpg",
    gallery: ["/img/productos/accesorio2.jpg", "/img/productos/accesorio2-2.jpg"],
    category: "accesorios",
    subcategory: "teclados",
  },
  {
    id: "AUD-H1",
    name: "Auriculares Inalambricos Bluetooth P9",
    description: "Cancelación de ruido, incluye microfono",
    detailedDescription:
      "Estos auriculares P9 con cancelación activa de ruido te permiten sumergirte completamente en tu música. Con hasta 10 horas de batería, son buenos para viajes largos. Resistentes al agua.",
    price: "$129.99",
    image: "/img/productos/P9/P9-1.webp",
    gallery: ["/img/productos/P9/P9-1.webp", "/img/productos/P9/P9-2.webp", "/img/productos/P9/P9-3.webp"],
    category: "audio",
    subcategory: "auriculares",
  },
  {
    id: "AUD-H2",
    name: "Auriculares Inalambricos Bluetooth P47",
    description: "Bluetooth 5.0, resistente al agua, 15h batería",
    detailedDescription:
      "Auriculares P47 con cancelación activa de ruido. Con hasta 15 horas de batería. Resistentes al agua. Incluye micrófono integrado para llamadas manos libres.",
    price: "$79.99",
    image: "/img/productos/P47/P47-1.webp",
    gallery: ["/img/productos/P47/P47-1.webp", "/img/productos/P47/P47-2.webp", "/img/productos/P47/P47-3.webp"],
    category: "audio",
    subcategory: "auriculares",
  },
  {
    id: "AUD-H3",
    name: "Auriculares Inalambricos Bluetooth A6S",
    description: "Bluetooth 5.0, resistente al agua, 15h batería",
    detailedDescription:
      "Auriculares A6S con cancelación activa de ruido. Con hasta 15 horas de batería. Resistentes al agua. Incluye micrófono integrado para llamadas manos libres.",
    price: "$79.99",
    image: "/img/productos/A6S/A6S-1.webp",
    gallery: ["/img/productos/A6S/A6S-1.webp", "/img/productos/A6S/A6S-2.webp"],
    category: "audio",
    subcategory: "auriculares",
  },
  // Añadir productos de micrófono para la categoría audio/microfonos
  {
    id: "AUD-M1",
    name: "Micrófono Condensador USB",
    description: "Calidad de estudio, patrón cardioide, plug & play",
    detailedDescription:
      "Micrófono condensador USB de alta calidad para grabaciones profesionales. Ideal para podcasts, streaming, grabación de voces y música. Conexión plug & play sin necesidad de drivers adicionales. Incluye soporte de escritorio y filtro antipop.",
    price: "$89.99",
    image: "/img/productos/mic1.jpg",
    gallery: ["/img/productos/mic1.jpg", "/img/productos/mic1-2.jpg"],
    category: "audio",
    subcategory: "microfonos",
  },
  {
    id: "AUD-M2",
    name: "Micrófono Inalámbrico Profesional",
    description: "Doble canal, alcance 50m, batería 8h",
    detailedDescription:
      "Sistema de micrófono inalámbrico profesional con doble canal para mayor estabilidad. Perfecto para presentaciones, eventos y grabaciones en movimiento. Con un alcance de hasta 50 metros y batería de larga duración de 8 horas de uso continuo.",
    price: "$149.99",
    image: "/img/productos/mic2.jpg",
    gallery: ["/img/productos/mic2.jpg", "/img/productos/mic2-2.jpg"],
    category: "audio",
    subcategory: "microfonos",
  },
  {
    id: "AUD-M3",
    name: "Micrófono de Solapa",
    description: "Discreto, omnidireccional, compatible con smartphones",
    detailedDescription:
      "Micrófono de solapa discreto y ligero, ideal para entrevistas, videos y conferencias. Patrón de captación omnidireccional para una grabación clara desde cualquier ángulo. Compatible con smartphones, cámaras DSLR y grabadoras.",
    price: "$39.99",
    image: "/img/productos/mic3.jpg",
    gallery: ["/img/productos/mic3.jpg", "/img/productos/mic3-2.jpg"],
    category: "audio",
    subcategory: "microfonos",
  },
  // Añadir productos de parlantes para la categoría audio/parlantes
  {
    id: "AUD-P1",
    name: "Parlante Bluetooth Portátil",
    description: "Resistente al agua, 20W, 12h de batería",
    detailedDescription:
      "Parlante Bluetooth portátil con sonido potente de 20W y graves profundos. Resistente al agua IPX7, perfecto para uso en exteriores. Batería de larga duración con hasta 12 horas de reproducción continua. Incluye micrófono integrado para llamadas manos libres.",
    price: "$79.99",
    image: "/img/productos/speaker1.jpg",
    gallery: ["/img/productos/speaker1.jpg", "/img/productos/speaker1-2.jpg"],
    category: "audio",
    subcategory: "parlantes",
  },
  {
    id: "AUD-P2",
    name: "Sistema de Sonido 2.1",
    description: "Subwoofer potente, 120W, control remoto",
    detailedDescription:
      "Sistema de sonido 2.1 con subwoofer para graves profundos y potentes. Potencia total de 120W para una experiencia de audio inmersiva. Múltiples entradas: Bluetooth, USB, AUX y óptica. Incluye control remoto para ajustar el volumen y los modos de ecualización desde la comodidad de tu sofá.",
    price: "$129.99",
    image: "/img/productos/speaker2.jpg",
    gallery: ["/img/productos/speaker2.jpg", "/img/productos/speaker2-2.jpg"],
    category: "audio",
    subcategory: "parlantes",
  },
]

