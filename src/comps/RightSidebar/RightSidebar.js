import React from 'react';
import styles from './RightSidebar.module.scss';
import { IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const RightSidebar =()=> (
    <div className={styles.RightSidebar}>
        <IconButton>
            <SettingsIcon fontSize="large"/>
        </IconButton>
        <IconButton>
            <ShoppingCartOutlinedIcon fontSize="large"/>
        </IconButton>
        <h2>Cart is empty</h2>
    </div>
);

export default RightSidebar;