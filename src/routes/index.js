import { Router } from "express";
import authenticationRouter from "./authenticationRouter.js";
import financialRouter from "./financialRouter.js";

const router = Router();
router.use(authenticationRouter);
router.use(financialRouter);

export default router;
