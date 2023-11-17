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
function App() {
  return (
    <div className="App relative">
      <Header />
      <div className="mt-28 pb-60 h-full">
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


          <Route path='*' element={<div className='grow-1 h-full w-full'>Page Not Found</div>} />
        </Routes>
      </div>
      <Footer />
    </div >
  );
}

export default App;
