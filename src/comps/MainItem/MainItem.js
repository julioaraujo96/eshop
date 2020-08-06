import React from 'react';
import styles from './MainItem.module.scss'
import AirPresto from '../../assets/img/Collection/AirPresto.png';

const MainItem =() =>(
    <div className={styles.MainItem}>
        <p>$99</p>
        <img src={AirPresto} alt='Nike Air Presto'/>
        <p>
            Summer 2020 <br></br> 
            <strong>
                Nike Air Presto
            </strong>
        </p>
    </div>
);

export default MainItem;