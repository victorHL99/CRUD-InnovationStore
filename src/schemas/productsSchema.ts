import Joi from 'joi';
import { CreateProduct } from '../types/productsInterface';

const createProduct = Joi.object<CreateProduct>({
  name: Joi.string().required(),
  category: Joi.string().required(),
  status: Joi.string().equal("ACTIVE", "INACTIVE").required(),
  quantity: Joi.number().required(),

})

const productSchema = {
  createProduct
}

export default productSchema;