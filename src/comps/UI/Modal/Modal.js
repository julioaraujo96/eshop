import React from 'react';
import styles from './Modal.module.scss';

const Modal = ({showModal,children,setShowModal}) =>{
    return(
        <div>
             {showModal && (
                <div className={styles.Modal}>
                   { children}
                </div>
            )}
        </div>
    )
}

export default Modal;