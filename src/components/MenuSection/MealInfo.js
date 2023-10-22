import {Fragment} from "react";
import style from "./MealInfo.module.css";

export default function MealInfo(props){
    return(
        <div className={style.meal}>
             <div className={style.mealImg} >
       <img
      src={props.img}
      alt="API Image"
      width={200}
      
      height={200}
    /> 
    </div>
    <div  className={style.mealInfo}>

<h3 className={style.mealName}>{props.name}</h3>
                    <p>{props.description}</p>
                    <p className={style.mealPrice}>$ {props.price}</p>
    </div>

        </div>
    )


}
