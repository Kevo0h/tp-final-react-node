const pool = require("./bd");

async function getReclamos(user, password) {
  try {
    // Query SQL con placeholders
    const query = "SELECT * FROM reclamos";
    // Ejecuta la consulta y espera los resultados
    const rows = await pool.query(query);
    // Retorna el primer resultado
    return rows;
  } catch (error) {
    // Manejo del error
    console.error("Error en usuario:", error);
    // Puedes lanzar el error o manejarlo de otra manera según tu necesidad
    throw error; // Lanza el error para que el controlador de la llamada pueda manejarlo
  }
}

async function getReclamosByUser(user) {
  try {
    // Query SQL con placeholders
    const query = "SELECT * FROM reclamos where usuario_reclamo = ?";
    // Ejecuta la consulta y espera los resultados
    const rows = await pool.query(query, user);
    // Retorna el primer resultado
    return rows;
  } catch (error) {
    // Manejo del error
    console.error("Error en usuario:", error);
    // Puedes lanzar el error o manejarlo de otra manera según tu necesidad
    throw error; // Lanza el error para que el controlador de la llamada pueda manejarlo
  }
}

async function insertReclamos(obj) {
  try {
    var query = "insert into reclamos set ?";
    var rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function deleteReclamosById(id) {
  try {
    var query = "delete from reclamos where id = ?";
    var rows = await pool.query(query, [id]);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function modificarReclamo(id) {
  try {
    // Query SQL con placeholders
    const query = "SELECT * FROM reclamos where id = ?";
    // Ejecuta la consulta y espera los resultados
    const rows = await pool.query(query, [id]);
    // Retorna el resultado
    return rows;
  } catch (error) {
    // Manejo del error
    console.error("Error en usuario:", error);
    // Puedes lanzar el error o manejarlo de otra manera según tu necesidad
    throw error; // Lanza el error para que el controlador de la llamada pueda manejarlo
  }
}

async function modificarReclamosById(obj) {
  try {
    // Query SQL con placeholders
    const query = "update reclamos set ? where id = ?";
    // Ejecuta la consulta y espera los resultados
    const rows = await pool.query(query, [obj, obj.id]);
    // Retorna el resultado
    return rows;
  } catch (error) {
    // Manejo del error
    console.error("Error en usuario:", error);
    // Puedes lanzar el error o manejarlo de otra manera según tu necesidad
    throw error; // Lanza el error para que el controlador de la llamada pueda manejarlo
  }
}

module.exports = {
  getReclamos,
  insertReclamos,
  deleteReclamosById,
  modificarReclamo,
  modificarReclamosById,
  getReclamosByUser,
};
