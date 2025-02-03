import React from "react"
import styles from './HeadSearchBar.module.css';
const HeadSearchBar :React.FC=()=> {
  return (
    <div className={styles.headSearchBar}>
      <p></p> 
      <div className={styles.inputContainer}>
        <input type="text" className={styles.input} placeholder="Search something here"/>
      </div>
    </div>
  )
}
export default HeadSearchBar;