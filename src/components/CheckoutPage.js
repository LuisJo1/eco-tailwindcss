import React from "react";
import CheckoutCard from "./CheckoutCard";

const CheckoutPage = ({ carrito, deleteCarrito }) => {
  return (
    <div>
      <h1 className="flex justify-center mt-10 text-xl font-semibold text-indigo-900 lg:text-4xl">
        Shopping Cart
      </h1>
      <div className="flex justify-center mt-10 text-xl font-semibold text-indigo-900 lg:text-2xl">
        <h2>Total Items {carrito.length}</h2>
      </div>
      <div className="px-4 my-12 md:px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {carrito.map((el) => {
            return (
              <CheckoutCard
                key={el.id}
                el={el}
                deleteCarrito={deleteCarrito}
              ></CheckoutCard>
            );
          })}
        </div>
      </div>
      
    </div>
  );
};

export default CheckoutPage;
