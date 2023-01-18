import client from "../config/database";
import { CreateProduct } from "../types/productsInterface";

async function createProduct(product: CreateProduct) {
  await client.products.create({
    data: product
  })
}

const productsRepository = {
  create: createProduct
}

export default productsRepository;