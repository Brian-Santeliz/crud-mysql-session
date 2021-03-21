import { database } from "../config/connection";
export class AlmacenHelpers {
  async get() {
    const SQL = "SELECT * FROM almacen";
    try {
      return database.awaitQuery(SQL);
    } catch (error) {
      console.log("Ocurrio un error en la consulta", error);
    }
  }
  async getId(id) {
    const SQL = "SELECT * FROM almacen WHERE id = ?";
    try {
      return database.awaitQuery(SQL, [id]);
    } catch (error) {
      console.log("Ocurrio un error en la consulta", error);
    }
  }
  async post(nombre, nombre_marca, especificaciones) {
    const SQL =
      "INSERT INTO almacen (nombre, nombre_marca, especificaciones) VALUES (?, ? , ?)";
    try {
      return await database.awaitQuery(SQL, [
        nombre,
        nombre_marca,
        especificaciones,
      ]);
    } catch (error) {
      console.log("Ocurrio un error en la consulta", error);
    }
  }
  async put(nombre, nombre_marca, especificaciones, id) {
    const SQL =
      "UPDATE almacen SET nombre = ?,nombre_marca = ?,especificaciones = ? WHERE id = ?";
    try {
      return await database.awaitQuery(SQL, [
        nombre,
        nombre_marca,
        especificaciones,
        id,
      ]);
    } catch (error) {
      console.log("Ocurrio un error en la consulta", error);
    }
  }
  async delete(id) {
    const SQL = "DELETE FROM almacen WHERE id = ?";
    try {
      return await database.awaitQuery(SQL, [id]);
    } catch (error) {
      console.log("Ocurrio un error en la consulta", error);
    }
  }
}
