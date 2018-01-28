import express from "express";
import morgan from "morgan";

const server = express();

server.set("portServer", 4500);
server.use(express.json());
server.use(morgan("dev"));
server.listen(server.get("portServer"), function () {
  console.log(`Servidor en el puerto: ${server.get("portServer")}`);
});
