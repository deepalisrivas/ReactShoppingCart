import Item1 from "../../Images/camera.jpeg";
import Item2 from "../../Images/mobile.jpeg";
import Item3 from "../../Images/mic.jpeg";
import Item4 from "../../Images/ipad.jpeg";
import Item5 from "../../Images/laptop.jpeg";
import Item6 from "../../Images/smart-watch.jpeg";
import Item7 from "../../Images/headphone.jpeg";
import Item8 from "../../Images/mouse.jpeg";
import Item9 from "../../Images/speaker.jpeg";

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  SUBTRACT_QUANTITY,
  DISPLAY_ITEM,
  DISPLAY_MODEL,
  RESET_CART,
} from "../actionTypes";

const initState = {
  items: [
    {
      id: 1,
      title: "Canon EOS 1500D DSLR Camera",
      price: 110,
      img: Item1,
      tax: 2.5,
      review: 2,
      ratingName: "rating1",
      models: [
        {
          id: 1,
          name: "EOS 1501D",
          price: 100,
          img: Item1,
        },
        { id: 2, name: "EOS 1602D", price: 120, img: Item1 },
        { id: 3, name: "EOS 1703D", price: 130, img: Item1 },
      ],
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam",
      reviewDescription1: {
        name: "John Doe",
        Date: "June 18,2016",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
          "ut aliquip ex ea commodo consequat.",
      },

      reviewDescription2: {
        name: "Jimmy Val",
        Date: "November 16,2019",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
          " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
          " aliquip ex ea commodo consequat.",
      },
    },
    {
      id: 2,
      title: "Redmi Dual 8A Mobile",
      price: 80,
      img: Item2,
      tax: 1.6,
      review: 2,
      ratingName: "rating2",

      model1: "Redmi Pro",
      model2: "Redmi Note5",
      model3: "Redmi Note9 Pro",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
        "eiusmod tempor incididunt ut labore et dolore magna aliqua." +
        " Ut enim ad minim veniam",

      reviewDescription1: {
        name: "Deepali Srivastava",
        Date: "March 10,2019",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },

      reviewDescription2: {
        name: "Astha Singh",
        Date: "September 14,2016",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
          " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    },
    {
      id: 3,
      title: "Sony F-V420 Vocal Microphone",
      price: 120,
      img: Item3,
      tax: 1.3,
      review: 2,
      ratingName: "rating3",

      model1: "F-V823",
      model2: "F-V432",
      model3: "D-V348",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam",

      reviewDescription1: {
        name: "Medha Gupta",
        Date: "December 14,2017",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },

      reviewDescription2: {
        name: "Shailly Ghosh",
        Date: "December 14,2014",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
          " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    },
    {
      id: 4,
      title: "Apple Ipad-Pro",
      price: 260,
      img: Item4,
      tax: 6.2,
      review: 2,
      ratingName: "rating4",

      model1: "Pro-5",
      model2: "Pro-6",
      model3: "Pro-7",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
        " Ut enim ad minim veniam",

      reviewDescription1: {
        name: "Aman Patel",
        Date: "September 14,2019",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
          " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },

      reviewDescription2: {
        name: "Deepak Jain",
        Date: "February 14,2019",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    },
    {
      id: 5,
      title: "Microsoft Surface Laptop 3",
      price: 160,
      img: Item5,
      tax: 2.2,
      review: 2,
      ratingName: "rating5",

      model1: "Version 4",
      model2: "Version 5",
      model3: "Version 6",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam",

      reviewDescription1: {
        name: "Ujjawal Chikara",
        Date: "August 14,2019",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
          " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
          "ut aliquip ex ea commodo consequat.",
      },

      reviewDescription2: {
        name: "Bharat Saxena",
        Date: "January 14,2019",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
          "" +
          "ut aliquip ex ea commodo consequat.",
      },
    },
    {
      id: 6,
      title: "DZO9 TF 16G Bluetooth Smart Watch",
      price: 90,
      img: Item6,
      tax: 1.5,
      review: 2,
      ratingName: "rating6",

      model1: "DZO3 ",
      model2: "DZO5",
      model3: "DZO6",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
        " Ut enim ad minim veniam",

      reviewDescription1: {
        name: "Akanksha Gupta",
        Date: "April 14,2018",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
          "ut aliquip ex ea commodo consequat.",
      },

      reviewDescription2: {
        name: "Priya Patel",
        Date: "July 14,2017",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
          " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
          "ut aliquip ex ea commodo consequat.",
      },
    },
    {
      id: 7,
      title: "Wemake Bluetooth Wireless Earphones",
      price: 120,
      img: Item7,
      tax: 1.7,
      review: 2,
      ratingName: "rating7",

      model1: "ZE6-B",
      model2: "ZE6-A",
      model3: "ZE6-Q",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
        " Ut enim ad minim veniam",

      reviewDescription1: {
        name: "Johny Deo",
        Date: "October 14,2015",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi" +
          " ut aliquip ex ea commodo consequat.",
      },

      reviewDescription2: {
        name: "Winny James",
        Date: "July 14,2016",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
          "ut aliquip ex ea commodo consequat.",
      },
    },
    {
      id: 8,
      title: "HP X-3000 Wireless Mouse",
      price: 120,
      img: Item8,
      tax: 1.4,
      review: 2,
      ratingName: "rating8",

      model1: "X-3001",
      model2: "X-3002",
      model3: "X-3004",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
        " Ut enim ad minim veniam",

      reviewDescription1: {
        name: "Salmon",
        Date: "June 14,2019",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi" +
          " ut aliquip ex ea commodo consequat.",
      },

      reviewDescription2: {
        name: "Maximilian",
        Date: "May 14,2019",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
          "aliquip ex ea commodo consequat.",
      },
    },
    {
      id: 9,
      title: "SONY SRS-XB12 Portable Bluetooth Speaker",
      price: 130,
      img: Item9,
      tax: 1.2,
      review: 5,
      ratingName: "rating9",

      model1: "XB14",
      model2: "XB16",
      model3: "XB17",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
        " Ut enim ad minim veniam",

      reviewDescription1: {
        name: "Dia Sharma",
        Date: "August 14,2019",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
          " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
          "ut aliquip ex ea commodo consequat.",
      },

      reviewDescription2: {
        name: "Ravi Vats",
        Date: "September 14,2019",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
          "ut aliquip ex ea commodo consequat.",
      },
    },
  ],
  // models: [
  //   {
  //     id: 1,
  //     name: "EOS 1501D",
  //     price: 100,
  //     img: Item1,
  //   },
  // ],
  addedItems: [],
  showItems: [],
  showModels: [],
  total: 0,
  taxes: 0,
  grandTotal: 0,
};
const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT

  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);
    // check if the action id exists in the addedItems
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
        taxes: state.taxes + addedItem.tax,
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
    return state;
  }
  if (action.type === DISPLAY_ITEM) {
    let showItem = state.items.find((item) => item.id === action.id);

    return {
      ...state,
      showItems: [showItem],
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
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    let newTaxes = state.taxes + addedItem.tax;
    return {
      ...state,
      total: newTotal,
      taxes: newTaxes,
    };
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
      total: state.total - 100,
    };
  }
  // if (action.type === DISPLAY_MODEL) {
  //   let addedModel = state.models.find((item) => item.id === action.id);
  //   return {
  //     ...state,
  //     showModels: [addedModel],
  //   };
  // }
  else {
    return state;
  }
};
export default cartReducer;
