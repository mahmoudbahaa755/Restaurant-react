import {Fragment} from "react";
import FormInput from "./FormInput";
// import style from './OrderForm.module.css';
function OrderForm(){

    return(
        <Fragment>
        <form>
        
        <FormInput label="Your Name" type="text" />
        <FormInput label="City" type="text" />
        <FormInput label="Street" type="text" />
        <FormInput label="Postal Code" type="text" />
        
        </form>
        
        </Fragment>
    )
}
export default OrderForm;