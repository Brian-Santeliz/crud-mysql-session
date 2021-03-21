import { database } from "../config/connection";

export class Middleware {
  async verificarAdmin(req, res, next) {
    const usuario = req.headers["usuario"];
    const password = req.headers["password"];
    if (!usuario || !password) {
      return res.status(400).json("Ingresa el usuario y password");
    }
    try {
      const SQL = "SELECT * from admin WHERE usuario = ?";
      const response = await database.awaitQuery(SQL, [usuario]);
      if (!response.length) {
        return res.status(404).json("Usuario no encontrado");
      }
      //comprar password si todo esta bine dejarlo pasar, caso contrario mandar un error
      console.log(response[0].password);
      next();
    } catch (error) {
      res.status(403).json({ msg: "Error autenticando", error });
    }
  }
}
