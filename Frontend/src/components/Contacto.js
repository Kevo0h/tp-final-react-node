import React, { useState } from "react";
import axios from "axios";

const Contacto = (props) => {
  // Estado inicial del formulario
  const initialForm = {
    nombre: "",
    apellido: "",
    celular: "",
    email: "",
    mensaje: "",
  };

  // Estado para manejar el formulario, el estado de envío y los mensajes
  const [formData, setFormData] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);

    const response = await axios.post(
      "http://localhost:3000/api/contacto",
      formData
    );
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  };
  return (
    <section
      className="bg-gray-900 text-white w-screen h-screen flex justify-center items-center"
      id="Contacto"
    >
      <div className="flex flex-col items-center text-center p-4 lg:p-8 max-w-4xl w-full">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-6 lg:mb-8">
          ¿Tienes alguna duda? ¡Contáctanos!
        </h2>
        <form
          action="app"
          method="post"
          onSubmit={handleSubmit}
          className="w-full bg-gray-800 p-4 lg:p-6 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 mb-4">
            <div>
              <label
                htmlFor="nombre"
                className="block text-left mb-1 text-xs lg:text-sm font-semibold"
              >
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                required
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></input>
            </div>
            <div>
              <label
                htmlFor="apellido"
                className="block text-left mb-1 text-xs lg:text-sm font-semibold"
              >
                Apellido
              </label>
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                required
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 mb-4">
            <div>
              <label
                htmlFor="celular"
                className="block text-left mb-1 text-xs lg:text-sm font-semibold"
              >
                Celular
              </label>
              <input
                type="text"
                name="celular"
                value={formData.celular}
                required
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></input>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-left mb-1 text-xs lg:text-sm font-semibold"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                required
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></input>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="comentario"
              className="block text-left mb-1 text-xs lg:text-sm font-semibold"
            >
              Comentario
            </label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escribe tu comentario aquí..."
              required
            ></textarea>
            {sending ? <p>enviando</p> : null}
            {msg ? <p>Mensaje enviado!</p> : null}

            <p className="text-gray-400 text-xs mt-1"></p>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
