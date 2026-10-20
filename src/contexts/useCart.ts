import { useContext } from "react";
import { CartContext } from "./CartContext";
import type { CartContextType } from "./cartTypes";

export const useCart = (): CartContextType => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
