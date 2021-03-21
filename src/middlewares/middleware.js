import { MiddlewareHelper } from "../helpers/middleware";
import { AdminHelper } from "../helpers/admin";
const { getAdmin } = new MiddlewareHelper();
const { verificarPassword } = new AdminHelper();
export class Middleware {
  async verificarAdmin(req, res, next) {
    const usuario = req.headers["usuario"];
    const password = req.headers["password"];
    if (!usuario || !password) {
      return res.status(400).json("Ingresa el usuario y password");
    }
    try {
      const response = await getAdmin(usuario);
      if (!response.length) {
        return res.status(404).json("Usuario no encontrado");
      }
      const [{ password: passwordEncryptada }] = response;
      const result = await verificarPassword(password, passwordEncryptada);
      return result
        ? next()
        : res.status(401).json("La password no es correcta");
    } catch (error) {
      res.status(403).json({ msg: "Error autenticando", error });
    }
  }
}
