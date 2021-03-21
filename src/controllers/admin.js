import { AdminHelper } from "../helpers/admin";
const { post, encryptPasword } = new AdminHelper();
export class AdminController {
  async postRouter(req, res) {
    const { usuario, password } = req.body;
    try {
      const passworsEncrypt = await encryptPasword(password);
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
}
