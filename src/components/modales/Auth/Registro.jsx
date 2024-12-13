import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AutenticacionContext } from "../../../state/autenticacion/AutenticacionContext";
import { toast } from "react-toastify";

export const Registro = ({ formLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { registro } = useContext(AutenticacionContext);

  const submit = async () => {
    if (!email || !password) {
      toast.warn("Ingrese un correo y una contraseña");
      return;
    }
    if (password !== passwordConfirm) {
      toast.warn("Las contraseñas no coinciden");
      return;
    }
    await registro(email, password);
  };

  return (
    <div>
      <h3>Crea una cuenta</h3>
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
        <label htmlFor="passwordConfirm">Confirmar contraseña:</label>
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          required
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <button type="button" onClick={submit}>
          Registrarme
        </button>
      </form>
      <br />
      <p style={{ textAlign: "center" }}>
        ¿Ya tienes una cuenta?{" "}
        <a href="#" onClick={formLogin}>
          Inicia sesión
        </a>
      </p>
    </div>
  );
};

Registro.propTypes = {
  formLogin: PropTypes.func,
};
