import React from 'react';
import styles from './RightSidebar.module.scss';
import SettingsIcon from '@material-ui/icons/Settings';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const RightSidebar =()=> (
    <div className={styles.RightSidebar}>
        <SettingsIcon fontSize="large"/>
        <ShoppingCartOutlinedIcon fontSize="large"/>
        <h2>Cart is empty</h2>
    </div>
);

export default RightSidebar;