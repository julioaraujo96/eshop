import React from 'react';
import styles from './CartBackdrop.module.scss';

const Backdrop = ({showCart,setShowCart,children}) => {
    return (
        <div className={styles.Backdrop} onClick={()=>{setShowCart(!showCart)}}>
            {children}
        </div>
    );
};

export default Backdrop;