import CryptoJS from "crypto-js";

// Un "salt" se usa para que cada proceso de encriptación sea diferente, entre miles de millones.
// de posibilidades. Eso evitaría que alguien pueda desencriptar los datos. Sin embargo,
// ya que estamos trabajando de lado del navegador web, cualquiera puede leer el salt resultante y esta
// técnica de esconder el salt mediante import.meta.env o similar solo tiene eficacia en aplicaciones de servidor.

const appSalt =
  import.meta.env.VITE_ENCRYPTION_SALT ||
  "20ac7730-ae62-41b7-89ab-1d772e716344";

const PREFIX = "POLOS_APP_";


// Funciones de encriptado y desencriptado de cadenas.

// Los datos que vayamos a guardar en localStorage estarán encriptados
// para hacer un poco más dificil que otras páginas eventualmente examinen esta información.

export const encrypt = (data, salt) =>
  CryptoJS.AES.encrypt(JSON.stringify(data), salt).toString();

export const decrypt = (ciphertext, salt) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, salt);
  try {
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (e) {
    console.error("Error al desencriptar", e);
    return null;
  }
};

// Funciones para guardar y leer datos de localStorage
// pasando en el proceso por la capa de encriptado y desencriptado

export const storeData = (key, data) => {
  localStorage.setItem(PREFIX + key, encrypt(data, appSalt));
};

export const readData = (key, defaultValue=null) => {
  const data = localStorage.getItem(PREFIX + key);
  if (data) {
    return decrypt(data, appSalt);
  }
  return defaultValue;
};
