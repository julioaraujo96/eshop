import React from 'react';
import {motion,AnimatePresence} from 'framer-motion';
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
 
                     </motion.div>
             </motion.div>
            )}
           
        </AnimatePresence>
    );
};



export default SideMenu;