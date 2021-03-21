import { database } from "../config/connection";
import { hash, compare, genSalt, getRounds } from "bcrypt";
export class AdminHelper {
  async post(usuario, password) {
    const SQL = "INSERT INTO admin (usuario, password) VALUES (?, ? )";
    try {
      return await database.awaitQuery(SQL, [usuario, password]);
    } catch (error) {
      console.log("Ocurrio un error en la query", error);
    }
  }
  async encryptPasword(password) {
    try {
      const salt = await genSalt(10);
      return await hash(password, salt);
    } catch (error) {
      console.log("Ocurrio un error encryptando la password", error);
    }
  }
}
