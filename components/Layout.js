import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Typography,
  Toolbar,
  Container,
  makeStyles,
  Link,
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
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Amazona</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <NextLink href="/cart" passHref>
            <Link>
              <Typography>Cart</Typography>
            </Link>
          </NextLink>
          <NextLink href="/login" passHref>
            <Link>
              <Typography>Login</Typography>
            </Link>
          </NextLink>
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
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },

  main: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
});

export default Layout;
