 import { Routes, Route } from 'react-router-dom';
 import Products from '../pages/Products';
 import Details from '../pages/Details';
 import NotFound from '../pages/NotFound';
import { UserLayout } from './UserLayout';
import { UserDetail } from '../pages/UserDetail';
import UserAccount from '../pages/UserAccount';
import Login from '../pages/Login';
 
const Navigator = () => {
  return (
    <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='user' element={<UserLayout/>}>
            <Route path='detail' element={<UserDetail/>}/>
            <Route path='account' element={<UserAccount/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
        
    </Routes>
  )
}

export default Navigator