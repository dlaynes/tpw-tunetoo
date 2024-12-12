import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AutenticacionContext } from "../../../state/autenticacion/AutenticacionContext";

export const Login = ({ formRegistro }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { ingresar } = useContext(AutenticacionContext);

  const submit = async () => {
    if (!email || !password) {
      toast.warn("Ingrese un correo y una contraseña");
      return;
    }
    await ingresar(email, password);
  };

  return (
    <div>
      <h3>Iniciar sesión</h3>
      <form onSubmit={() => false}>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={submit}
        >
          Iniciar sesión
        </button>
      </form>
      <br />
      <p style={{ textAlign: "center" }}>
        ¿No tienes una cuenta?{" "}
        <a href="#" onClick={() => formRegistro()}>
          Regístrate
        </a>
      </p>
    </div>
  );
};

Login.propTypes = {
  formRegistro: PropTypes.func,
};
