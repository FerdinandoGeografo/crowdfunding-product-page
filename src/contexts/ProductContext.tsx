import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { Product } from "../models/product.interface";
import { PRODUCT } from "../constants/product.const";

interface ProductContextValue {
  product: Product;
  dispatch: React.Dispatch<ProductAction>;
}

const ProductContext = createContext<ProductContextValue | null>(null);

type ProductAction =
  | {
      type: "pledge";
      payload: { optionId: string; amount: number };
    }
  | {
      type: "toggleBookmark";
    };

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

function ProductProvider({ children }: { children: ReactNode }) {
  const [product, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{ product, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

function useProduct() {
  const context = useContext(ProductContext);
  if (context === null)
    throw new Error("ProductContext was used outside the ProductProvider");
  return context;
}

export { ProductProvider, useProduct };
