import Card from "../components/Card"
import Loading from "../components/loading"
import { useState,useEffect } from "react"

const Products = () => {

  
  const [loading,setLoading] = useState(false)
  const [text,setText] = useState("")
  const [products,setProducts] = useState([])
 
  const getProducts =async () =>{
    try {
      setLoading(true)
      const res = await fetch(text.length >= 2 ? `https://ilkinibadov.com/api/v1/search?searchterm=${text}`:"https://ilkinibadov.com/api/v1/products")
      if (res.ok) {
        
        const data = await res.json()
        console.log(data);
        
        setProducts(text.length >= 2 ? data.content : data.products)
       
      }

    } catch (error) {
      console.error(error)
    }
    finally{
      setLoading(false)
    }
  }

 useEffect(()=>{
  getProducts()
 },[text])
 
  return (
    <>
    <div className="flex justify-center mt-3">
    <input className="border w-[300px] p-2  rounded-sm " placeholder="search products" onChange={e => setText(e.target.value)} value={text} type="text" />
    </div>
    
 {  
     loading? <Loading/> : <div className='w-full h-screen  grid grid-cols-4 gap-5 p-5' >
        {products.length ? products.map(product => <Card product={product}/>):"No products found"}
    </div>
    }
    </>
  )
}

export default Products