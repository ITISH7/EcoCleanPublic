import { useState } from "react"
import Button from "../Button/Button";
import styles from "./Navbar.module.css"
const Navbar=() => {
  const [dummystate, setDummystate] = useState(true);

  const handleOnClick=()=>{

  }
  return (
    <nav className={`${styles.navbar}`} >
      {dummystate?
      <div className={`${styles.navbar1}`}>
        <Button onClick={handleOnClick} label="Login" />
        <Button className={`${styles.SignUp}`} onClick={handleOnClick} label="Sign Up" />
      </div>
      :
      <div></div>
      }
    </nav>
  )
}

export default Navbar