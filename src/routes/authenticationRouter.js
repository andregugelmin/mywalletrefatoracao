import { Router } from "express";
import { singIn, singUp } from "../controllers/authenticationController.js";
import { validateSingIn, validateSingUp } from "../middlewares/authenticationMiddleware.js";

const authenticationRouter = Router();

authenticationRouter.post("/sign-up", validateSingUp, singUp);
authenticationRouter.post("sign-in", validateSingIn, singIn);

export default authenticationRouter;

