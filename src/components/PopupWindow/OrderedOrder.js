import React,{useContext} from "react";
import style from './OrderedOrder.module.css';
import cartContext from "../../store/cart-context";
import CartIem from "./CartIem";
function OrderedOrder(props) {
  const  cartCtx = useContext(cartContext)
  // cartCtx.item.forEach(item => {
  // item.amount=0
  // })
   cartCtx.item =  cartCtx.item.filter((value, index, self) =>
  index === self.findIndex((t) => (
    t.place === value.place && t.name === value.name
  ))
  )
  console.log(cartCtx.item)

  return (
        <div className={style["display-flex"]}> 
        <div className={style['order']}>
          
            {
               cartCtx.item.map(item =>
                (
      
                  <CartIem 
                  key={item.id}
                  id={item.id}
                  amount={item.amount}
                  price = {item.price}
                  name={item.name}
                />
        
                )
            )}
          
        
        </div>

        </div>

    
  );

}
export default OrderedOrder;