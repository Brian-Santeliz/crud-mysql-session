import { Router } from "express";
import { AdminController } from "../controllers/admin";
const router = Router();
const { postRouter, getRouter } = new AdminController();
router.get("/", getRouter);
router.post("/", postRouter);
export { router as routerAdmin };
