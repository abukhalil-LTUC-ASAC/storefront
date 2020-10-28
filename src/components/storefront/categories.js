import React from 'react'
import {connect} from 'react-redux'
import { change, removeCart } from '../../store/';
import ActiveCategory from './current-category';

import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  categoryContainer: {
    padding: 30,
  },
  title: {
    fontSize: 36,
  },
  allCategories: {
    display: "flex",
  },
  category: {
    margin: 20,
    textDecoration: "none",
  },
}));


const Categories = props => {
  const classes = useStyles();

  return (
    <section className={classes.categoryContainer}>
      {console.log('Props:', props)}
      <div className={classes.title}>Browse our Categories</div>
      <div className={classes.allCategories}>
        {Object.keys(props.category.allCategories).map(function(key, index) {
          return (
            <p key={key}>
              <Link href='#' color="inherit" onClick={()=> props.change(key)} className={classes.category}>{props.category.allCategories[key].displayName}</Link>
            </p>
          )
        })}
      </div>
      <ActiveCategory category={props.category.activeCategory} className={classes.centerBody}/>
      {props.cart.inventory.map(function(product, index) {
          return (
            <p key={index} onClick={()=> props.removeCart(product)}>
              {product.name + '  ' + product.cart}
            </p>
          )
        })}
    </section>
  )
}

const mapStateToProps = state => ({
  category: state.categories,
  cart: state.cart
})

const mapDispatchToProps = { change, removeCart };

export default connect(mapStateToProps, mapDispatchToProps)(Categories); 