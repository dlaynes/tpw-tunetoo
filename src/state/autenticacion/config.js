import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Para poder implementar el inicio de sesión de los usuarios, se debe configurar el acceso a la API
// En el panel de control de Firebase podremos pedir nuestras credenciales

const firebaseConfig = {
  apiKey: "AIzaSyB_mlDsykhicQXgZ4HhvXiK48gWxhtZXS8",
  authDomain: "tpw-portal.firebaseapp.com",
  projectId: "tpw-portal",
  storageBucket: "tpw-portal.firebasestorage.app",
  messagingSenderId: "410241829789",
  appId: "1:410241829789:web:5decfdd1d0c0cb24bc7d74",
};

const app = initializeApp(firebaseConfig);

// Habilitamos el módulo de autenticación en el panel de Firebase.
// A partir de entonces, podremos realizar peticiones de inicio de sesión desde nuestra aplicación web

export const auth = getAuth(app);
export default app;
