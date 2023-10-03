import React from 'react'
import Image from './Image'

const Product = ({prod}) => {
  return (
    <div id='container'>
       <h2 id="brand">Brand:- {prod.brand}</h2>
       <div id="information">
         <h4 id='category'>Category:- {prod.category}</h4>
          <p id="desc">{prod.description} </p>
            <Image images={prod.images}/>
          <span id='desc_percentage'>Discount percentage:- {prod.discountPercentage}</span>
       </div>
    </div>
  )
}

export default Product