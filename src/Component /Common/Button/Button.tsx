import styles from "./Button.module.css"
import React from "react"

type ButtonType ={
    button_type?:"submit"|"button"|"reset",
    label:string,
    onClick?:(e:React.MouseEvent<HTMLButtonElement>)=> void,
    className?: string,
    disabled?:boolean,
}

const Button:React.FC<ButtonType> =({
    button_type = "button",
    label,
    onClick,
    className,
    disabled = false,
    
  })=>{
    return <button className={`${className} ${styles.button}`} onClick={onClick} type={button_type} disabled={disabled}>{label}</button> 
}
export default Button