import { Router } from "express";
import productsRouter from "./productsRouter";
import cepRouter from "./cepRouter";

const routes = Router();

// routes.use(authRouter);
routes.use("/products", productsRouter);
routes.use("/cep", cepRouter);

export default routes;