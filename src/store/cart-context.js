import React from "react";


const cartContext = React.createContext({
    item:[],
    totalAmount: 0,
    orderNum: 0,
    addToCart: () => {},
    removeFromCart: () => {},
});

export default cartContext;