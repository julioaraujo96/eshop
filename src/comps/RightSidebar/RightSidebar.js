import React from 'react';
import styles from './RightSidebar.module.scss';
import { IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const RightSidebar =({showCart,setShowCart,cart})=> {
    let cartText;
    if(cart > 0){
        cartText=(<h2>Cart has {cart} items</h2>);
    }else{
        cartText=(<h2>Cart is empty</h2>);
    }
    return(
    <div className={styles.RightSidebar}>
        <IconButton>
            <SettingsIcon fontSize="large" className={styles.icons}/>
        </IconButton>
        <IconButton onClick={()=>setShowCart(!showCart)}>
            <ShoppingCartOutlinedIcon fontSize="large" className={styles.icons}/>
        </IconButton>
        {cartText}
    </div>
);  
}
export default RightSidebar;