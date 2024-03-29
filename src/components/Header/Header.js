import React ,{useContext}from "react";
import style from './Header.module.css'
import HeaderSvg from "./HeaderSvg";
import CartOrderNumContext from "../../context/CartOrderNumContext";


function Header(props) {
   const orderNum= useContext(CartOrderNumContext)

  return (
    <React.Fragment>

      <div className={style['fixed-header']}> 
    <div className="container">
    <div className={style["header"]}>
          <h1 className={style["logo-header"]}>El Talb LL Talbat</h1>
      <div className={style[""]}>
        <div className={style['order-header']}>
           
              <button type = 'button'
              onClick = {
                props.changeCartIsShown
              }
              className = {
                style.button
              } >
           <HeaderSvg />
               
              Your Cart
                <p className={style['order-counter']}>{orderNum.orderNum}</p>
              

              </button>
            
        </div>
      </div>
    </div>
    </div>
      </div>
     
    </React.Fragment>
  );

}
export default Header;