import React, { useState } from "react";

const AuthForm = ({ onLogin, onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email); // Llamar la función de login
    } else {
      alert("Por favor, ingrese un correo y contraseña");
    }
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (email && password) {
      onRegister(email); // Llamar la función de registro
    } else {
      alert("Por favor, ingrese un correo y contraseña");
    }
  };

  return (
    <div className="p-4">
      <form>
        <input
          type="email"
          placeholder="Correo"
          className="p-2 mb-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Contraseña"
          className="p-2 mb-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          className="bg-green-500 text-white py-2 px-4 rounded m-2"
          onClick={handleSubmitLogin}
        >
          Iniciar sesión
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleSubmitRegister}
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
