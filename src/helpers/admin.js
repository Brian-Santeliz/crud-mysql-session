import { database } from "../config/connection";
import { hash, compare, genSalt } from "bcrypt";
export class AdminHelper {
  async post(usuario, password) {
    const SQL = "INSERT INTO admin (usuario, password) VALUES (?, ? )";
    try {
      return await database.awaitQuery(SQL, [usuario, password]);
    } catch (error) {
      console.log("Ocurrio un error en la consulta", error);
    }
  }
  async get() {
    const SQL = "SELECT usuario FROM admin";
    try {
      return await database.awaitQuery(SQL);
    } catch (error) {
      console.log("Ocurrio un en la consulta", error);
    }
  }
  async encryptarPasword(password) {
    try {
      const salt = await genSalt(10);
      return await hash(password, salt);
    } catch (error) {
      console.log("Ocurrio un error encryptando la password", error);
    }
  }
  async verificarPassword(password, passwordEncryptada) {
    return await compare(password, passwordEncryptada);
  }
}
