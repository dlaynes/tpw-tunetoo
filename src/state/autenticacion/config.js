import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Para poder implementar el inicio de sesión de los usuarios, se debe configurar el acceso a la API
// En el panel de control de Firebase podremos pedir nuestras credenciales
// Se deben agregar las claves VITE_FIREBASE_* correspondientes al archivo .env

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

// Habilitamos el módulo de autenticación en el panel de Firebase.
// A partir de entonces, podremos realizar peticiones de inicio de sesión desde nuestra aplicación web

export const auth = getAuth(app);
export default app;

// Similares a Firebase, existen otras alternativas de herramientas de alojamiento y desarrollo en la nube, como Supabase y AppWrite.
