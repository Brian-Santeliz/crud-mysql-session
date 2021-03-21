import express from "express";
import morgan from "morgan";
import { Middleware } from "./middlewares/middleware";
import { router } from "./router/almacen";
import { routerAdmin } from "./router/admin";
const server = express();
const { verificarAdmin } = new Middleware();
server.set("portServer", 4500);
server.use(express.json());
server.use(morgan("dev"));
server.use("/api/admin", routerAdmin);
server.use("/api/almacen", verificarAdmin, router);
server.listen(server.get("portServer"), function () {
  console.log(`Servidor en el puerto: ${server.get("portServer")}`);
});
