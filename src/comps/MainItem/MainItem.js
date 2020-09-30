import React from 'react';
import styles from './MainItem.module.scss'

const MainItem = props =>(
    <div className={styles.MainItem} onClick={()=>props.clicked(props)} >
        <div className={styles.priceCircle}>
            <h1>${props.price}</h1>
        </div>
        <img src={props.url} alt={props.name}/>
        <h2>
            <span>{props.season}</span> <br></br> 
           
                {props.name}
        </h2>
    </div>
);

export default MainItem;