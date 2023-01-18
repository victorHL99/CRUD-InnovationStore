import productRepository from "../repositories/productsRepository";
import { CreateProduct } from "../types/productsInterface";


async function createProduct(product: CreateProduct) {
  await productRepository.create(product)
}

async function getProducts() {
  const products = await productRepository.read()

  return products
}

const productsService = {
  create: createProduct,
  read: getProducts
}

export default productsService;