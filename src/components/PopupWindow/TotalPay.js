import {useContext ,Fragment} from "react";
import style from './TotalPay.module.css'
import cartContext from "../../store/cart-context";
function TotalPay() {
  const cartCtx = useContext(cartContext)
  const zero= 0.00

  const totalPay = cartCtx.totalAmount.toFixed(2)
  return (
    <Fragment>
        <div className={style['total-display']}>
       <h1>Total : </h1>
       <h2> ${totalPay> 0? totalPay :zero }</h2>
        </div>

    
    </Fragment>
  );

}
export default TotalPay;