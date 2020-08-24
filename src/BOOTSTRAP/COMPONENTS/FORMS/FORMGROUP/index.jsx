import React from "react";

export default function FormControl({type , placeholder , label , controlId , textInValidated, ...otherProps}){
  return ( 
      <div className="w-50 form_control m-auto pt-3">
        <label htmlFor={controlId}>{label}</label>
        <input type={type} name={controlId} id={controlId} {...otherProps} className="form-control"/>
        <div className="text-muted text-danger">{textInValidated}</div>
      </div>
  );
}
