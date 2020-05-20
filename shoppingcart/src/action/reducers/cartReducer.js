import Item1 from "../../Images/camera.jpeg";
import Item2 from "../../Images/mobile.jpeg";
import Item3 from "../../Images/mic.jpeg";
import Item4 from "../../Images/ipad.jpeg";
import Item5 from "../../Images/laptop.jpeg";
import Item6 from "../../Images/smart-watch.jpeg";
import Item7 from "../../Images/headphone.jpeg";
import Item8 from "../../Images/mouse.jpeg";
import Item9 from "../../Images/speaker.jpeg";
import Item11 from "../../Images/item11.jpg";
import Item12 from "../../Images/item12.jpeg";
import Item13 from "../../Images/item13.jpeg";

import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADD_QUANTITY,
    SUBTRACT_QUANTITY,
    DISPLAY_ITEM,
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
                {id: 0, name: "Canon EOS 1500D DSLR Camera", price: 110},
                {
                    id: 1,
                    name: "Canon EOS EOS 1501D DSLR Camera",
                    price: 100,
                },
                {id: 2, name: "Canon EOS EOS 1602D DSLR Camera", price: 120},
                {id: 3, name: "Canon EOS EOS 1703D DSLR Camera", price: 140},
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
            models: [
                {id: 0, name: "Redmi Dual 8A Mobile", price: 80},
                {id: 1, name: "Redmi Pro", price: 100},
                {id: 2, name: "Redmi Note5", price: 120},
                {id: 3, name: "Redmi Note9 Pro", price: 140},
            ],
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
            models: [
                {id: 0, name: "Sony F-V420 Vocal Microphone", price: 120},
                {id: 1, name: "Sony F-V823 Vocal Microphone", price: 100},
                {id: 2, name: "Sony F-V432 Vocal Microphone", price: 120},
                {id: 3, name: "Sony F-V348 Vocal Microphone", price: 140},
            ],
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
            models: [
                {id: 0, name: "Apple Ipad-Pro", price: 260},
                {id: 1, name: "Apple Ipad-Pro-5", price: 100},
                {id: 2, name: "Apple Ipad-Pro-6", price: 120},
                {id: 3, name: "Apple Ipad-Pro-7", price: 140},
            ],
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
            models: [
                {id: 0, name: "Microsoft Surface Laptop 3", price: 160},
                {id: 1, name: "Version 4", price: 100},
                {id: 2, name: "Version 5", price: 120},
                {id: 3, name: "Version 6", price: 140},
            ],
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
            models: [
                {id: 0, name: "DZO9 TF 16G Bluetooth Smart Watch", price: 90},
                {id: 1, name: "DZO3 TF 16G Bluetooth Smart Watch", price: 100},
                {id: 2, name: "DZO5 TF 16G Bluetooth Smart Watch", price: 120},
                {id: 3, name: "DZO6 TF 16G Bluetooth Smart Watch", price: 140},
            ],
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
            models: [
                {id: 0, name: "Wemake Bluetooth Wireless Earphones", price: 120},
                {
                    id: 1,
                    name: "Wemake Bluetooth Wireless Earphones ZE6-B",
                    price: 100,
                },
                {
                    id: 2,
                    name: "Wemake Bluetooth Wireless Earphones ZE6-A",
                    price: 120,
                },
                {
                    id: 3,
                    name: "Wemake Bluetooth Wireless Earphones ZE6-Q",
                    price: 140,
                },
            ],
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
            models: [
                {id: 0, name: "HP X-3000 Wireless Mouse", price: 120},
                {id: 1, name: "HP X-3001 Wireless Mouse", price: 100},
                {id: 2, name: "HP X-3002 Wireless Mouse", price: 120},
                {id: 3, name: "HP X-3004 Wireless Mouse", price: 140},
            ],

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
            models: [
                {id: 0, name: "SONY SRS-XB12 Portable Bluetooth Speaker", price: 130},
                {id: 1, name: "SONY SRS-XB14 Portable Bluetooth Speaker", price: 100},
                {id: 2, name: "SONY SRS-XB16 Portable Bluetooth Speaker", price: 120},
                {id: 3, name: "SONY SRS-XB17 Portable Bluetooth Speaker", price: 140},
            ],
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

    addedItems: [],
    showItems: [],
    showModels: [],
    total: 0,
    taxes: 0,
    grandTotal: 0,
    count:0,
};
const cartReducer = (state = initState, action) => {
    //INSIDE HOME COMPONENT

    if (action.type === ADD_TO_CART) {
        console.log(action);
        let addedItem = state.items.find((item) => item.id === action.itemA.id);

        // check if the action id exists in the addedItems
        // console.log(action.id);
        console.log(addedItem,'hello');

        let existed_item = state.addedItems.find((item) =>
        {if(action.itemA.id === item.id && action.itemA.subId===item.subId){
            console.log(item,action.itemA);
        return item
        }
        });
        console.log(existed_item);
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
        return initState;
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
