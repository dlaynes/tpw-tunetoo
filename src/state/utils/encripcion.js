import CryptoJS from "crypto-js";

const appSalt =
  import.meta.env.VITE_ENCRYPTION_SALT ||
  "20ac7730-ae62-41b7-89ab-1d772e716344";

const PREFIX = "POLOS_APP_";

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

export const storeData = (key, data) => {
  localStorage.setItem(PREFIX + key, encrypt(data, appSalt));
};

export const readData = (key, defaultValue) => {
  const data = localStorage.getItem(PREFIX + key);
  if (data) {
    return decrypt(data, appSalt);
  }
  return defaultValue;
};
