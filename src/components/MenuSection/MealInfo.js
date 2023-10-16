import {Fragment} from "react";


function MealInfo(props){

    return(
        <Fragment>
<h3>{props.name}</h3>
                    <p>{props.description}</p>
                    <p>${props.price}</p>

        </Fragment>
    )


}

export default MealInfo;