
// import { useLocation } from 'react-router-dom';
import { useState } from 'react';
 import { useEffect } from 'react';
 import { useParams } from 'react-router-dom';

const Details = () => {
    const [product,setProduct] = useState({})
    // const location = useLocation();
    const {id} = useParams()

    const getProductDetail = async ()=>{
        try {
        const res = await fetch(`https://ilkinibadov.com/api/v1/products/${id}/details`)
         if(res.ok){
         const data = await res.json()
         setProduct(data)
         }
        } catch (error) {
                console.error(error)
        }
    }

useEffect(()=>{
    getProductDetail();
},[id])

  return (
    <div className='w-full h-screen flex justify-center items-center '>
        <div>
        <h2 className='text-red-950 text-2xl font-bold'>{product.title}</h2>
        <p className='text-cyan-900 font-bold'>{product.description}</p>
        </div>
      </div>
  )
}

export default Details