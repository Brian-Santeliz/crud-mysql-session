import { database } from "../config/connection";

export class MiddlewareHelper {
  async getAdmin(usuario) {
    const SQL = "SELECT * from admin WHERE usuario = ?";
    try {
      return await database.awaitQuery(SQL, [usuario]);
    } catch (error) {
      console.log("Ocurrio un error en la consulta", error);
    }
  }
}
