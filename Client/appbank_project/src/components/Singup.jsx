import React from "react";
import "../App.css";

function Singup() {
  return (
    <form className="formulario-container">
      <input type="text" id="nombre" placeholder="Ingrese su nombre" required />

      <input
        type="email"
        id="email"
        placeholder="Ingrese su correo electrónico"
        required
      />

      <input
        type="password"
        id="contrasena"
        placeholder="Ingrese su contraseña"
        required
      />

      <input
        type="tel"
        id="telefono"
        placeholder="Ingrese su número de teléfono"
        required
      />

      <input id="direccion" placeholder="Ingrese su dirección" required></input>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Singup;
