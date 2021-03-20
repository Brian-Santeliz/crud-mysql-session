import express from "express";
import morgan from "morgan";
import { router } from "./router/almacen";
const server = express();

server.set("portServer", 4500);
server.use(express.json());
server.use(morgan("dev"));
server.use("/api/almacen", router);
server.listen(server.get("portServer"), function () {
  console.log(`Servidor en el puerto: ${server.get("portServer")}`);
});
