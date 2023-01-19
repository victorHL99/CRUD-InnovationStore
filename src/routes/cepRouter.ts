import { Router } from "express";
import cepController from "../controllers/cepController";

const cepRouter = Router();

cepRouter.get("/", cepController.getCEP);
cepRouter.post("/:id", cepController.insertCEP)


export default cepRouter;