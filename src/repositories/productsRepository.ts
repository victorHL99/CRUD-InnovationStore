import client from "../config/database";
import { CreateProduct } from "../types/productsInterface";

async function createProduct(product: CreateProduct) {
  await client.products.create({
    data: product
  })
}

async function getProducts() {
  const products = await client.products.findMany()

  return products
}

const productsRepository = {
  create: createProduct,
  read: getProducts
}

export default productsRepository;