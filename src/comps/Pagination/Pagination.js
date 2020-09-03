import React from 'react';
import ArrowRight from '@material-ui/icons/ArrowRightAlt';
import { IconButton } from '@material-ui/core';
import styles from './Pagination.module.scss'


const Pagination = props =>(
    <div className={styles.Pagination}>
        <IconButton>
            <ArrowRight fontSize="Large" className={[styles.icons, styles.rotate].join(' ')}/>
        </IconButton>
        <div className={styles.centerContainer}>
            <h2>1</h2>
            <div className={styles.divider}></div>
            <h1>3</h1>
        </div>
        <IconButton>
            <ArrowRight fontSize="Large" className={styles.icons}/>
        </IconButton>
    </div>
);

export default Pagination;