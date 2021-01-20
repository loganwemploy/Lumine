import React, { useState,useEffect } from 'react';
import App from 'next/app';
import MainLayout from '../components/layouts/main';
import '../style/index.css'
import { UserContext } from '../UserContext';

// pages/_app.js

const MyApp =(props)=> {
 
    const { Component,pageProps } = props;
    
  const [value, setValue] = useState([
{name:'eucalyptus mint',
image:'https://placehold.it/200x200.jpg',
brand:"lumi candle boutique",
category: "classic",
description: "a crisp and delicious eucalyptus mint candle to promote relaxation and a whole center",
price:1499,
countInStock:4},
// 
{name:'lavender bliss',
image:'https://placehold.it/200x200.jpg',
brand:"lumi candle boutique",
category: "floral",
description: "a floral lavender candle to promote good circulation and good vibes",
price:1499,
countInStock:3},
// 
{name:'Limoncello',
image:'https://placehold.it/200x200.jpg',
brand:"lumi candle boutique",
category: "floral",
description: "a fresh lemon candle to promote good circulation and good vibes",
price:1499,
countInStock:5}
// 
]);

    return (
      <UserContext.Provider value={value}>
        <MainLayout style={{width:'100%',maxWidth:'100vw',margin:'auto'}}>
          <Component {...pageProps} />
        </MainLayout>
      </UserContext.Provider>
    );
  }


export default MyApp;