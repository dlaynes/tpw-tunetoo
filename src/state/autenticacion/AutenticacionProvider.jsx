import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

import { auth } from "./config";

import { AutenticacionContext } from "./AutenticacionContext";

/**
 * Implementación de las variables globales concernientes al estado de autenticación de un usuario
 */
export const AutenticacionProvider = ({ children }) => {
  // Objeto Usuario proveniente del API de Firebase
  const [usuario, cambiarUsuario] = useState(null);
  // Último error, proveniente del API de Firebase
  const [error, cambiarError] = useState(null);

  // Esta función actualiza automáticamente la variable usuario, cuando se produzca un cambio
  // en el estado de la sesión de Firebase
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        // https://firebase.google.com/docs/reference/js/firebase.User
        cambiarUsuario(user);
      } else {
        cambiarUsuario(null);
      }
    });
  }, []);

  // Crear una cuenta nueva asociada a la aplicación
  const registro = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Cuenta creada
      // El usuario lo actualizamos de forma centralizada desde onAuthStateChanged
      // const user = userCredential.user;
      // cambiarUsuario(user);
      cambiarError(null);
    } catch (e) {
      cambiarError(e);
    }
  };

  // Realizar login con una cuenta asociada a la aplicación
  const ingresar = async (email, password) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Inicio de sesión aprobado
      // El usuario lo actualizamos de forma centralizada desde onAuthStateChanged
      // const user = userCredential.user;
      // cambiarUsuario(user);
      cambiarError(null);
    } catch (e) {
      cambiarError(e);
    }
  };

  // Cerrar la sesión de Firebase
  const salir = () => {
    signOut(auth).then(()=>{
      cambiarError(null);
    }).catch((e)=>{
      cambiarError(e);
    });
  };

  return (
    <AutenticacionContext.Provider
      value={{
        usuario,
        error,
        registro,
        ingresar,
        salir
      }}
    >
      {children}
    </AutenticacionContext.Provider>
  );
};

/*
Nota: ya que estamos usando Firebase y React, sería factible reemplazar las llamadas a los servicios de login
con la librería React Query Firebase, que tiene mejor control sobre las peticiones http.

https://react-query-firebase.invertase.dev/
 */

AutenticacionProvider.propTypes = {
  children: PropTypes.node,
};
