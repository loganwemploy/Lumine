import React, { useState,useEffect } from 'react';
import App from 'next/app';
import MainLayout from '../components/layouts/main';
import '../style/index.css'
import { UserContext } from '../UserContext';

// pages/_app.js

const MyApp =(props)=> {
 
    const { Component,pageProps } = props;
    
  const [value, setValue] = useState([{name:'roger',id:1,age:9},{name:'lyra',id:2,age:8}]);

    return (
      <UserContext.Provider value={value}>
        <MainLayout style={{width:'100%',maxWidth:'100vw',margin:'auto'}}>
          <Component {...pageProps} />
        </MainLayout>
      </UserContext.Provider>
    );
  }


export default MyApp;