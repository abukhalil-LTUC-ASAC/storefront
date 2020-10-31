import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";


const details = props => {
  return (
    <section>
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
  cart: state.cart
})

export default withRouter(connect(mapStateToProps)(details)); 