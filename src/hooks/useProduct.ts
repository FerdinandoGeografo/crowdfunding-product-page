import { useContext } from "react";
import { ProductContext } from "../contexts/product.context";

export default function useProduct() {
  const context = useContext(ProductContext);
  if (context === null)
    throw new Error("ProductContext was used outside the ProductProvider");
  return context;
}
