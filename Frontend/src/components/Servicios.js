import React from "react";

const Servicios = () => {
  return (
    <section
      className="bg-gray-900 text-white w-screen h-screen flex items-center justify-center"
      id="Servicios"
    >
      <div className="flex flex-col items-center text-center p-4 lg:p-8 max-w-4xl w-full">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-6 lg:mb-8">
          Nuestros Servicios
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex-1 max-w-sm">
            <h3 className="text-xl font-semibold mb-4">Consultoría IT</h3>
            <p>
              Brindamos asesoría especializada para optimizar tu infraestructura
              tecnológica y resolver problemas técnicos.
            </p>
            <a
              href="/contacto"
              className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out"
            >
              Contáctanos
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex-1 max-w-sm">
            <h3 className="text-xl font-semibold mb-4">
              Desarrollo de Software
            </h3>
            <p>
              Desarrollamos soluciones de software personalizadas que se ajustan
              a las necesidades específicas de tu negocio.
            </p>
            <a
              href="/contacto"
              className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out"
            >
              Contáctanos
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex-1 max-w-sm">
            <h3 className="text-xl font-semibold mb-4">Soporte Técnico</h3>
            <p>
              Ofrecemos soporte técnico continuo para garantizar el
              funcionamiento óptimo de tus sistemas y resolver problemas
              rápidamente.
            </p>
            <a
              href="/contacto"
              className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
