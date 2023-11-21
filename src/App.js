import './App.css';
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import NewArrivals from "./Pages/Arrivals"
import Collection from './Components/Collection';
import Shop from "./Pages/Shop"
import Header from './Components/Header';
import Footer from './Components/Footer';
import ItemDetail from './Pages/ItemDetail';
import { Routes, Route } from 'react-router-dom';
import Profile from "./Pages/Profile"
import Cart from './Pages/Cart';
import { useEffect } from 'react';
import { decodeToken } from 'react-jwt'
import { useDispatch } from 'react-redux';
import { loginUser, logoutUser } from './store/userState';
import Addproduct from './Pages/AddProduct';
function App() {
  const dispatch = useDispatch()
  const checkPersistence = async () => {
    try {
      let token = localStorage.getItem('token')
      let decodedToken = decodeToken(token, 'ThismyKey')
      const res = await fetch("http://localhost:3000/api/user/verifyToken", {
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${token}`
        },
        method: "POST",
      })
      if (!res.ok) throw "Error"
      let data = await res.json()
      return { email: data.data.user.email, name: data.data.user.name, admin: data.data.user.admin }
    } catch (e) {
      throw e
    }
  }
  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkPersistence().then(res => {
        const response = dispatch(loginUser({ name: res.name, email: res.email, admin: res.admin }))
      }
      ).catch(e => dispatch(logoutUser()))
    }
  }, [])
  return (
    <div className="App relative max-w-full overflow-hidden">
      <Header />
      <div className="mt-28 md:pb-60 w-full">
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='/New' element={<NewArrivals />} />
            {/* Deals , Best Sellers */}
          </Route>
          <Route path='/shop' element={<Shop />} >
            <Route path='/shop/:cat' element={<Collection />} />
            <Route path='/shop/:cat/:id' element={<ItemDetail />} />
          </Route>
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Checkout' element={<Shop />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/addproduct' element={<Addproduct />} />


          <Route path='*' element={<div className='grow-1 h-full w-full'>Page Not Found</div>} />
        </Routes>
      </div>
      <Footer />
    </div >
  );
}

export default App;
