import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import Template from './material-checkout';

const Checkout = props => {
  return (
    <Template/>
  )
}

const mapStateToProps = state => ({
  cart: state.cart
})

export default withRouter(connect(mapStateToProps)(Checkout)); 