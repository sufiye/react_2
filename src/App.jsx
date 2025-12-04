import Loading from "./components/Loading"
import Navigator from "./components/Navigator"
import { useTokens } from "./stores/tokenStore"
export const App = () => {
  const {loading} = useTokens()
  return (
   <div className={`w-full h-full relative ${loading ? "h-screen overflow-hidden" :""}`}>
    {loading && <Loading/>}
    <Navigator/>
   </div>
  )
}
