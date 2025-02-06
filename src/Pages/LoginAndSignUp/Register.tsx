import { Link } from "react-router-dom"
import TextInput from "../../Component /Common/TextInput/TextInput"
import Button from "../../Component /Common/Button/Button"
import styles from "./LoginandSignup.module.css"

const Register:React.FC=()=>{
    return(
        <div>
            <p>
            Create your account to schedule pickups, track your contributions, and help build a sustainable future.
            </p>
            <h3>Email Address</h3>
            <TextInput />
            <h3> Username</h3>
            <TextInput />
            <h3>Phone Number</h3>
            <TextInput />
            <h3>Password</h3>
            <TextInput input_type="password" />
            
            <h3>Select User Type</h3>
            <select>
                <option>Consumer</option>
                <option>Driver</option>
            </select>

            <div className={`${styles.register}`}>
                <Link to="/LoginAndSignup/Register">
                    <Button label="Register" />
                </Link>
            </div>
        </div>
    )
}
export default Register