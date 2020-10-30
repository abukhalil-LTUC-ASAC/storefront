import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import { addCart, getRemoteData } from '../../store/';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    padding: 30,
    minHeight: "21vh",
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitle: {
    display: "flex",
    placeContent: 'space-between',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Products = props => {
  const classes = useStyles();

  useEffect(() => {
    props.get();
  }, [])

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {props.products.displayedProducts.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
                  {card.name}<span>{card.price}<MonetizationOnOutlinedIcon/></span>
                </Typography>
                <Typography>
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={()=> props.addCart(card)}>
                  ADD TO CART
                </Button>
                <Button size="small" color="primary">
                  VIEW DETAILS
                </Button>
                {card.inventory}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = (dispatch, getState) => ({ 
  get: ()=> dispatch(getRemoteData('products')),
  addCart: (input)=> dispatch(addCart(input)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Products);