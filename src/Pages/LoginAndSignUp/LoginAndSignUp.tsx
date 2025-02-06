import React from "react"
import Slider from "../../Component /Common/Slider/Slider"
import { Outlet } from "react-router-dom"
import styles from "./LoginandSignup.module.css"
import HeroImage from "../../Component /Common/HeroImage/HeroImage"
import Footer from "../../Component /Footer/Footer"
import Header from "../../Component /Header/Header"

const LoginAndSignup:React.FC=()=>{
    return(
        <div>
            <Header/>
            
            <div className={`${styles.LoginandSignup}`}>
                <div>
                    <HeroImage />
                </div>
                <div className={`${styles.interactive}`}>
                    <div>
                        <p className={`${styles.welcomeMessage}`}>Welcome to EcoClean</p>
                        <Slider />
                    </div>
                    <Outlet />
                </div>
            </div>

            <Footer />
        </div>
    )
}
export default LoginAndSignup