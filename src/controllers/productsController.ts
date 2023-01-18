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

async function getProducts(req: Request, res: Response) {
  const products = await productsService.read()

  return res.status(200).json(products)
}

async function updateProduct(req: Request, res: Response) {
  const { id } = req.params
  const { name, category, status, quantity } = req.body

  const product = {
    name,
    category,
    status,
    quantity
  } as CreateProduct

  await productsService.update(Number(id), product)

  return res.status(200).json({ message: "Product updated" })
}

const productsController = {
  create: createProduct,
  getProducts,
  update: updateProduct
}

export default productsController;