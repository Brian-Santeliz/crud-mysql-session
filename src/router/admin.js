import { Router } from "express";
import { AdminController } from "../controllers/admin";
const router = Router();
const { postRouter } = new AdminController();
router.post("/", postRouter);
export { router as routerAdmin };
