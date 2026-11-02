import { createContext, type Dispatch } from "react";
import type { Product } from "../models/product.interface";

export type ProductAction =
  | {
      type: "pledge";
      payload: { optionId: string; amount: number };
    }
  | {
      type: "toggleBookmark";
    };

export interface ProductContextValue {
  product: Product;
  dispatch: Dispatch<ProductAction>;
  toggleBookmark: () => void;
}

export const ProductContext = createContext<ProductContextValue | null>(null);
