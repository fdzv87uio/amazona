import React from 'react';
import Head from 'next/head';
import { AppBar, Typography, Toolbar, Container } from '@material-ui/core';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Amazona</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>2021 - All rights reserved</Typography>
      </footer>
    </div>
  );
}

export default Layout;
