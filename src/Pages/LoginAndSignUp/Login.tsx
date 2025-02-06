import { Link } from "react-router-dom"
import TextInput from "../../Component /Common/TextInput/TextInput"
import Button from "../../Component /Common/Button/Button"
import styles from "./LoginandSignup.module.css"

const Login:React.FC=()=>{
    return(
        <div>
            <p>Log in to manage your junk, track pickups, and contribute to a greener planet.</p>
            <h3> Username</h3>
            <TextInput />
            <h3>Password</h3>
            <TextInput />
            <div className={`${styles.login}`}>
                <Link to="/LoginAndSignup/Login">
                    <Button label="Login" />
                </Link>
            </div>
        </div>
    )
}
export default Login