import React from 'react';
import styles from './LeftSideBar.module.scss';
import Logo from '../../assets/img/shoes.png';
import { IconButton } from '@material-ui/core';
import menuSVG from '../../assets/img//open-menu.svg'

const LeftSidebar =()=> (
    <div className={styles.LeftSideBar}>
        <IconButton>
            <img src={Logo} alt='website logo' className={styles.logo}/>
        </IconButton>
        <IconButton>
            <img src={menuSVG} alt='menu' className={styles.menu}/>
        </IconButton>
        <p>Social <br></br>Networks</p>
    </div>
);

export default LeftSidebar