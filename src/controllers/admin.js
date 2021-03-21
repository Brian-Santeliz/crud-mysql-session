import { AdminHelper } from "../helpers/admin";
const { post, get, encryptarPasword } = new AdminHelper();
export class AdminController {
  async postRouter(req, res) {
    const { usuario, password } = req.body;
    try {
      const passworsEncrypt = await encryptarPasword(password);
      const { affectedRows } = await post(usuario, passworsEncrypt);
      const data =
        affectedRows && "Administrador registrado, inice sesion en el almacen";

      res.status(201).json(data);
    } catch (error) {
      res.json({
        msg: "Ocurrio un error registrando el Admin, verifica que no exista",
        error,
      });
    }
  }
  async getRouter(req, res) {
    try {
      const query = await get();
      const data = !query.length ? "No existen Admin Registrados" : query;
      res.status(200).json(data);
    } catch (error) {
      res.json({ msg: "Ocurrio un error obteniendo la data", error });
    }
  }
}
