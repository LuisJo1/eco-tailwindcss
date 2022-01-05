import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = ({ setSesionStatus, carrito }) => {
  const [menu, setMenu] = useState(false);
  const [nav, setNav] = useState(false);

  const openMenu = () => {
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div className="relative w-full bg-white">
      <div className="w-full">
        <div className="flex items-center justify-between w-full px-10 py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Workflow</span>
              <img className="w-auto h-8 sm:h-10" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
              onClick={openMenu}
            >
              <span className="sr-only">Open menu</span>

              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* menu full */}
          <nav className="hidden space-x-10 md:flex">
            <div className="relative">
              <button
                type="button"
                onClick={openNav}
                className="inline-flex items-center text-base font-medium text-gray-500 bg-white rounded-md group hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span>Catergorias</span>

                <svg
                  className="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              {nav ? (
                <div className="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                      <a
                        href="#"
                        className="flex items-start -m-3 rounded-lg hover:bg-gray-50"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Marvel comics
                          </p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="flex items-start -m-3 rounded-lg hover:bg-gray-50"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            DC comics
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <h1></h1>
              )}
            </div>

            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Precios
            </a>
          </nav>
          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            <Link to="/checkout-page"
              href="#"
              className="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900"
            >
              <div className="relative p-3">
                <p className="absolute top-0 right-0 text-indigo-700">{carrito.length}</p>
                <FontAwesomeIcon icon={["fas", "shopping-cart"]} size="2x" />
              </div>
              
            </Link>
            <button onClick={() => setSesionStatus(true)}>
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700"
              >
                Salir
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* menu responsive */}
      {menu ? (
        <div className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
          <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <Link to="/"
                  onClick={closeMenu}
                >
                  <img class="h-8 w-auto" src={logo} alt="Workflow" />
                </Link>
                <div class="-mr-2">
                  <button
                    type="button"
                    onClick={closeMenu}
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span class="sr-only">Close menu</span>

                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid gap-y-8">
                  <a
                    href="#"
                    class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <span class="ml-3 text-base font-medium text-gray-900">
                      Categorias
                    </span>
                  </a>
                  <a
                    href="#"
                    class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <span class="ml-3 text-base font-medium text-gray-900">
                      Precios
                    </span>
                  </a>

                  <a
                    href="#"
                    class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <span class="ml-3 text-base font-medium text-gray-900">
                      Salir
                    </span>
                  </a>

                  <Link to="/checkout-page"
                    href="#"
                    class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    <span class="ml-3 text-base font-medium text-gray-900">
                      <FontAwesomeIcon
                        icon={["fas", "shopping-cart"]}
                        size="2x"
                      />
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
            {/* <div class="py-6 px-5 space-y-6">
              <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>
              </div>
              <div>
                <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Sign up
                </a>
                <p class="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <a href="#" class="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      ) : (
        <h1></h1>
      )}
    </div>
  );
};

export default Header;
