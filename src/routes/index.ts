import { Router } from "express";
import productsRouter from "./productsRouter";

const routes = Router();

// routes.use(authRouter);
routes.use("/products", productsRouter);

export default routes;