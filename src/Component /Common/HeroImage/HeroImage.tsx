import image from '../../../assets/images/Hero.png'
import styles from "./HeroImage.module.css"

const HeroImage:React.FC=()=>{
    return(
        <div >
            <img className={`${styles.heroImage}`} src={image} alt="Hero Image" />
        </div>
    )
}
export default HeroImage