import productRepository from "../repositories/productsRepository";
import { CreateProduct } from "../types/productsInterface";


async function createProduct(product: CreateProduct) {
  await productRepository.create(product)
}

const productsService = {
  create: createProduct
}

export default productsService;