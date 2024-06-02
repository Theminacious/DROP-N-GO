import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'

function App() {
  
  const [loading,setLoading]  = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
   authService.getCurrentUser()
   .then((userData)=>{
    if (userData) {
      dispatch(login({userData}))
    }else{
      dispatch(logout())
    }
   })
   .finally(()=>setLoading(false))
  
    
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-black'>
      <div className="w-full block">
        <Header/>
        <main>
        TODO:  {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
