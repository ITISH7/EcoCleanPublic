import SearchBar from '../Common/SearchBar/Search Bar';
import Button from '../Common/Button/Button';
import styles from './Header.module.css';
import React from 'react';
import Navbar from '../Common/Navbar/Navbar';

const Header: React.FC = () => {
    return (
        <header>
            <div className={`${styles.logoAndSearchBar}`}>
                <div className={styles.logoContainer}>
                    <p className={styles.logo}>ECOCLEAN</p>
                </div>
                <SearchBar/>
            </div>
            <Navbar />
            {/* <Button button_type="button" onClick={()=>{console.log("hello")}} label='sign up'/> */}
        </header>
    );
}

export default Header;
