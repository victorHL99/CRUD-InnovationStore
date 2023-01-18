import { Router } from "express";
import validateSchema from "../middlewares/validateSchema";
import productSchema from "../schemas/productsSchema";
import productsController from "../controllers/productsController";

const productsRouter = Router();

productsRouter.post("/", validateSchema(productSchema.createProduct), productsController.create)
productsRouter.get("/", productsController.getProducts)
productsRouter.put("/:id", validateSchema(productSchema.createProduct), productsController.update)
productsRouter.delete("/:id", productsController.delete)
export default productsRouter;