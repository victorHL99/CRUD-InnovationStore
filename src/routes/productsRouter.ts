import { Router } from "express";
import validateSchema from "../middlewares/validateSchema";
import productSchema from "../schemas/productsSchema";
import productsController from "../controllers/productsController";

const productsRouter = Router();

productsRouter.post("/", validateSchema(productSchema.createProduct), productsController.create)
productsRouter.get("/", productsController.getProducts)

export default productsRouter;