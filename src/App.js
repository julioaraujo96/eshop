import React from 'react';
import {Helmet} from 'react-helmet'
import LeftSideBar from './comps/LeftSideBar/LeftSidebar'


const App =()=>(
  <div className="App">
      <Helmet>
          <meta charSet='utf-8' />
          <title>Welcome to eShoes!</title>
        </Helmet>
    <LeftSideBar/>
  </div>
);

export default App;
