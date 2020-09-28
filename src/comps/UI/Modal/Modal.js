import React from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import CancelIcon from '@material-ui/icons/Cancel';
import styles from './Modal.module.scss';

const backdrop ={
    visible:{opacity:1},
    hidden:{opacity:0}
}

const modal ={
    hidden:{
        y:"-100vh",
        opacity:0
    },
    visible:{
        y:"50px",
        opacity:1,
        transition:{delay:0.5}
    }
}

const Modal = ({showModal,children,setShowModal}) =>{
    return(
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div className={styles.backdrop}
                variants={backdrop}
                initial="hidden"
                animate="visible"
                exit="hidden"
                >
                    <motion.div className={styles.Modal}
                    variants={modal}>
                        <CancelIcon className={styles.CancelIcon} onClick={()=>setShowModal(false)}/>
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal;