import { useReducer, type ReactNode } from "react";
import type { Product } from "../models/product.interface";
import { PRODUCT } from "../constants/product.const";
import { ProductContext, type ProductAction } from "./product.context";

const initialState: Product = {
  ...PRODUCT,
};

function reducer(state: Product, action: ProductAction): Product {
  switch (action.type) {
    case "pledge":
      return {
        ...state,
        amountBacked: state.amountBacked + action.payload.amount,
        totalBackers: state.totalBackers + 1,
        pledgeOptions:
          action.payload.optionId === "pledge-free"
            ? state.pledgeOptions
            : state.pledgeOptions.map((option) =>
                option.id === action.payload.optionId
                  ? { ...option, unitsLeft: option.unitsLeft - 1 }
                  : option,
              ),
      };
    case "toggleBookmark":
      return { ...state, bookmarked: !state.bookmarked };
    default:
      throw new Error("Action is unknown");
  }
}

export default function ProductProvider({ children }: { children: ReactNode }) {
  const [product, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{ product, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}
