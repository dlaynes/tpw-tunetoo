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
  const [usuario, cambiarUsuario] = useState(null);
  const [error, cambiarError] = useState(null);

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

  const registro = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Cuenta creada
      // const user = userCredential.user;
      // cambiarUsuario(user);
      cambiarError(null);
    } catch (e) {
      cambiarError(e);
    }
  };

  const ingresar = async (email, password) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Inicio de sesión aprobado
      // const user = userCredential.user;
      // cambiarUsuario(user);
      cambiarError(null);
    } catch (e) {
      cambiarError(e);
    }
  };

  const salir = async () => {
    try {
      await signOut();
      cambiarError(null);
    } catch(e){
      cambiarError(e);
    }
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

AutenticacionProvider.propTypes = {
  children: PropTypes.node,
};
