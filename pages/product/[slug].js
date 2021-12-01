import {
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  List,
  ListItem,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import NextLink from 'next/link';
import Image from 'next/image';

export default function ProductPage() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const productData = data.products.find((a) => a.slug === slug);

  if (!productData) {
    return <div>Product Not Found!</div>;
  } else {
    return (
      <Layout title={productData.name} description={productData.description}>
        <div className={classes.section}>
          <NextLink href="/" passHref>
            <Link>Back to home</Link>
          </NextLink>
        </div>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Image
              src={productData.image}
              alt={productData.name}
              width={640}
              height={640}
              layout="responsive"
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <List>
              <ListItem>
                <Typography component="h1" variant="h1">
                  {productData.name}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>Brand: {productData.brand}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Category: {productData.category}</Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Rating: {productData.rating} stars ({productData.numReviews}{' '}
                  reviews)
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>Description: {productData.description}</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <CardContent>
                <List>
                  <ListItem>
                    <Grid container>
                      <Grid item md={6}>
                        <Typography>Price:</Typography>
                      </Grid>
                      <Grid item md={6}>
                        <Typography>$ {productData.price}</Typography>
                      </Grid>
                      <Grid item md={6}>
                        <Typography>Status:</Typography>
                      </Grid>
                      <Grid item md={6}>
                        <Typography>
                          {productData.countInStock > 0
                            ? 'In Stock'
                            : 'Out of Stock'}
                        </Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Grid item md={12}>
                      <Button fullWidth variant="contained" color="primary">
                        Add to Cart
                      </Button>
                    </Grid>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    );
  }
}

const useStyles = makeStyles({
  section: {
    marginTop: 15,
    marginBottom: 15,
  },
});
