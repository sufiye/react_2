import axios from "axios"
import { useTokens } from "../stores/tokenStore"

const refreshTokens = async ()=>{
    try {
        const refreshToken = useTokens.getState().refreshToken
        const setAccessToken = useTokens.getState().setAccessToken
        const setRefreshToken = useTokens.getState().setRefreshToken
        const {data,statusText} = await axios.post("https://ilkinibadov.com/api/v1/auth/refresh",{refreshToken})
        if (statusText === "OK") {
            setAccessToken(data.accessToken)
            setRefreshToken(data.refreshToken)
            return data.accessToken
        }
        return data.accessToken
        
    } catch (error) {
        console.error(error)
    }
}