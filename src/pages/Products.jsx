import Card from "../components/Card"
import Loading from "../components/loading"
import { useState,useEffect } from "react"
import { useDarkMode } from "../stores/store"


const Products = () => {

  
  const [loading,setLoading] = useState(false)
  const [text,setText] = useState("")
  const [products,setProducts] = useState([])
  const {isDrakModeEnable,toggleDarkmode} = useDarkMode()
 
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
    <div className={`${isDrakModeEnable?"bg-blue-950":"bg-white"} transition-all duration-200 h-full`}>
    <div className="w-full flex justify-center py-5">
    <input className= {`${isDrakModeEnable ? " text-white" : "text-black"} borber border-zinc-300 p-3 min-w-[300px]`} placeholder="search products" onChange={e => setText(e.target.value)} value={text} type="text" />
    <button onClick={toggleDarkmode} className="bg-red-600 px-2 text-white rounded-sm ">{isDrakModeEnable ?"Disable Darkmode" :"Enable Darkmode"}</button>
    </div>
  
    {  
     loading? <Loading/> : <div className='w-full h-full  grid grid-cols-4 gap-5 p-5' >
        {products.length ? products.map(product => <Card product={product}/>):"No products found"}
    </div>
    }  </div>
    </>
  )
}

export default Products