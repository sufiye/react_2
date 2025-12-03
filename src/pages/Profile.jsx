import  { useEffect, useState } from 'react'
import { useTokens } from '../stores/tokenStore'

const Profile = () => {
    const{accessToken} = useTokens()
    const [user,setUser] = useState({})

    const getUserInfo = async ()=>{
        try {
            const res = await fetch(`https://ilkinibadov.com/api/v1/auth/me`,{
                headers:{
                    "Authorization":`Bearer ${accessToken}`
                }
            })

            if(res.ok){
                const data =await res.json()
                setUser(data)  
            }
            
        } 
        catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getUserInfo()
    },[])

  return (
    <div className='w-full h-screen flex justify-center items-center '> 
        <div className='border-2 border-b-cyan-900 p-10 rounded-2xl shadow-2xl'>
            <p className='text-5xl font-semibold text-cyan-950'>{user.firstname}</p>
            <p className='text-5xl font-semibold text-cyan-950'>{user.lastname}</p>
        </div>
    </div>
  )
}

export default Profile