import React from "react"
import styles from "./Footer.module.css"
import {footerlists, socialitems} from "./footer.Interfaces"

const quicklinkslist:footerlists[] = [
    {
        label:"About US",
        path:""
    },{
        label:"Features",
        path:""
    },{
    label:"Contact us",
        path:""
    },{
        label:"Log in",
        path:""
    }
]
const servicelist : footerlists[]=[
    {
        label:"Junk Pickup Scheduling",
        path:''
    },{
        label:"Driver Opportunities",
        path:''
    },{
        label:"Rewards",
        path:''
    }
]
const policieslist:footerlists[]=[
    {
        label:"Terms",
    path:''
    },{
        label:"Cookies",
    path:''
    },{
        label:"Shipping And Delivery",
    path:''
    },{
        label:"Popular",
    path:''
    },
]

const socials:socialitems[]=[
    {
        link:"https://www.instagram.com/divya.not.divya/",
        source:"",
        alt_text:"facebook Icon"
    },
    {
        link:"https://www.instagram.com/divya.not.divya/",
        source:"",
        alt_text:"Twitter Icon"
    },
    {
        link:"https://www.instagram.com/divya.not.divya/",
        source:"",
        alt_text:"Linked Icon"
    },
    {
        link:"https://www.instagram.com/divya.not.divya/",
        source:"",
        alt_text:"Insta Icon"
    }
]
const Footer:React.FC = ()=>{
    return (
        <footer className={`${styles.footercontent}`}>
            <div className={`${styles.footerLeft}`}> 
                <h1>EcoClean</h1>
                <p>
                    EcoClean is your trusted partner in sustainable junk management.
                    We simplify waste disposal, promote recycling, and reward you for contributing to a cleaner planet.
                    Join us in building a greener future, one pickup at a time.
                    Together, let's make eco-friendly living effortless and impactful.
                </p>
                <div className={`${styles.socials}`}>
                    {socials.map((item)=>{
                      return <a href= {item.link}><img src={item.source} alt={item.alt_text} /> </a>
                    })}
                </div>
            </div>
            <div className={`${styles.footerlistsdiv}`}>
                
                    <ul className={`${styles.footerlist}`}>
                        <li className={`${styles.listheadings}`}>Quick Links</li>
                        {quicklinkslist.map((item)=>{
                            return <li><a href={item.path}>{item.label}</a></li>
                        })}
                    </ul> 
                    <ul className={`${styles.footerlist}`}>
                        <li className={`${styles.listheadings}`}>Services</li>
                        {servicelist.map((item)=>{
                            return <li><a href={item.path}>{item.label}</a></li>
                        })}
                    </ul>
                    <ul className={`${styles.footerlist}`}>
                        <li className={`${styles.listheadings}`}>Policies</li>
                    
                        {policieslist.map((item)=>{
                            return <li><a href={item.path}>{item.label}</a></li>
                        })}
                    </ul>
                 
            </div>
        </footer>
        )
    
}
export default Footer;