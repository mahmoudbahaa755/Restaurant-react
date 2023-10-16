import React ,{useState,useContext} from "react";
import style from './CartWindow.module.css';
import OrderedOrder from "./OrderedOrder";
import TotalPay from "./TotalPay";
import OrderConfirm from "./OrderConfirm";
import Container from "../UI/Container";
import Button from "../UI/Button";
import cartContext from "../../store/cart-context";
function CartWindow(props){
    // const cartCtx= useContext(cartContext);
    const[confirmOrder,setConfirmOrder] =useState(false);
    return (<React.Fragment>

           <div className = {
               style['background-blur']
           }
           
           onClick ={ props.onClose} >
            </div>
        <Container>
            <div className={style["floating-window"]}>
                <OrderedOrder />
                <TotalPay />

           {/* <OrderForm /> */}
           <div>
           <span onClick={ props.onClose} >
        <Button text="Cancel" type="button" />
           </span>
           <span onClick = {
               () => setConfirmOrder(true)
           } >

        <Button text="Confirm" type="submit" />
           </span>
        </div>
        {confirmOrder && <OrderConfirm /> }
            </div>
        </Container>
        </React.Fragment>)

   
}

export default CartWindow;