import { Router } from "express";
import { getFinancialEvents, getFinancialSum, insertFinancialEvents } from "../controllers/financialController.js";
import { validateSession } from "../middlewares/authenticationMiddleware.js";
import { validateFinancial } from "../middlewares/financialMiddleware.js";

const financialRouter = Router();

financialRouter.post("/financial-events", validateSession, validateFinancial, insertFinancialEvents)
financialRouter.get("/financial-events", validateSession, getFinancialEvents);
financialRouter.get("/financial-events/sum", validateSession, getFinancialSum);

export default financialRouter;