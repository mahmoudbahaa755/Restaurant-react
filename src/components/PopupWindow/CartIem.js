import React from "react";
import style from './CartIem.module.css'
function CartIem(props){
    return(
              <div  >
                <div className={style.name}>
                  {props.name}
                  </div>
                    <div className={style.flex}> 
                      <p className={style.price}>
                 $ { props.price}
                </p>
                  
                
                </div>
              </div>
    )
}

export default CartIem;