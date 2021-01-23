import React from 'react';
import styles from './Topbar.module.scss';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Topbar =({showCart,setShowCart})=> (
    <div className={styles.Topbar}>
        <IconButton>
            <MenuIcon fontSize="large" className={styles.icons}/>
        </IconButton>
        <IconButton onClick={()=>setShowCart(!showCart)}>
            <ShoppingCartOutlinedIcon fontSize="large" className={styles.icons}/>
        </IconButton>
        <h2>Cart is empty</h2>
    </div>
);

export default Topbar;