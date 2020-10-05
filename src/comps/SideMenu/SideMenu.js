import React from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import Logo from '../../assets/img/shoes.png';
import Shoe from '../../assets/img/pegasus.png';
import styles from './SideMenu.module.scss'


const backdrop ={
    visible:{opacity:1},
    hidden:{opacity:0}
}

const sideMenu={
    visible:{
        opacity:1,
        width:'50vw',
        transition:{type:'spring',duration:1,stiffness:120},
    },
    hidden:{
        opacity:0,
        width:0,
        transition:{type:'spring',duration:1,stiffness:120}
        }
}

const backgroundShoe ={
    hidden:{
        right:"-100px",
        opacity:0
    },
    visible:{
        right:"-50px",
        opacity:1,
        transition:{
            duration:0.8
        }
    }
}

const socialIcons ={
    hidden:{
        x:"-100vw",
        opacity:0
    },
    visible:{
        x:0,
        opacity:1,
        scale:1.2,
        transition:{
            duration:1.5,
            type:'spring',
            stiffness:120
        }
    }
}

const SideMenu = ({showMenu}) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {showMenu && (
                 <motion.div className={styles.backdrop}
                 variants={backdrop}
                 initial="hidden"
                 animate="visible"
                 exit="hidden"
             >
                      <motion.div
                         variants={sideMenu}
                         initial="hidden"
                         animate="visible"
                         exit="hidden"
                         className={styles.SideMenu}
                         >
                                <img src={Logo} alt='website logo' className={styles.logo}/>
                             <motion.img 
                             src={Shoe} 
                             alt='Nike Pegasus Blue' 
                             className={styles.backgroundShoe}
                             variants={backgroundShoe}
                             initial="hidden"
                             animate="visible"
                             />
                             <ul>
                                 <li>About</li>
                                 <li>Sneakers</li>
                                 <li>Acessories</li>
                                 <li>Stores</li>
                                 <li>Contacts</li>
                             </ul>

                             <motion.div className={styles.socialIcons}
                             variants={socialIcons}
                             initial="hidden"
                             animate="visible"
                             >
                                <GitHubIcon fontSize="large" className={styles.icons}/>
                                <InstagramIcon fontSize="large" className={styles.icons}/>
                                <TwitterIcon fontSize="large" className={styles.icons}/>
                                <FacebookIcon fontSize="large" className={styles.icons}/>
                                
                             </motion.div>
                     </motion.div>
             </motion.div>
            )}
           
        </AnimatePresence>
    );
};



export default SideMenu;