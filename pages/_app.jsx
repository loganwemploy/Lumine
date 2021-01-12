import React from 'react';
import App from 'next/app';
import MainLayout from '../components/layouts/main';
import '../style/index.css'

// pages/_app.js

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <MainLayout style={{width:'100%',maxWidth:'100vw',margin:'auto'}}>
        <Component {...pageProps} />
      </MainLayout>
    );
  }
}

export default MyApp;