import React from "react";
import style from './SubHeader.module.css'
import subHeaderImg from '../../img/subHeader.png'
function SubHeader(){

    return(
<React.Fragment>
 <div className={style['main-image']}>
        <img alt='our Restaurant'  src={subHeaderImg} />
      </div>

        <div className="container">
        <div className={` ${style['sub-header']}`}>
            <h2>Delicious Food, Delivered To You</h2>
            <p>
                Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
            </p>
            </div>
        </div>
</React.Fragment>
    );
}
export default SubHeader;