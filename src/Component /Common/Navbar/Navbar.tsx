import { useState } from "react"
import Button from "../Button/Button";
import styles from "./Navbar.module.css"
import {  useNavigate } from "react-router-dom";

const Navbar=() => {
  const [dummystate, setDummystate] = useState(true); //determines which navbar will be shown

  const navigate = useNavigate();
  const handleOnClickLogin=()=>{
    navigate("/LoginAndSignup/Login")
  }
  const handleOnClickSignUp=()=>{
    navigate("/LoginAndSignup/Register")
  }
  return (
    <nav className={`${styles.navbar}`} >
      {dummystate?
      <div className={`${styles.navbar1}`}>
        <Button onClick={handleOnClickLogin} label="Login" />
        <Button className={`${styles.SignUp}`} onClick={handleOnClickSignUp} label="Sign Up" />
      </div>
      :
      <div></div>
      }
    </nav>
  )
}

export default Navbar