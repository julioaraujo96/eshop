import React from 'react';
import styles from './MainItem.module.scss'
import AirPresto from '../../assets/img/Collection/AirPresto.png';

const MainItem =() =>(
    <div className={styles.MainItem}>
        <div className={styles.priceCircle}>
            <h1>$99</h1>
        </div>
        <img src={AirPresto} alt='Nike Air Presto'/>
        <h2>
            <span>Summer 2020</span> <br></br> 
           
                Nike Air Presto
        </h2>
    </div>
);

export default MainItem;