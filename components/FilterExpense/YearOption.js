import React from "react";

function YearOption(year){

    // const n= ['2020','2021','2022','2019']
    // const n= [2020,2021,2022,2019]
    // console.log(n)
    // console.log(year.year.getFullYear())
    // if  (!n.includes(year.year.getFullYear() )){
    //     n.splice(n.indexOf(year.year.getFullYear()),1)

        return(
            <option value={year.year}>{year.year}</option>
            
            )

    //     }
    // else{
    //     return(
    //             <span></span>
    //         )
    // }
}
export default YearOption;


const removeDuplicates =(arr) =>{
        var unique = [];
        arr.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        }
        )
        ;
        return unique
    }