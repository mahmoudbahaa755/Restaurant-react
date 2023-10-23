import {useReducer} from "react";
import cartContext from "./cart-context";


 const defaultCartState = {
     item: [],
     totalAmount: 0,

 };
 const cartReducer = (state, action) => {
    if( action.type === 'ADD'){
         const getItemIndex= state.item.findIndex((item)=> item.id === action.item.id);
         const existingItem = state.item[getItemIndex];
         var updatedItems=[];
         let updatedItem ;
         if(existingItem){
             updatedItem={
                 ...existingItem,
                 amount : existingItem.amount+ 1
             };
             updatedItems[existingItem]=updatedItem;

         }
         else{
           updatedItems= state.item.concat(action.item);
         }
        const updatedAmount= state.totalAmount + 1*action.item.price;
        return {
            item: updatedItems,
            totalAmount:updatedAmount
        };
    }
    else{
    const updatedItems = state.item.concat(action.item);
    const updatedAmount = state.totalAmount -  1*action.item.price;
    return {
        item: updatedItems,
        totalAmount: updatedAmount
        };
     }
 };
function CartProvider(props){
   
   const [cartState,dispatchCartAction]= useReducer( cartReducer, defaultCartState)


    const addItemToCart = (item) => {
        dispatchCartAction({type:'ADD',item:item})
    };
    const removeItemFromCart = (item) => {
        dispatchCartAction({type:'REMOVE',item:item})
    }
    const cartContextValue={
        item: cartState.item,
        totalAmount: cartState.totalAmount ,
        orderNum: 0,
        price:0,
        addToCart: addItemToCart,
        removeFromCart: removeItemFromCart ,
    }

    return(<cartContext.Provider value={cartContextValue}>
            {props.children}
            
            
        </cartContext.Provider>
    )
}
export default CartProvider;