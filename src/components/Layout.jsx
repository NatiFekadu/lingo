import React from 'react';
import Head from 'next/head';
import { Footer } from '.';
//import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Lingo</title>
      </Head>
      {/** 
      <header>
        <Navbar as="my-navbar" />
      </header>
      */}
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
