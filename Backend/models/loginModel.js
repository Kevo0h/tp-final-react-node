const pool = require("./bd"); // Asegúrate de que './bd' exporta correctamente el pool de conexiones
const md5 = require("md5"); // Correcta importación del módulo md5

async function getUserByUsernameAndPassword(user, password) {
  try {
    // Query SQL con placeholders
    const query =
      "SELECT * FROM usuarios WHERE usuario = ? AND password = ? LIMIT 1";
    // Ejecuta la consulta y espera los resultados
    const rows = await pool.query(query, [user, md5(password)]);
    // Retorna el primer resultado
    return rows[0];
  } catch (error) {
    // Manejo del error
    console.error("Error en getUserByUsernameAndPassword:", error);
    // Puedes lanzar el error o manejarlo de otra manera según tu necesidad
    throw error; // Lanza el error para que el controlador de la llamada pueda manejarlo
  }
}

module.exports = { getUserByUsernameAndPassword };
