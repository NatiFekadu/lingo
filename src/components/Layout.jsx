import React from 'react';
import Head from 'next/head';

import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Lingo</title>
      </Head>
      <header>
        <Nav />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
