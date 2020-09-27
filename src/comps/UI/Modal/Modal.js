import React from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import styles from './Modal.module.scss';

const backdrop ={
    visible:{opacity:1},
    hidden:{opacity:0}
}

const Modal = ({showModal,children,setShowModal}) =>{
    return(
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div className={styles.backdrop}
                variants={backdrop}
                initial="hidden"
                animate="visible">
                    
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal;