import React from 'react';
import styles from './LeftSideBar.module.scss';
import Logo from '../../assets/img/shoes.png';
import menuSVG from '../../assets/img//open-menu.svg'
import { IconButton } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';


const LeftSidebar =()=> (
    <div className={styles.LeftSideBar}>
        <IconButton>
            <img src={Logo} alt='website logo' className={styles.logo}/>
        </IconButton>
        <IconButton>
            <img src={menuSVG} alt='menu' className={styles.menu}/>
        </IconButton>
        <div>
            <div className={styles.socialsContainer}>
                <div className={styles.textHide}>
                    <p>Social <br></br>Networks</p>
                    <div className={styles.socialIcons}>
                        <GitHubIcon fontSize="large" className={styles.icons}/>
                        <InstagramIcon fontSize="large" className={styles.icons}/>
                        <TwitterIcon fontSize="large" className={styles.icons}/>
                        <FacebookIcon fontSize="large" className={styles.icons}/>
                    </div>
                </div>
            </div>
        </div>
  </div>
  		
  
);

export default LeftSidebar