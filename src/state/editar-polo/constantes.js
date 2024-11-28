/** Tipos de capa posibles */
export const TIPO_CAPA = {
  texto: 1,
  imagen: 2,
  galeria: 3,
};

export const LIMITE_CAPAS = 10;

export const NIVEL_SELECCIONADO = 50;

/** Plantilla base para la creación de capas */
export const CAPA_BASE = {
  tipo: TIPO_CAPA.texto,
  seleccionada: false,
  zIndex: 1,
  top: 50,
  left: 50,
  width: 100,
  height: 100,
  texto: "",
  url: "",
  color: "#FFFFFF",
  rotationDeg: 0,
  fontFamily: "",
  fontSize: 14,
  backgroundColor: "transparent",
};

/** Fotos preseleccionadas para los usuarios */
export const GALERIA = [
  {
    nombre: "Iconpacks",
    carpeta: "iconpacks",
    fotos: [
      "christmas-bell-13029.png",
      "christmas-wreath-13032.png",
      "cartoon-eyes-happy-15375.png",
      "cartoon-eyes-stunned-15380.png",
      "cartoon-eyes-surprised-15368.png",
      "cartoon-eyes-sad-15365.png",
      "cartoon-eyes-tongue-out-15377.png",
      "angry-cartoon-eyes-15374.png",
      "cartoon-eyes-smile-15364.png",
      "moon-and-clear-sky-16468.png",
      "downpour-rain-and-blue-cloud-16463.png",
      "sun-and-blue-cloud-16460.png",
      "sunny-day-16458.png",
      "red-micro-car-16688.png",
      "red-truck-16707.png",
      "red-truck-trailer-16712.png",
      "watering-can-and-gardening-19303.png",
      "potted-green-plant-growing-19301.png",
      "laundry-delivery-truck-21984.png",
      "brightening-clothes-21982.png",
    ],
  },
  {
    nombre: "Vecteezy",
    carpeta: "vecteezy",
    fotos: [
      'vecteezy_gray-backpack-png-with-ai-generated_34339041.png',
      'vecteezy_whimsical-cornflower-floral-elements-pack_52583500.png',
      'vecteezy_modern-cybersecurity-technology-icon-pack_26193460.png',
      'vecteezy_memphis-round-confetti-festive-background-in-cyan-blue-pink_11887900.png',
      'vecteezy_3d-sale-promotion-icon_16766306.png',
      'vecteezy_lens-flare-purple-tone-light-special-effect_19909056.png',
      'vecteezy_branch-palm-leaf-trees-on-the-cloud-blue-sky-with-beautiful_15096589.png',
      'vecteezy_colorful-smoke-explode-png-design_9375077.png',
      'vecteezy_isolated-plastic-card-holder_8494466.png',
      'vecteezy_isolated-pack-of-realistic-palms_8494438.png',
    ]
  }
];
