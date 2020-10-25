import React from 'react'
import {connect} from 'react-redux'

const Products = props => {
  return (
    <section>
      {props.products.displayedProducts.map(product => {
        return <>
          <h3> {product.name}</h3>
          <p>{product.description}</p> <span>{product.price}</span>
        </>
      })}
    </section>
  )
}

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps)(Products);