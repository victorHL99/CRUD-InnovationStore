import productRepository from "../repositories/productsRepository";
import { CreateProduct } from "../types/productsInterface";


async function createProduct(product: CreateProduct) {
  await productRepository.create(product)
}

async function getProducts() {
  const products = await productRepository.read()

  return products
}

async function updateProduct(id: number, product: CreateProduct) {
  await productRepository.update(id, product)
}

const productsService = {
  create: createProduct,
  read: getProducts,
  update: updateProduct
}

export default productsService;