import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/login'
import ReLogin from './pages/re-login'
import Grats from './pages/congrats'
import Additional from './pages/additional'



export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/login/error' element={<ReLogin/>}/>
            <Route path='/login/verify' element={<Additional/>}/>
            <Route path='/success' element={<Grats/>}/>
            
        </Routes>
    </BrowserRouter>
  )
}