import { AlmacenHelpers } from "../helpers/almacen";
const { get, post, getId, put, delete: deleteHelper } = new AlmacenHelpers();
export class AlmacenController {
  async getRouter(req, res) {
    try {
      const query = await get();
      const data = !query.length ? "Almacen vacio" : query;
      res.status(200).json(data);
    } catch (error) {
      console.log("Error obteniendo la data", error);
    }
  }
  async getRouterId(req, res) {
    const { id } = req.params;
    try {
      const query = await getId(id);
      const data = !query.length ? "Producto no encontrado" : query;
      res.status(200).json(data);
    } catch (error) {
      console.log("Error obteniendo la data", error);
    }
  }
  async postRouter(req, res) {
    const { nombre, marca, especificaciones } = req.body;
    try {
      const { affectedRows } = await post(nombre, marca, especificaciones);
      const data = affectedRows
        ? "Producto registrado en el almacen"
        : "No se pudo registrar el producto";
      res.status("200").json(data);
    } catch (error) {
      console.log("Error insertando la data", error);
    }
  }
  async putRouter(req, res) {
    const { id } = req.params;
    const { nombre, marca, especificaciones } = req.body;
    try {
      const { changedRows } = await put(nombre, marca, especificaciones, id);
      const data = changedRows
        ? "Producto actualizado"
        : "El producto no fue actualizado";
      res.status(201).json(data);
    } catch (error) {
      console.log("Error actualizando la data", error);
    }
  }
  async deleteRouter(req, res) {
    const { id } = req.params;
    try {
      const { affectedRows } = await deleteHelper(id);
      const data = affectedRows
        ? "Producto eliminado del almacen"
        : "El producto no fue eliminado";
      res.status(200).json(data);
    } catch (error) {
      console.log("Error eliminando la data", error);
    }
  }
}
