import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { change, removeCart, getRemoteData } from '../../store/';
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

  useEffect(() => {
    props.get();
  }, [])

  return (
    <section className={classes.categoryContainer}>
      {console.log('Props:', props)}
      <div className={classes.title}>Browse our Categories</div>
      <div className={classes.allCategories}>
        {props.category.allCategories.map(function(selection, index) {
          return (
            <p key={index}>
              <Link href='#' color="inherit" onClick={()=> props.change([selection.name, index])} className={classes.category}>{selection.display_name}</Link>
            </p>
          )
        })}
      </div>
      {console.log('props.category.activeCategory', props.category.activeCategory)}
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


const mapDispatchToProps = (dispatch, getState) => ({ 
  get: ()=> dispatch(getRemoteData('categories')),
  change: (input)=> dispatch(change(input)),
  removeCart: (input)=> dispatch(removeCart(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories); 