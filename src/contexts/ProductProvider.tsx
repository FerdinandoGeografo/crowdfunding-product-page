import { useReducer, type ReactNode } from "react";
import type { Product } from "../models/product.interface";
import { FREE_OPTION, PRODUCT } from "../constants/product.const";
import { isValidPledge } from "../utils/pledge";
import { ProductContext, type ProductAction } from "./product.context";

const initialState: Product = {
  ...PRODUCT,
};

function reducer(state: Product, action: ProductAction): Product {
  switch (action.type) {
    case "pledge": {
      const { optionId, amount } = action.payload;
      const option =
        optionId === FREE_OPTION.id
          ? FREE_OPTION
          : state.pledgeOptions.find((option) => option.id === optionId);
      if (!option || !isValidPledge(option, amount)) return state;

      return {
        ...state,
        amountBacked: state.amountBacked + amount,
        totalBackers: state.totalBackers + 1,
        pledgeOptions:
          option.kind === "free"
            ? state.pledgeOptions
            : state.pledgeOptions.map((paidOption) =>
                paidOption.id === optionId
                  ? { ...paidOption, unitsLeft: paidOption.unitsLeft - 1 }
                  : paidOption,
              ),
      };
    }
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
