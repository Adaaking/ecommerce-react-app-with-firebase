import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({product}) => {
 const {name,path,image,shop} = product;
  return (
    <div className='card' style={{marginTop:"1rem"}}>
        <Link to={path}>
          <h1>{name}</h1>
          <img src={image} alt={name} />
          <p>{shop}</p>
        </Link>
    </div>
  )
}

export default Card