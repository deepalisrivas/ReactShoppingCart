import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  SUBTRACT_QUANTITY,
  DISPLAY_ITEM,
  DISPLAY_MODEL,
  RESET_CART,
} from "../actionTypes";
export const addToCart = (itemA) => {
  // console.log(id)
  return {
    type: ADD_TO_CART,
    itemA,
  };
};
export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
};
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};
export const subtractQuantity = (id) => {
  return {
    type: SUBTRACT_QUANTITY,
    id,
  };
};
export const displayItem = (id) => {
  return {
    type: DISPLAY_ITEM,
    id,
  };
};
export const displayModel = (id) => {
  return {
    type: DISPLAY_MODEL,
    id,
  };
};
export const resetCart = () => {
  return {
    type: RESET_CART,
  };
};
