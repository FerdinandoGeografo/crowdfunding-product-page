import { createContext, type Dispatch } from "react";
import type { Product } from "../models/product.interface";

export type ProductAction = {
  type: "pledge";
  payload: { optionId: string; amount: number };
};

export interface ProductContextValue {
  product: Product;
  dispatch: Dispatch<ProductAction>;
}

export const ProductContext = createContext<ProductContextValue | null>(null);
