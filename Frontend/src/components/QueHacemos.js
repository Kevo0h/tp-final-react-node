import React from "react";

const QueHacemos = () => {
  return (
    <section
      className="bg-gray-900 text-white w-screen h-screen flex items-center justify-center"
      id="QueHacemos"
    >
      <div className="flex flex-col items-center text-center p-4 lg:p-8 max-w-4xl w-full">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-6 lg:mb-8">
          ¿Qué Hacemos?
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex-1 max-w-sm">
            <h3 className="text-xl font-semibold mb-4">
              Transformación Digital
            </h3>
            <p>
              Te ayudamos a integrar las últimas tecnologías y a adoptar
              estrategias digitales que optimicen tus procesos y te mantengan
              competitivo en un mercado en constante cambio.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex-1 max-w-sm">
            <h3 className="text-xl font-semibold mb-4">
              Gestión Completa del Departamento IT
            </h3>
            <p>
              Nos ocupamos de todo tu departamento IT, desde la planificación y
              gestión de infraestructuras hasta el soporte técnico diario. Con
              nosotros, puedes estar seguro de que tu tecnología está en las
              mejores manos.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex-1 max-w-sm">
            <h3 className="text-xl font-semibold mb-4">
              Consultoría Estratégica
            </h3>
            <p>
              Ofrecemos asesoramiento experto para ayudarte a tomar decisiones
              informadas sobre la tecnología y la inversión en IT, alineando tus
              objetivos tecnológicos con tus metas empresariales.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex-1 max-w-sm">
            <h3 className="text-xl font-semibold mb-4">
              Soluciones Personalizadas
            </h3>
            <p>
              Cada empresa es única. Trabajamos contigo para diseñar soluciones
              a medida que se adapten a las necesidades específicas de tu
              negocio y te ayuden a alcanzar tus objetivos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueHacemos;
