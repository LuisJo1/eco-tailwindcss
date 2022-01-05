import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import marvel from "../assets/img/marvel.jpg";

const Sesion = ({ setSesionStatus }) => {
  const [nombre, setNombre] = useState("");
  const [contra, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (nombre === name && contra === password) {
      setSesionStatus(false);
    } else {
      console.log("contraseña invalida");
    }
  };

  let name = "demo1";
  let password = "demo1";

  const setName = (e) => {
    setNombre(e.target.value);
  };

  const setContra = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover lg:justify-end"
      style={{ backgroundImage: `url(${marvel})` }}
    >
      <figure className="w-5/6 lg:w-3/6 h-7/12 xl:w-3/6">
        <div className="w-full h-full max-w-md px-1 py-10 m-auto bg-white border rounded-lg border-primaryBorder shadow-default">
          <h2 className="text-2xl font-medium text-center">
            <p className="text-lg font-semibold">Bienvenido</p>
          </h2>
          <div className="mx-6 text-primary">
            <div className="flex items-center justify-center">
              <img className="h-20" src={logo} alt="logo" />
            </div>
            <form>
              <label className="text-left">Usuario</label>
              <div className="flex items-center justify-center mt-1 mb-3 ml-2">
                <div className="z-20 -mr-8">
                  <FontAwesomeIcon icon={["fas", "user"]} size="1x" />
                </div>
                <input
                  name="usuario"
                  type="text"
                  placeholder="Usuario"
                  onChange={setName}
                  className={
                    "w-full pl-10 py-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out focus:border-blue-900"
                  }
                />
              </div>

              <label>Contraseña</label>
              <div className="flex items-center justify-center mt-1 mb-3 ml-2">
                <div className="z-20 -mr-8">
                  <FontAwesomeIcon icon={["fas", "lock"]} size="1x" />
                </div>
                <input
                  name="password"
                  type="text"
                  placeholder="Contraseña"
                  onChange={setContra}
                  className={
                    "w-full pl-10 py-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out focus:border-blue-900"
                  }
                />
              </div>
              <div className="flex items-center justify-center mt-3">
                <button
                  className={
                    "bg-blue-800 hover:bg-blue-600 py-2 px-10 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                  }
                  value="Login"
                  onClick={onSubmit}
                >
                  Ingresar
                </button>
              </div>
            </form>
            {/* <div className="flex items-center justify-center mt-3">
            <button className={"justify-center text-blue-500 hover:underline"}>
              Need to register? Sign up for free
            </button>
          </div> */}
          </div>
        </div>
      </figure>
    </div>
  );
};

export default Sesion;
