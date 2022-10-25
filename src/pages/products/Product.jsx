import React from 'react'

const Product = ( {product}) => {
    const {id,name,desc,img,price} = product;
  return (
    <div className='product'>
        <img src={img} />
        <h3>{name}</h3>
        <p>{desc}</p>
        <p style={{paddingBottom:"1rem",color:"blue",fontFamily: 'Fuzzy Bubbles'}}>{price} Birr</p>
    </div>
  )
}

export default Product