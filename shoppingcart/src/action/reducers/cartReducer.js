import { items } from "../constant";

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  SUBTRACT_QUANTITY,
  DISPLAY_ITEM,
  RESET_CART,
} from "../actionTypes";

const initState = {
  // items: ,

  addedItems: [],
  showItems: [],
  showModels: [],
  total: 0,
  taxes: 0,
  grandTotal: 0,
  count: 0,
};
const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT

  if (action.type === ADD_TO_CART) {
    console.log(state.addedItems);
    debugger;
    let existed_item = {};
    let addedItem = {};
    let flag = false;
    if (state.addedItems.length) {
      console.log("elseee");
      existed_item = state.addedItems.find((item) => {
        console.log("====", item);
        if (action.itemA.name == item.name) {
          if (action.itemA.subId === item.subId) {
            console.log("**********************", item, action.itemA);
            flag = true;
            return item;
          } else {
            addedItem = action.itemA;
            addedItem.subId = action.itemA.subId;
            addedItem.title = action.itemA.title;
            addedItem.price = action.itemA.price;
            debugger;
          }
        }
      });
    } else {
      console.log("innnnnn");
      addedItem = items.find((item) => item.id === action.itemA.id);
      addedItem.subId = action.itemA.subId;
      addedItem.title = action.itemA.title;
      addedItem.price = action.itemA.price;
    }
    // check if the action id exists in the addedItems
    // console.log(action.id);

    if (flag) {
        let total = 0;
        let tax = 0;
        let updatedItems = state.addedItems.map(item=>{
            if(item.id == existed_item.id){
                item.quantity += 1;
                total = total+ item.price*item.quantity;
                tax = tax + item.tax*item.quantity;
                return item
            }
            else{
                total = total+ item.price
                tax = tax + item.tax;
                return item
            }
        })
      return {
        ...state,
        addedItems: updatedItems,
        total: total,
        taxes: tax,
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;
      let newTaxes = state.taxes + addedItem.tax;

      console.log(newTaxes);
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
        taxes: newTaxes,
      };
    }
  }
  if (action.type === RESET_CART) {
    return initState;
  }
  if (action.type === DISPLAY_ITEM) {
    let showItem = items.find((item) => item.id === action.id);

    return {
      ...state,
      // showItems: [showItem],
      showItems: showItem,
    };
  }
  if (action.type === REMOVE_FROM_CART) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let new_items = state.addedItems.filter((item) => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    let newTaxes = state.taxes - itemToRemove.tax * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
      taxes: newTaxes,
    };
  }
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    if (addedItem.quantity <= 9) {
      addedItem.quantity += 1;
      let newTotal = state.total + addedItem.price;
      let newTaxes = state.taxes + addedItem.tax;

      return {
        ...state,
        total: newTotal,
        taxes: newTaxes,
      };
    } else {
      let newTotal = state.total;
      let newTaxes = state.taxes;
      return {
        ...state,
        total: newTotal,
        taxes: newTaxes,
      };
    }
  }
  if (action.type === SUBTRACT_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let newTotal = state.total;
      let newTaxes = state.taxes;
      return {
        ...state,
        total: newTotal,
        taxes: newTaxes,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      let newTaxes = state.taxes - addedItem.tax;
      return {
        ...state,
        total: newTotal,
        taxes: newTaxes,
      };
    }
  }
  if (action.type === "ADD_SHIPPING") {
    return {
      ...state,
      total: state.total + 20,
    };
  }

  if (action.type === "SUBTRACT_SHIPPING") {
    return {
      ...state,
      total: state.total - 20,
    };
  }
  if (action.type === "ADD_COUPON") {
    return {
      ...state,
      total: state.total - 10,
    };
  } else {
    return state;
  }
};
export default cartReducer;
