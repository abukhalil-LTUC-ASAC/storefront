import React from 'react'
import {connect} from 'react-redux'

const Categories = props => {

  return (

      <section className="category">
        {console.log('Props:', props)}
        <h3>Browse our Categories </h3><br/>
          <p>{props.category.activeCategory.displayName}</p>


      </section>

    )
}

const mapStateToProps = state => ({
  category: state.categories,
})

export default connect(mapStateToProps)(Categories); 