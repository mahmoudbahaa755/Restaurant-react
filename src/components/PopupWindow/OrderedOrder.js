import { useState,useEffect, useContext } from "react";

import cartContext from "../../store/cart-context";
import CartIem from "./CartIem";
export default function OrderedOrder() {
  const cartCtx = useContext(cartContext)

  const [orders, setOrders] = useState([])

  useEffect(() => {
    setOrders(cartCtx.item.filter((value) => value.amount > 0));
  }, [cartCtx.item]);

  return (

    <div>

      {
        orders.map(item =>
        (
          <CartIem
            key={item.id}
            price={item.price}
            name={item.name}
            amount={item.amount}
          />

        )
        )}



    </div>


  );

}
 