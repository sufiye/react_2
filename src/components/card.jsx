import React from 'react'
import { Link } from 'react-router-dom';
 

const Card = ({product}) => {
  return (
    <Link to={`/details/${product._id}`}>
    <div className='min-w-[300px] w-full p-2.5 border border-gray-300 rounded-lg shadow-md '>
    <img className=' w-full h-[250px] object-contain' src={product.image ? product.image :product.images[0]} alt="" />
    <h1 className='text-2xl font-semibold mt-3'>{product.title}</h1>
    <h2 className='text-sm my-4'>{product.description}</h2>
    <p className='text-red-600 font-medium'>{product.currency}{product.price}</p>
    </div>
    </Link>
  )
}

export default Card