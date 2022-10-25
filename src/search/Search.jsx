import React from 'react'
import Product from '../pages/products/Product'
import './search.scss'
const Search = () => {
  const products = JSON.parse(localStorage.getItem("products"))
  console.log(products)
  return (
    <div className='searchComponent'>
      <div className='products'>
      {products.map((product,indx) => (
        <Product product={product} key={indx}/>
      ))}
    </div>
    </div>
  )
}

export default Search