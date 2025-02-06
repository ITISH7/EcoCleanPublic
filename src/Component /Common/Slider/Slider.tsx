import { Link } from "react-router-dom"
import Button from "../Button/Button"
import styles from "./Slider.module.css"

const Slider:React.FC=()=>{
    let login_classname= "";
    let register_classname= "";

    const handleLogin=(e:React.MouseEvent<HTMLButtonElement>)=>{
        login_classname= `${styles.active}`;
        register_classname="";
    }
    const handleRegister=(e:React.MouseEvent<HTMLButtonElement>)=>{
        register_classname= `${styles.active}`;
        login_classname="";
    }
    return(
        <div className={`${styles.slider}`}>
            <Link to="/LoginAndSignup/Login">
                <Button className={`${login_classname}`} onClick={handleLogin} label="Login" />
            </Link>
            <Link to="/LoginAndSignup/Register">
                <Button className={`${register_classname}`} label="Register" onClick={handleRegister}/>
            </Link>
        </div>
    )
}
export default Slider