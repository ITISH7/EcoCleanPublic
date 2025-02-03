import React from "react";
import styles from "./button.module.css";
type ButtonProps ={
    type: "button" | "submit" | "reset";
    onClick: () => void;
    label: string;
    className?: string;
    disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({type,onClick,label,className="",disabled=false}) => {
    return (
        <button type={type} onClick={onClick} className={`${styles} ${className}`} disabled={disabled}>{label}</button>
    )

}

export default Button;