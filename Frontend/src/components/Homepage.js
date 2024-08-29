import React from "react";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <section className="bg-gray-900 text-white  w-screen h-screen ">
      <div className=" mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-full lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Bienvenidos a InformatiKa
            <span className="sm:block"> Consultores I.T </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            En InformatiKa, somos especialistas en consultoría IT y estamos aquí
            para acompañar a tu empresa en cada etapa de su evolución
            tecnológica. Nuestro equipo de expertos está comprometido en ofrecer
            soluciones innovadoras y efectivas que impulsan el crecimiento y la
            eficiencia de tu negocio.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/servicios"
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            >
              Nuestros Servicios
            </Link>

            <Link
              to="/quehacemos"
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#QueHacemos"
            >
              ¿Qué Hacemos?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Homepage;
