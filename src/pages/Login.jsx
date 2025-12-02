import React, { useState } from 'react'

const Login = () => {
const[formData,setFormData] = useState({})

const handleInputChange =(title,value)=>{
        setFormData(prevState =>({
            ...prevState,
            [title]:value
        }))
}

const handleLogin = async ()=>{
    try {
        const res = await fetch("",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        })

        if (res.ok) {
            const data = res.json()
            console.log(data);
            
        }
    } catch (error) {
        console.error(error)
    }
}

  return (
  <div className=' w-full h-screen flex justify-center items-center'>
      <div className='border border-zinc-300 p-5 max-w-[300px] w-full h-fit flex flex-col gap-5'>
        <input className='border border-zinc-300 p-2' onChange={(e)=>{
            handleInputChange("email",e.target.value)
        }} type="email" />
        <input className='border border-zinc-300 p-2'
         onChange={(e)=>{
            handleInputChange("password",e.target.value)
        }} type="password" />

        <button className='border border-zinc-300 bg-amber-600 p-2'  onClick={handleLogin}>Login</button>
    </div>
  </div>
  )
}

export default Login