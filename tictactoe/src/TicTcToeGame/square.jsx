import React from "react";
export const Square = (props)=>{
    return(
        <div 
            onClick={props.onClick}
            style={{
                border: "1px solid", 
                height: "100px", 
                width:"100%", 
                display:"flex",
                alignItems: "center",
                justifyContent: 'center'
                }} 
                className="square"
            >
            <h5 style={{fontSize: "45px"}}>{props.value}</h5>
        </div>
    )
}