import React from "react";
import style from './Button.module.css'

function Button(props){

    return (
        <React.Fragment>
        <button type={props.type} className={style.button}>{props.text}</button>
        </React.Fragment>

    );
}

export default Button;