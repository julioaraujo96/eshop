import React from 'react';
import styles from './LeftSideBar.module.scss';
import Logo from '../../assets/img/shoes.png';
import menuSVG from '../../assets/img//open-menu.svg'

const LeftSidebar =()=> (
    <div className={styles.LeftSideBar}>
        <img src={Logo} alt='website logo' className={styles.logo}/>
        <img src={menuSVG} alt='menu' className={styles.menu}/>
        <p>Social <br></br>Networks</p>
    </div>
);

export default LeftSidebar