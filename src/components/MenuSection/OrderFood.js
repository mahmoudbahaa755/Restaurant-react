import React ,{useContext} from "react";
import style from "./OrderFood.module.css";
import MealInfo from "./MealInfo";

function OrderFood(props){

    const addOrderToCart = () => {
console.log('still working in it')
    
    }
    const OneOrderMoreOrLess= (e) => {
    if (e.target.id === 'up') {
        // countOrderContext= countOrderContext-1
        props.AmountChange(props.name ,props.menuType ,props.id,-1)
    }
    else if (e.target.id === 'down') {
        // countOrderContext= countOrderContext+1
        props.AmountChange(props.name ,props.menuType,props.id,1)

    }
    }
    return(
<React.Fragment>
{/* <countOrderContext.Provider value={{countState:counter,dispatchCounter:dispatchCounter}}> */}
            <div className={style["order-food"]}>

                <div>
                    <MealInfo name={props.name} img={props.img} description={props.description} price={props.price} />
                </div>
                <div className={style["order-amount"]}>
                    <div className={style['menu']}>

                        <label >Amount</label>
                        <div className={style['amount-button']}>
                            <p className={style["amount-number"]}>{props.amount}</p>
                            <span value='down' id="down" onClick={OneOrderMoreOrLess} className={style["down-arrow"]}></span>
                            <span value='up' id="up" onClick={OneOrderMoreOrLess} className={style["up-arrow"]}></span>

                        </div>
                        <div>
                        <button type='button' className={style["button"]} onClick={addOrderToCart}>+ Add</button>
                    </div>
                    </div>
                    
                </div>
            </div>
            {/* </countOrderContext.Provider> */}
</React.Fragment>
    );
}
export default OrderFood