import HeadSearchBar from '../Common/SearchBar/HeadSearchBar/HeadSearchBar';
import Button from '../Common/UI/Button/Button';
import styles from './Header.module.css';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <div className={styles.logoContainer}>
                <p className={styles.logo}>ECOCLEAN</p>
            </div>
            <HeadSearchBar/>
            <Button type="button" onClick={()=>{console.log("hello")}} label='sign up'/>
        </header>
    );
}

export default Header;
