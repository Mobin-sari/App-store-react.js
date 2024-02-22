import { createContext, useContext, useReducer } from "react";

import { sumProduct } from "../helper/helper";

const CartContext = createContext();

const initialState = {
  selectedItems: [],
  itemCounter: 0,
  total: 0,
  checkout: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id == action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        checkout: false,
        ...sumProduct(state.selectedItems),
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumProduct(newSelectedItems),
      };
    case "INCREASE":
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id == action.payload.id
      );
      state.selectedItems[increaseIndex].quantity++;
      return {
        ...state,
        ...sumProduct(state.selectedItems),
      };
    case "DECREASE":
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id == action.payload.id
      );
      state.selectedItems[decreaseIndex].quantity--;
      return {
        ...state,
        ...sumProduct(state.selectedItems),
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemCounter: 0,
        total: 0,
        checkout: true,
      };
    default:
      throw new Error("Invalid action");
  }
};

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
