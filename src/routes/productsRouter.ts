import { Router } from "express";
import validateSchema from "../middlewares/validateSchema";
import productSchema from "../schemas/productsSchema";

const productsRouter = Router();

productsRouter.post("/", validateSchema(productSchema.createProduct),/*  productsController.create() */)

export default productsRouter;