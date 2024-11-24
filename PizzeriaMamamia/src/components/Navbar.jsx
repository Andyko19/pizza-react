import React, { useState } from "react";

const Navbar = () => {
  const [token, setToken] = useState(false);
  const total = 25000;

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-5 w-full shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6">
        <button className="text-3xl font-extrabold hover:underline">
          🍕 Home
        </button>

        <button className="bg-yellow-500 text-black py-2 px-6 rounded-full hover:bg-yellow-400 transition duration-300 ease-in-out">
          🛒 Total: ${total.toLocaleString()}
        </button>

        <div className="flex space-x-6">
          {token ? (
            <>
              <button
                className="hover:text-yellow-400 text-lg transition duration-300 ease-in-out"
                onClick={() => alert("Perfil aún no implementado.")}
              >
                🔓 Profile
              </button>
              <button
                className="hover:text-red-400 text-lg transition duration-300 ease-in-out"
                onClick={() => setToken(false)}
              >
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="hover:text-green-400 text-lg transition duration-300 ease-in-out"
                onClick={() => setToken(true)}
              >
                🔐 Login
              </button>
              <button
                className="hover:text-blue-400 text-lg transition duration-300 ease-in-out"
                onClick={() => alert("Registrado con éxito.")}
              >
                🔐 Register
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
