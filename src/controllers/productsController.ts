import { Request, Response } from "express";
import productsService from "../services/productsService";
import { CreateProduct } from "../types/productsInterface";

async function createProduct(req: Request, res: Response) {
  const { name, category, status, quantity } = req.body

  const product = {
    name,
    category,
    status,
    quantity
  } as CreateProduct

  await productsService.create(product)

  return res.status(201).json({ message: "Product created" })
}

const productsController = {
  create: createProduct
}

export default productsController;