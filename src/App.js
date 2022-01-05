import React, {useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Sesion from "./components/Sesion"
import Home from "./components/Home"


function App() {

  const [carrito, setCarrito] = useState([]);

  const [sesionStatus, setSesionStatus] = useState(false);

  const addCarrito = (el) => {
    let newCarrito = el;
    console.log(newCarrito);
    setCarrito([...carrito, newCarrito]);

    
  };

  const deleteCarrito = (id) => {
    console.log(id);
    let newDataCarrito = carrito.filter((el) => el.id !== id);
    setCarrito(newDataCarrito);
  };


  return (
    <div>
      
      {sesionStatus ? (
        <Sesion setSesionStatus={setSesionStatus} />
      ) : (
        <Home
          carrito={carrito}
          deleteCarrito={deleteCarrito}
          addCarrito={addCarrito}
          setSesionStatus={setSesionStatus}
        />
      )}
      
    </div>
  );
}

export default App;
