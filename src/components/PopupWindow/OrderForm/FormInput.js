

import {Fragment} from "react";


function FormInput(props){

    return(
        <Fragment>
            <label>{props.label}</label>
            <input type={props.type} />
        </Fragment>
    )
}
export default FormInput;