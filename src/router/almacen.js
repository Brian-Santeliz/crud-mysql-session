import { Router } from "express";
import { AlmacenController } from "../controllers/almacen";
const {
  getRouter,
  postRouter,
  getRouterId,
  putRouter,
  deleteRouter,
} = new AlmacenController();
const router = Router();
router.get("/", getRouter);
router.get("/:id", getRouterId);
router.post("/", postRouter);
router.put("/:id", putRouter);
router.delete("/:id", deleteRouter);
export { router };
