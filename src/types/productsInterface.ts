import { Products } from "@prisma/client";

export type CreateProduct = Omit<Products, "id" | "created_at" | "updated_at">;