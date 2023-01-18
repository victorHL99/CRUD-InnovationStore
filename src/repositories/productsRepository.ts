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

async function updateProduct(id: number, product: CreateProduct) {
  await client.products.update({
    where: {
      id
    },
    data: product
  })
}


const productsRepository = {
  create: createProduct,
  read: getProducts,
  update: updateProduct
}

export default productsRepository;