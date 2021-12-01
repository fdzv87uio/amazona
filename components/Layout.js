import React from 'react';
import Head from 'next/head';
import {
  AppBar,
  Typography,
  Toolbar,
  Container,
  makeStyles,
} from '@material-ui/core';

function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Amazona</title>
      </Head>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Typography>Amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>2021 - All rights reserved</Typography>
      </footer>
    </div>
  );
}

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      margin: 10,
    },
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
  },
});

export default Layout;
