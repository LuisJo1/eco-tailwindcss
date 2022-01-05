import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const CheckoutCard = ({el, deleteCarrito}) => {
  return (
    <div className="w-full px-1 my-1 lg:px-4 ">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <div className="px-2 py-2 text-lg border">
          <div className="flex items-center justify-between">
            <p>{el.name}</p>
            <p className="text-xl text-gray-600">{el.price}$</p>
          </div>
          <p className="mt-1 text-gray-600">Disponible</p>
        </div>

        <a href="#">
          <img alt="Placeholder" className="block w-full h-72" src={el.img} />
        </a>

        <div className="flex items-center justify-between p-2 leading-tight md:p-4">
          <p className="flex items-center text-black" href="#">
            <p className="text-lg">{el.description}</p>
          </p>
          <button
            onClick={(e) => deleteCarrito(el.id)}
          >
            <FontAwesomeIcon
              
              icon={["fas", "trash"]}
              size="lg"
              style={{ color: "gray" }}
            />
            
          </button>
        </div>
      </article>
    </div>
  )
}

export default CheckoutCard
