import React from 'react';
import {Helmet} from 'react-helmet'
import LeftSideBar from '../comps/LeftSideBar/LeftSidebar'
import MainItem from '../comps/MainItem/MainItem';
import styles from './App.module.scss'


const App =()=>(
  <div className={styles.App}>
      <Helmet>
          <meta charSet='utf-8' />
          <title>Welcome to eShoes!</title>
        </Helmet>
    <LeftSideBar/>
    <MainItem/>   
  </div>
);

export default App;
